import React from 'react';
import { Helmet } from 'react-helmet';

const Board = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>General Search Results - Bootdey.com</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        {/* jQuery & Bootstrap JS */}
        <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.bundle.min.js"></script>
        {/* Inline style */}
        <style type="text/css">{`
          body{
            background:#dcdcdc;
            margin-top:20px;}
          
          .widget-26 {
            color: #3c4142;
            font-weight: 400;
          }

          .widget-26 tr:first-child td {
            border: 0;
          }

          .widget-26 .widget-26-job-emp-img img {
            width: 35px;
            height: 35px;
            border-radius: 50%;
          }

          .widget-26 .widget-26-job-title {
            min-width: 200px;
          }

          .widget-26 .widget-26-job-title a {
            font-weight: 400;
            font-size: 0.875rem;
            color: #3c4142;
            line-height: 1.5;
          }

          .widget-26 .widget-26-job-title a:hover {
            color: #68CBD7;
            text-decoration: none;
          }

          .widget-26 .widget-26-job-title .employer-name {
            margin: 0;
            line-height: 1.5;
            font-weight: 400;
            color: #3c4142;
            font-size: 0.8125rem;
            color: #3c4142;
          }

          .widget-26 .widget-26-job-title .employer-name:hover {
            color: #68CBD7;
            text-decoration: none;
          }

          .widget-26 .widget-26-job-title .time {
            font-size: 12px;
            font-weight: 400;
          }

          .widget-26 .widget-26-job-info {
            min-width: 100px;
            font-weight: 400;
          }

          .widget-26 .widget-26-job-info p {
            line-height: 1.5;
            color: #3c4142;
            font-size: 0.8125rem;
          }

          .widget-26 .widget-26-job-info .location {
            color: #3c4142;
          }

          .widget-26 .widget-26-job-salary {
            min-width: 70px;
            font-weight: 400;
            color: #3c4142;
            font-size: 0.8125rem;
          }

          .widget-26 .widget-26-job-category {
            padding: .5rem;
            display: inline-flex;
            white-space: nowrap;
            border-radius: 15px;
          }

          .widget-26 .widget-26-job-category .indicator {
            width: 13px;
            height: 13px;
            margin-right: .5rem;
            float: left;
            border-radius: 50%;
          }

          .widget-26 .widget-26-job-category span {
            font-size: 0.8125rem;
            color: #3c4142;
            font-weight: 600;
          }

          .widget-26 .widget-26-job-starred svg {
            width: 20px;
            height: 20px;
            color: #fd8b2c;
          }

          .widget-26 .widget-26-job-starred svg.starred {
            fill: #fd8b2c;
          }
          .bg-soft-base {
            background-color: #e1f5f7;
          }
          .bg-soft-warning {
              background-color: #fff4e1;
          }
          .bg-soft-success {
              background-color: #d1f6f2;
          }
          .bg-soft-danger {
              background-color: #fedce0;
          }
          .bg-soft-info {
              background-color: #d7efff;
          }

          .search-form {
            width: 80%;
            margin: 0 auto;
            margin-top: 1rem;
          }

          .search-form input {
            height: 100%;
            background: transparent;
            border: 0;
            display: block;
            width: 100%;
            padding: 1rem;
            height: 100%;
            font-size: 1rem;
          }

          .search-form select {
            background: transparent;
            border: 0;
            padding: 1rem;
            height: 100%;
            font-size: 1rem;
          }

          .search-form select:focus {
            border: 0;
          }

          .search-form button {
            height: 100%;
            width: 100%;
            font-size: 1rem;
          }

          .search-form button svg {
            width: 24px;
            height: 24px;
          }

          .search-body {
            margin-bottom: 1.5rem;
          }

          .search-body .search-filters .filter-list {
            margin-bottom: 1.3rem;
          }

          .search-body .search-filters .filter-list .title {
            color: #3c4142;
            margin-bottom: 1rem;
          }

          .search-body .search-filters .filter-list .filter-text {
            color: #727686;
          }

          .search-body .search-result .result-header {
            margin-bottom: 2rem;
          }

          .search-body .search-result .result-header .records {
            color: #3c4142;
          }

          .search-body .search-result .result-header .result-actions {
            text-align: right;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .search-body .search-result .result-header .result-actions .result-sorting {
            display: flex;
            align-items: center;
          }

          .search-body .search-result .result-header .result-actions .result-sorting span {
            flex-shrink: 0;
            font-size: 0.8125rem;
          }

          .search-body .search-result .result-header .result-actions .result-sorting select {
            color: #68CBD7;
          }

          .search-body .search-result .result-header .result-actions .result-sorting select option {
            color: #3c4142;
          }

          @media (min-width: 768px) and (max-width: 991.98px) {
            .search-body .search-filters {
              display: flex;
            }
            .search-body .search-filters .filter-list {
              margin-right: 1rem;
            }
          }

          .card-margin {
              margin-bottom: 1.875rem;
          }

          @media (min-width: 992px){
          .col-lg-2 {
              flex: 0 0 16.66667%;
              max-width: 16.66667%;
          }
          }

          .card-margin {
              margin-bottom: 1.875rem;
          }
          .card {
              border: 0;
              box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);
              -webkit-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);
              -moz-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);
              -ms-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);
          }
          .card {
              position: relative;
              display: flex;
              flex-direction: column;
              min-width: 0;
              word-wrap: break-word;
              background-color: #ffffff;
              background-clip: border-box;
              border: 1px solid #e6e4e9;
              border-radius: 8px;
          }
        `}</style>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 card-margin">
            <div className="card search-form">
              <div className="card-body p-0">
                <form id="search-form">
                  <div className="row">
                    <div className="col-12">
                      <div className="row no-gutters">
                        <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                          <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                          >
                            <option>Location</option>
                            <option>London</option>
                            <option>Boston</option>
                            <option>Mumbai</option>
                            <option>New York</option>
                            <option>Toronto</option>
                            <option>Paris</option>
                          </select>
                        </div>
                        <div className="col-lg-8 col-md-6 col-sm-12 p-0">
                          <input
                            type="text"
                            placeholder="Search..."
                            className="form-control"
                            id="search"
                            name="search"
                          />
                        </div>
                        <div className="col-lg-1 col-md-3 col-sm-12 p-0">
                          <button type="submit" className="btn btn-base">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-search"
                            >
                              <circle cx="11" cy="11" r="8"></circle>
                              <line
                                x1="21"
                                y1="21"
                                x2="16.65"
                                y2="16.65"
                              ></line>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card card-margin">
              <div className="card-body">
                <div className="row search-body">
                  <div className="col-lg-12">
                    <div className="search-result">
                      <div className="result-header">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="records">
                              Showing: <b>1-20</b> of <b>200</b> result
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="result-actions">
                              <div className="result-sorting">
                                <span>Sort By:</span>
                                <select
                                  className="form-control border-0"
                                  id="exampleOption"
                                >
                                  <option value="1">Relevance</option>
                                  <option value="2">Names (A-Z)</option>
                                  <option value="3">Names (Z-A)</option>
                                </select>
                              </div>
                              <div className="result-views">
                                <button
                                  type="button"
                                  className="btn btn-soft-base btn-icon"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-list"
                                  >
                                    <line x1="8" y1="6" x2="21" y2="6"></line>
                                    <line x1="8" y1="12" x2="21" y2="12"></line>
                                    <line x1="8" y1="18" x2="21" y2="18"></line>
                                    <line x1="3" y1="6" x2="3" y2="6"></line>
                                    <line x1="3" y1="12" x2="3" y2="12"></line>
                                    <line x1="3" y1="18" x2="3" y2="18"></line>
                                  </svg>
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-soft-base btn-icon"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-grid"
                                  >
                                    <rect
                                      x="3"
                                      y="3"
                                      width="7"
                                      height="7"
                                    ></rect>
                                    <rect
                                      x="14"
                                      y="3"
                                      width="7"
                                      height="7"
                                    ></rect>
                                    <rect
                                      x="14"
                                      y="14"
                                      width="7"
                                      height="7"
                                    ></rect>
                                    <rect
                                      x="3"
                                      y="14"
                                      width="7"
                                      height="7"
                                    ></rect>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="result-body">
                        <div className="table-responsive">
                          <table className="table widget-26">
                            <tbody>
                              <tr>
                                <td>
                                  <div className="widget-26-job-emp-img">
                                    <img
                                      src="https://bootdey.com/img/Content/avatar/avatar5.png"
                                      alt="Company"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="widget-26-job-title">
                                    <a href="#">
                                      Senior Software Engineer / Developer
                                    </a>
                                    <p className="m-0">
                                      <a href="#" className="employer-name">
                                        Axiom Corp.
                                      </a>{' '}
                                      <span className="text-muted time">
                                        1 days ago
                                      </span>
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div className="widget-26-job-info">
                                    <p className="type m-0">Full-Time</p>
                                    <p className="text-muted m-0">
                                      in{' '}
                                      <span className="location">
                                        London, UK
                                      </span>
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div className="widget-26-job-salary">
                                    $ 50/hr
                                  </div>
                                </td>
                                <td>
                                  <div className="widget-26-job-category bg-soft-base">
                                    <i className="indicator bg-base"></i>
                                    <span>Software Development</span>
                                  </div>
                                </td>
                                <td>
                                  <div className="widget-26-job-starred">
                                    <a href="#">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-star"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                      </svg>
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              {/* 이하 반복 데이터는 원본처럼 추가 가능 */}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <nav className="d-flex justify-content-center">
                  <ul className="pagination pagination-base pagination-boxed pagination-square mb-0">
                    <li className="page-item">
                      <a className="page-link no-border" href="#">
                        <span aria-hidden="true">«</span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link no-border" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link no-border" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link no-border" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link no-border" href="#">
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link no-border" href="#">
                        <span aria-hidden="true">»</span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
