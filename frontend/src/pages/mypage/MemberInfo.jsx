import React, { useState, useEffect } from 'react';
import MyPageHeader from '../../components/mypage/MyPageHeader';
import { useNavigate } from 'react-router-dom';
import { tokenCheck } from '../../api/auth/tokenCheck';

const MemberInfo = () => {
  // 토큰 인증
  const navigate = useNavigate();

  useEffect(() => {
    console.log(process.env.REACT_APP_API_BASE_URL);
    const authenticate = async () => {
      const data = await tokenCheck(navigate); // tokenCheck 호출
      if (!data) {
        // 인증 실패 시 navigate 함수로 로그인 페이지로 이동
        navigate('/Login');
      } else {
        console.log('인증 성공:', data); // 성공 시 필요한 작업 수행

      }
    };

    authenticate(); // 인증 함수 호출
  }, [navigate]);

  const [representativeAddress, setRepresentativeAddress] = useState(null);
  const [generalAddresses, setGeneralAddresses] = useState([]);
  const [userInfo, setUserInfo] = useState(null); // 사용자 정보 상태 추가

  // 사용자 정보 가져오기 함수
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch('http://localhost:80/api/auth/userInfo', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // 토큰을 헤더에 포함
          },
        });
        if (response.ok) {
          
          const data = await response.json();
          setUserInfo(data); // 사용자 정보 저장
          console.log(data); 
        } else {
          console.error('Failed to fetch user info');
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, []);

  // 데이터 가져오기 함수
  const fetchData = async () => {
    try {
      const addressResponse = await fetch(
        'http://localhost:80/api/mypage/getAddress?userId=23',
        {
          
          cache: 'no-store',
        }
      );

      const address = await addressResponse.json();

      const representative = address.find((addr) => addr.isRepresent === true); // 대표 주소

      const general = address.filter((addr) => addr.isRepresent !== true); // 일반 주소

      setRepresentativeAddress(representative);
      setGeneralAddresses(general);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // 컴포넌트가 처음 렌더링될 때 데이터 가져오기
  useEffect(() => {
    fetchData();
  }, []);

  // 대표 주소지 등록
  const switchRepresentativeAddress = (id) => {
    fetch(
      `http://localhost:80/api/mypage/switchRepresentativeAddress/${id}?userId=23`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          alert('대표 주소지가 변경되었습니다.');
          fetchData(); // 변경 후 데이터를 다시 가져와 상태 업데이트
        } else {
          console.error('대표 주소지 변경 실패', response.status);
        }
      })
      .catch((error) => console.error('대표 주소지 변경 중 에러 발생:', error));
  };

  // 대표 주소 삭제
  const DeleteRepresentativeAddress = (id) => {
    if (generalAddresses.length === 0) {
      fetch(`http://localhost:80/api/mypage/deleteAddress/${id}`, {
        method: 'DELETE',
        cache: 'no-store',
      })
        .then((response) => {
          if (response.ok) {
            fetchData(); // 변경 후 데이터를 다시 가져와 상태 업데이트
          } else {
            console.error('삭제 실패', response.status);
          }
        })
        .catch((error) => console.error('에러 발생:', error));
    } else {
      alert(
        '대표 주소지는 일반 주소지가 없을 경우에만 삭제가 가능합니다.\n 대표 주소지를 다른 주소지로 변경 후 해당 주소를 삭제해주세요.'
      );
    }
  };

  // 일반 주소 삭제
  const DeleteGeneralAddress = (id) => {
    fetch(`http://localhost:80/api/mypage/deleteAddress/${id}`, {
      method: 'DELETE',
      cache: 'no-store',
    })
      .then((response) => {
        if (response.ok) {
          fetchData(); // 변경 후 데이터를 다시 가져와 상태 업데이트
          
        } else {
          console.error('일반 주소 삭제 실패');
        }
      })
      .catch((error) => console.error('삭제 요청 중 에러 발생:', error));
  };

  return (

    
    <div>
      <div>
        <MyPageHeader title="회원정보" description="회원정보 등록 및 수정" />
      </div>
      <div className="mypage-label1">회원정보</div>
      <div className="rounded-box">
     
        {userInfo ? (
          <div>
            <p>닉네임: {userInfo.nickname}</p>
            <p>이메일: {userInfo.email}</p>

            <p>생일: {userInfo.birth}</p>
          </div>
        ) : (
          <p>회원 정보를 불러오는 중...</p>
        )}
      </div>

      <div className="mypage-label1">배송지 관리</div>

      <div className="delivery-rounded-box">
        {!representativeAddress && generalAddresses.length === 0 ? (
          <div className="mypage-label2">등록된 배송지가 없습니다.</div>
        ) : (
          <>
            {/* 대표 주소 -> 단일 객체 */}
            <div className="address-block">
              <div className="represent-address">대표주소지</div>
              <div className="other-address">
                {representativeAddress?.address || '대표주소지가 없습니다.'}
              </div>
              <div className="address-buttons">
                <button
                  className="mypage-button"
                  onClick={() =>
                    DeleteRepresentativeAddress(representativeAddress?.id)
                  }
                >
                  삭제
                </button>
              </div>
            </div>

            {/* 일반 주소 -> 배열로 반환 */}
            {generalAddresses.map((address) => (
              <div key={address.id} className="address-block">
                <div className="represent-address">일반</div>
                <div className="other-address">{address.address}</div>
                <div className="address-buttons">
                  <button
                    className="mypage-button"
                    onClick={() => switchRepresentativeAddress(address.id)}
                  >
                    대표주소지 등록
                  </button>
                  <button
                    className="mypage-button"
                    onClick={() => DeleteGeneralAddress(address.id)}
                  >
                    삭제
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
        <div className="address-buttons">
          <button className="delivery-button">배송지 등록하기</button>
        </div>
      </div>
    </div>
  );
};

export default MemberInfo;
