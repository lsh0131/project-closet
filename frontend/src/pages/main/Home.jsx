import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


// Import CSS
import "../../assets/styles/main.css"
import "../../assets/styles/util.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'material-design-iconic-font/dist/css/material-design-iconic-font.min.css';

// Import Page
import Cart from "../cart/Cart";

// Import Hooks
import useCartAndSidebar from "../../hooks/useCartAndSidebar";

// Import Components
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import Category from '../../hooks/Category';
import FilterSearch from '../../hooks/FilterSearch';


// Function Aria
function Home() {
    const { isCartOpen, toggleCart } = useCartAndSidebar();
    const [isModalOpen, setModalOpen] = useState(false); // 모달 상태 관리
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('*'); // 메인 화면의 카테고리 중 filter의 상태

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };


    const handleQuickView = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };


    const goToDetailPage = () => {
        navigate('/Detail'); // '/target-page' 경로로 이동
    }

    return (
        <>
            {/* Header */}
            <Header toggleCart={toggleCart}/>

            {/*Cart*/}
            <Cart isCartOpen={isCartOpen} toggleCart={toggleCart}/>

            {/* Slider */}
            <section className="section-slide">
                <div className="wrap-slick1">
                    <div className="slick1">
                        <div
                            className="item-slick1"
                            style={{backgroundImage: "url(images/slide-01.jpg)"}}
                        >
                            <div className="container h-full">
                                <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                                      <span className="ltext-101 cl2 respon2">
                                        Women Collection 2024
                                      </span>
                                    <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                                        NEW SEASON
                                    </h2>
                                    <a
                                        href="/shop"
                                        className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                                    >
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="sec-banner bg0 p-t-80 p-b-50">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
                            <div className="block1 wrap-pic-w">
                                <img src="images/banner-01.jpg" alt="IMG-BANNER"/>

                                <a href="../../../../../Downloads/cozastore-master/product.html"
                                   className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                                    <div className="block1-txt-child1 flex-col-l">
								<span className="block1-name ltext-102 trans-04 p-b-8">
									Women
								</span>

                                        <span className="block1-info stext-102 trans-04">
									Spring 2018
								</span>
                                    </div>

                                    <div className="block1-txt-child2 p-b-4 trans-05">
                                        <div className="block1-link stext-101 cl0 trans-09">
                                            Shop Now
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/*Banner*/}
                        <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
                            <div className="block1 wrap-pic-w">
                                <img src="images/banner-02.jpg" alt="IMG-BANNER"/>

                                <a href="../../../../../Downloads/cozastore-master/product.html"
                                   className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                                    <div className="block1-txt-child1 flex-col-l">
								<span className="block1-name ltext-102 trans-04 p-b-8">
									Men
								</span>

                                        <span className="block1-info stext-102 trans-04">
									Spring 2018
								</span>
                                    </div>

                                    <div className="block1-txt-child2 p-b-4 trans-05">
                                        <div className="block1-link stext-101 cl0 trans-09">
                                            Shop Now
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
                            <div className="block1 wrap-pic-w">
                                <img src="images/banner-03.jpg" alt="IMG-BANNER"/>

                                <a href="../../../../../Downloads/cozastore-master/product.html"
                                   className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                                    <div className="block1-txt-child1 flex-col-l">
								<span className="block1-name ltext-102 trans-04 p-b-8">
									Accessories
								</span>

                                        <span className="block1-info stext-102 trans-04">
									New Trend
								</span>
                                    </div>

                                    <div className="block1-txt-child2 p-b-4 trans-05">
                                        <div className="block1-link stext-101 cl0 trans-09">
                                            Shop Now
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="bg0 p-t-23 p-b-140">
                <div className="container">
                    <div className="p-b-10">
                        <h3 className="ltext-103 cl5">
                            Product Overview
                        </h3>
                    </div>

                    <div className="flex-w flex-sb-m p-b-52">
                        <Category onFilterChange={handleFilterChange} />
                        <FilterSearch />
                    </div>

                    <div className="row isotope-grid">
                        <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                            {/*Block2*/}
                            <div className="block2">
                                <div className="block2-pic hov-img0">
                                    <img src="images/product-01.jpg" alt="IMG-PRODUCT"/>

                                    <button
                                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04"
                                        onClick={handleQuickView}
                                    >
                                        Quick View
                                    </button>
                                </div>

                                <div className="block2-txt flex-w flex-t p-t-14">
                                    <div className="block2-txt-child1 flex-col-l ">
                                        <a
                                            onClick={goToDetailPage} // 클릭 이벤트로 이동 처리
                                            className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                                            style={{cursor: "pointer"}} // 스타일로 클릭 가능함을 표시
                                        >
                                            Only Check Trouser
                                        </a>

                                        <span className="stext-105 cl3">
									$16.64
								</span>
                                    </div>

                                    <div className="block2-txt-child2 flex-r p-t-3">
                                    <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                            <img className="icon-heart1 dis-block trans-04"
                                                 src="images/icons/icon-heart-01.png" alt="ICON"/>
                                            <img className="icon-heart2 dis-block trans-04 ab-t-l"
                                                 src="images/icons/icon-heart-02.png" alt="ICON"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                            {/*Block2*/}
                            <div className="block2">
                                <div className="block2-pic hov-img0">
                                    <img src="images/product-02.jpg" alt="IMG-PRODUCT"/>

                                    <a href="#"
                                       className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                        Quick View
                                    </a>
                                </div>

                                <div className="block2-txt flex-w flex-t p-t-14">
                                    <div className="block2-txt-child1 flex-col-l ">
                                        <a href="../../../../../Downloads/cozastore-master/product-detail.html"
                                           className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                            Herschel supply
                                        </a>

                                        <span className="stext-105 cl3">
									$35.31
								</span>
                                    </div>

                                    <div className="block2-txt-child2 flex-r p-t-3">
                                        <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                            <img className="icon-heart1 dis-block trans-04"
                                                 src="images/icons/icon-heart-01.png" alt="ICON"/>
                                            <img className="icon-heart2 dis-block trans-04 ab-t-l"
                                                 src="images/icons/icon-heart-02.png" alt="ICON"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men">
                            {/*Block2*/}
                            <div className="block2">
                                <div className="block2-pic hov-img0">
                                    <img src="images/product-03.jpg" alt="IMG-PRODUCT"/>

                                    <a href="#"
                                       className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                        Quick View
                                    </a>
                                </div>

                                <div className="block2-txt flex-w flex-t p-t-14">
                                    <div className="block2-txt-child1 flex-col-l ">
                                        <a href="../../../../../Downloads/cozastore-master/product-detail.html"
                                           className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                            Only Check Trouser
                                        </a>

                                        <span className="stext-105 cl3">
									$25.50
								</span>
                                    </div>

                                    <div className="block2-txt-child2 flex-r p-t-3">
                                        <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                            <img className="icon-heart1 dis-block trans-04"
                                                 src="images/icons/icon-heart-01.png" alt="ICON"/>
                                            <img className="icon-heart2 dis-block trans-04 ab-t-l"
                                                 src="images/icons/icon-heart-02.png" alt="ICON"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                            {/*Block2*/}
                            <div className="block2">
                                <div className="block2-pic hov-img0">
                                    <img src="images/product-04.jpg" alt="IMG-PRODUCT"/>

                                    <a href="#"
                                       className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                        Quick View
                                    </a>
                                </div>

                                <div className="block2-txt flex-w flex-t p-t-14">
                                    <div className="block2-txt-child1 flex-col-l ">
                                        <a href="../../../../../Downloads/cozastore-master/product-detail.html"
                                           className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                            Classic Trench Coat
                                        </a>

                                        <span className="stext-105 cl3">
									$75.00
								</span>
                                    </div>

                                    <div className="block2-txt-child2 flex-r p-t-3">
                                        <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                            <img className="icon-heart1 dis-block trans-04"
                                                 src="images/icons/icon-heart-01.png" alt="ICON"/>
                                            <img className="icon-heart2 dis-block trans-04 ab-t-l"
                                                 src="images/icons/icon-heart-02.png" alt="ICON"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                            {/*Block2*/}
                            <div className="block2">
                                <div className="block2-pic hov-img0">
                                    <img src="images/product-05.jpg" alt="IMG-PRODUCT"/>

                                    <a href="#"
                                       className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                        Quick View
                                    </a>
                                </div>

                                <div className="block2-txt flex-w flex-t p-t-14">
                                    <div className="block2-txt-child1 flex-col-l ">
                                        <a href="../../../../../Downloads/cozastore-master/product-detail.html"
                                           className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                            Front Pocket Jumper
                                        </a>

                                        <span className="stext-105 cl3">
									$34.75
								</span>
                                    </div>

                                    <div className="block2-txt-child2 flex-r p-t-3">
                                        <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                            <img className="icon-heart1 dis-block trans-04"
                                                 src="images/icons/icon-heart-01.png" alt="ICON"/>
                                            <img className="icon-heart2 dis-block trans-04 ab-t-l"
                                                 src="images/icons/icon-heart-02.png" alt="ICON"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item watches">
                            {/*Block2*/}
                            <div className="block2">
                                <div className="block2-pic hov-img0">
                                    <img src="images/product-06.jpg" alt="IMG-PRODUCT"/>

                                    <a href="#"
                                       className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                        Quick View
                                    </a>
                                </div>

                                <div className="block2-txt flex-w flex-t p-t-14">
                                    <div className="block2-txt-child1 flex-col-l ">
                                        <a href="../../../../../Downloads/cozastore-master/product-detail.html"
                                           className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                            Vintage Inspired Classic
                                        </a>

                                        <span className="stext-105 cl3">
									$93.20
								</span>
                                    </div>

                                    <div className="block2-txt-child2 flex-r p-t-3">
                                        <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                            <img className="icon-heart1 dis-block trans-04"
                                                 src="images/icons/icon-heart-01.png" alt="ICON"/>
                                            <img className="icon-heart2 dis-block trans-04 ab-t-l"
                                                 src="images/icons/icon-heart-02.png" alt="ICON"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                            {/*Block2*/}
                            <div className="block2">
                                <div className="block2-pic hov-img0">
                                    <img src="images/product-07.jpg" alt="IMG-PRODUCT"/>

                                    <a href="#"
                                       className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                        Quick View
                                    </a>
                                </div>

                                <div className="block2-txt flex-w flex-t p-t-14">
                                    <div className="block2-txt-child1 flex-col-l ">
                                        <a href="../../../../../Downloads/cozastore-master/product-detail.html"
                                           className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                            Shirt in Stretch Cotton
                                        </a>

                                        <span className="stext-105 cl3">
									$52.66
								</span>
                                    </div>

                                    <div className="block2-txt-child2 flex-r p-t-3">
                                        <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                            <img className="icon-heart1 dis-block trans-04"
                                                 src="images/icons/icon-heart-01.png" alt="ICON"/>
                                            <img className="icon-heart2 dis-block trans-04 ab-t-l"
                                                 src="images/icons/icon-heart-02.png" alt="ICON"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                            {/*Block2*/}
                            <div className="block2">
                                <div className="block2-pic hov-img0">
                                    <img src="images/product-08.jpg" alt="IMG-PRODUCT"/>

                                    <a href="#"
                                       className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                        Quick View
                                    </a>
                                </div>

                                <div className="block2-txt flex-w flex-t p-t-14">
                                    <div className="block2-txt-child1 flex-col-l ">
                                        <a href="../../../../../Downloads/cozastore-master/product-detail.html"
                                           className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                            Pieces Metallic Printed
                                        </a>

                                        <span className="stext-105 cl3">
									$18.96
								</span>
                                    </div>

                                    <div className="block2-txt-child2 flex-r p-t-3">
                                        <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                            <img className="icon-heart1 dis-block trans-04"
                                                 src="images/icons/icon-heart-01.png" alt="ICON"/>
                                            <img className="icon-heart2 dis-block trans-04 ab-t-l"
                                                 src="images/icons/icon-heart-02.png" alt="ICON"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item shoes">
                            {/*Block2*/}
                            <div className="block2">
                                <div className="block2-pic hov-img0">
                                    <img src="images/product-09.jpg" alt="IMG-PRODUCT"/>

                                    <a href="#"
                                       className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                        Quick View
                                    </a>
                                </div>

                                <div className="block2-txt flex-w flex-t p-t-14">
                                    <div className="block2-txt-child1 flex-col-l ">
                                        <a href="../../../../../Downloads/cozastore-master/product-detail.html"
                                           className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                            Converse All Star Hi Plimsolls
                                        </a>

                                        <span className="stext-105 cl3">
									$75.00
								</span>
                                    </div>

                                    <div className="block2-txt-child2 flex-r p-t-3">
                                        <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                            <img className="icon-heart1 dis-block trans-04"
                                                 src="images/icons/icon-heart-01.png" alt="ICON"/>
                                            <img className="icon-heart2 dis-block trans-04 ab-t-l"
                                                 src="images/icons/icon-heart-02.png" alt="ICON"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                            {/*Block2*/}
                            <div className="block2">
                                <div className="block2-pic hov-img0">
                                    <img src="images/product-10.jpg" alt="IMG-PRODUCT"/>

                                    <a href="#"
                                       className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                        Quick View
                                    </a>
                                </div>

                                <div className="block2-txt flex-w flex-t p-t-14">
                                    <div className="block2-txt-child1 flex-col-l ">
                                        <a href="../../../../../Downloads/cozastore-master/product-detail.html"
                                           className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                            Femme T-Shirt In Stripe
                                        </a>

                                        <span className="stext-105 cl3">
									$25.85
								</span>
                                    </div>

                                    <div className="block2-txt-child2 flex-r p-t-3">
                                        <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                            <img className="icon-heart1 dis-block trans-04"
                                                 src="images/icons/icon-heart-01.png" alt="ICON"/>
                                            <img className="icon-heart2 dis-block trans-04 ab-t-l"
                                                 src="images/icons/icon-heart-02.png" alt="ICON"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men">
                            {/*Block2*/}
                            <div className="block2">
                                <div className="block2-pic hov-img0">
                                    <img src="images/product-11.jpg" alt="IMG-PRODUCT"/>

                                    <a href="#"
                                       className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                        Quick View
                                    </a>
                                </div>

                                <div className="block2-txt flex-w flex-t p-t-14">
                                    <div className="block2-txt-child1 flex-col-l ">
                                        <a href="../../../../../Downloads/cozastore-master/product-detail.html"
                                           className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                            Herschel supply
                                        </a>

                                        <span className="stext-105 cl3">
									$63.16
								</span>
                                    </div>

                                    <div className="block2-txt-child2 flex-r p-t-3">
                                        <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                            <img className="icon-heart1 dis-block trans-04"
                                                 src="images/icons/icon-heart-01.png" alt="ICON"/>
                                            <img className="icon-heart2 dis-block trans-04 ab-t-l"
                                                 src="images/icons/icon-heart-02.png" alt="ICON"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men">
                            {/*Block2*/}
                            <div className="block2">
                                <div className="block2-pic hov-img0">
                                    <img src="images/product-12.jpg" alt="IMG-PRODUCT"/>

                                    <a href="#"
                                       className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                        Quick View
                                    </a>
                                </div>

                                <div className="block2-txt flex-w flex-t p-t-14">
                                    <div className="block2-txt-child1 flex-col-l ">
                                        <a href="../../../../../Downloads/cozastore-master/product-detail.html"
                                           className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                            Herschel supply
                                        </a>

                                        <span className="stext-105 cl3">
									$63.15
								</span>
                                    </div>

                                    <div className="block2-txt-child2 flex-r p-t-3">
                                        <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                            <img className="icon-heart1 dis-block trans-04"
                                                 src="images/icons/icon-heart-01.png" alt="ICON"/>
                                            <img className="icon-heart2 dis-block trans-04 ab-t-l"
                                                 src="images/icons/icon-heart-02.png" alt="ICON"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                            {/*Block2*/}
                            <div className="block2">
                                <div className="block2-pic hov-img0">
                                    <img src="images/product-13.jpg" alt="IMG-PRODUCT"/>

                                    <a href="#"
                                       className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                        Quick View
                                    </a>
                                </div>

                                <div className="block2-txt flex-w flex-t p-t-14">
                                    <div className="block2-txt-child1 flex-col-l ">
                                        <a href="../../../../../Downloads/cozastore-master/product-detail.html"
                                           className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                            T-Shirt with Sleeve
                                        </a>

                                        <span className="stext-105 cl3">
									$18.49
								</span>
                                    </div>

                                    <div className="block2-txt-child2 flex-r p-t-3">
                                        <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                            <img className="icon-heart1 dis-block trans-04"
                                                 src="images/icons/icon-heart-01.png" alt="ICON"/>
                                            <img className="icon-heart2 dis-block trans-04 ab-t-l"
                                                 src="images/icons/icon-heart-02.png" alt="ICON"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                            {/*Block2*/}
                            <div className="block2">
                                <div className="block2-pic hov-img0">
                                    <img src="images/product-14.jpg" alt="IMG-PRODUCT"/>

                                    <a href="#"
                                       className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                        Quick View
                                    </a>
                                </div>

                                <div className="block2-txt flex-w flex-t p-t-14">
                                    <div className="block2-txt-child1 flex-col-l ">
                                        <a href="../../../../../Downloads/cozastore-master/product-detail.html"
                                           className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                            Pretty Little Thing
                                        </a>

                                        <span className="stext-105 cl3">
									$54.79
								</span>
                                    </div>

                                    <div className="block2-txt-child2 flex-r p-t-3">
                                        <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                            <img className="icon-heart1 dis-block trans-04"
                                                 src="images/icons/icon-heart-01.png" alt="ICON"/>
                                            <img className="icon-heart2 dis-block trans-04 ab-t-l"
                                                 src="images/icons/icon-heart-02.png" alt="ICON"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item watches">
                            {/*Block2*/}
                            <div className="block2">
                                <div className="block2-pic hov-img0">
                                    <img src="images/product-15.jpg" alt="IMG-PRODUCT"/>

                                    <a href="#"
                                       className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                        Quick View
                                    </a>
                                </div>

                                <div className="block2-txt flex-w flex-t p-t-14">
                                    <div className="block2-txt-child1 flex-col-l ">
                                        <a href="../../../../../Downloads/cozastore-master/product-detail.html"
                                           className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                            Mini Silver Mesh Watch
                                        </a>

                                        <span className="stext-105 cl3">
									$86.85
								</span>
                                    </div>

                                    <div className="block2-txt-child2 flex-r p-t-3">
                                        <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                            <img className="icon-heart1 dis-block trans-04"
                                                 src="images/icons/icon-heart-01.png" alt="ICON"/>
                                            <img className="icon-heart2 dis-block trans-04 ab-t-l"
                                                 src="images/icons/icon-heart-02.png" alt="ICON"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                            {/*Block2*/}
                            <div className="block2">
                                <div className="block2-pic hov-img0">
                                    <img src="images/product-16.jpg" alt="IMG-PRODUCT"/>

                                    <a href="#"
                                       className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                        Quick View
                                    </a>
                                </div>

                                <div className="block2-txt flex-w flex-t p-t-14">
                                    <div className="block2-txt-child1 flex-col-l ">
                                        <a href="../../../../../Downloads/cozastore-master/product-detail.html"
                                           className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                            Square Neck Back
                                        </a>

                                        <span className="stext-105 cl3">
									$29.64
								</span>
                                    </div>

                                    <div className="block2-txt-child2 flex-r p-t-3">
                                        <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                            <img className="icon-heart1 dis-block trans-04"
                                                 src="images/icons/icon-heart-01.png" alt="ICON"/>
                                            <img className="icon-heart2 dis-block trans-04 ab-t-l"
                                                 src="images/icons/icon-heart-02.png" alt="ICON"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Load more*/}
                    <div className="flex-c-m flex-w w-full p-t-45">
                        <a href="#" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">
                            Load More
                        </a>
                    </div>
                </div>
            </section>

            <footer className="bg3 p-t-75 p-b-32">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3 p-b-50">
                            <h4 className="stext-301 cl0 p-b-30">
                                Categories
                            </h4>

                            <ul>
                                <li className="p-b-10">
                                    <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                        Women
                                    </a>
                                </li>

                                <li className="p-b-10">
                                    <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                        Men
                                    </a>
                                </li>

                                <li className="p-b-10">
                                    <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                        Shoes
                                    </a>
                                </li>

                                <li className="p-b-10">
                                    <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                        Watches
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-sm-6 col-lg-3 p-b-50">
                            <h4 className="stext-301 cl0 p-b-30">
                                Help
                            </h4>

                            <ul>
                                <li className="p-b-10">
                                    <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                        Track Order
                                    </a>
                                </li>

                                <li className="p-b-10">
                                    <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                        Returns
                                    </a>
                                </li>

                                <li className="p-b-10">
                                    <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                        Shipping
                                    </a>
                                </li>

                                <li className="p-b-10">
                                    <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                        FAQs
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-sm-6 col-lg-3 p-b-50">
                            <h4 className="stext-301 cl0 p-b-30">
                                GET IN TOUCH
                            </h4>

                            <p className="stext-107 cl7 size-201">
                                Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or
                                call us on (+1) 96 716 6879
                            </p>

                            <div className="p-t-27">
                                <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                                    <i className="fa fa-facebook"></i>
                                </a>

                                <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                                    <i className="fa fa-instagram"></i>
                                </a>

                                <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                                    <i className="fa fa-pinterest-p"></i>
                                </a>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3 p-b-50">
                            <h4 className="stext-301 cl0 p-b-30">
                                Newsletter
                            </h4>

                            <form>
                                <div className="wrap-input1 w-full p-b-4">
                                    <input className="input1 bg-none plh1 stext-107 cl7" type="text" name="email"
                                           placeholder="email@example.com"/>
                                    <div className="focus-input1 trans-04"></div>
                                </div>

                                <div className="p-t-18">
                                    <button
                                        className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="p-t-40">
                        <div className="flex-c-m flex-w p-b-18">
                            <a href="#" className="m-all-1">
                                <img src="images/icons/icon-pay-01.png" alt="ICON-PAY"/>
                            </a>

                            <a href="#" className="m-all-1">
                                <img src="images/icons/icon-pay-02.png" alt="ICON-PAY"/>
                            </a>

                            <a href="#" className="m-all-1">
                                <img src="images/icons/icon-pay-03.png" alt="ICON-PAY"/>
                            </a>

                            <a href="#" className="m-all-1">
                                <img src="images/icons/icon-pay-04.png" alt="ICON-PAY"/>
                            </a>

                            <a href="#" className="m-all-1">
                                <img src="images/icons/icon-pay-05.png" alt="ICON-PAY"/>
                            </a>
                        </div>

                        <p className="stext-107 cl6 txt-center">
                            Copyright &copy;
                            <script>document.write(new Date().getFullYear());</script>
                            All rights reserved | Made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a
                            href="https://colorlib.com" target="_blank">Colorlib</a> &amp; distributed by <a
                            href="https://themewagon.com" target="_blank">ThemeWagon</a>
                        </p>
                    </div>
                </div>
            </footer>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
}

export default Home;