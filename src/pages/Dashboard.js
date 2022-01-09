import React from "react";


const Dashboard = () => {
  return (
    <>
      <link rel='stylesheet'
            href='https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css'/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
          </div>
          <div className="col-md-4">
            <h3>
              Daily Clothes
            </h3>
          </div>
          <div className="col-md-4">
            <button type="button" className="btn btn-success">
              <i className="fi fi-rr-user"/>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-6">
                    <div className="dropdown">

                      <button className="btn btn-primary dropdown-toggle" type="button"
                              id="dropdownMenuButton" data-toggle="dropdown">
                        Action
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item disabled" href="#">Action</a> <a
                        className="dropdown-item" href="#">Another action</a> <a className="dropdown-item"
                                                                                 href="#">Something else
                        here</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="dropdown">

                      <button className="btn btn-primary dropdown-toggle" type="button"
                              id="dropdownMenuButton" data-toggle="dropdown">
                        Action
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item disabled" href="#">Action</a> <a
                        className="dropdown-item" href="#">Another action</a> <a className="dropdown-item"
                                                                                 href="#">Something else
                        here</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="dropdown">

                      <button className="btn btn-primary dropdown-toggle" type="button"
                              id="dropdownMenuButton" data-toggle="dropdown">
                        Action
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item disabled" href="#">Action</a> <a
                        className="dropdown-item" href="#">Another action</a> <a className="dropdown-item"
                                                                                 href="#">Something else
                        here</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="dropdown">

                      <button className="btn btn-primary dropdown-toggle" type="button"
                              id="dropdownMenuButton" data-toggle="dropdown">
                        Action
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item disabled" href="#">Action</a> <a
                        className="dropdown-item" href="#">Another action</a> <a className="dropdown-item"
                                                                                 href="#">Something else
                        here</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-6">
                    <img alt="Bootstrap Image Preview"
                         src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"/>
                  </div>
                  <div className="col-md-6">
                    <img alt="Bootstrap Image Preview"
                         src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <img alt="Bootstrap Image Preview"
                         src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"/>
                  </div>
                  <div className="col-md-6">
                    <img alt="Bootstrap Image Preview"
                         src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">

            <button type="button" className="btn btn-success">
              Button
            </button>
          </div>
          <div className="col-md-10">


          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;