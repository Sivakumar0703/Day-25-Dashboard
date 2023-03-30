import React from "react";
import MainPage from "./mainpage";



export default function ButtonPage() {

    return (

        <MainPage>

        <div >

            <h3 className="btn-page-heading">Buttons</h3>
            {/* circle button card */}
            <div className="align-btn-page">
                <div className="left-content col-lg-5 col-sm-12">
                    <div className=" col card circle-button col-lg-12 col-sm-12">

                        <div className="card-header">
                            <p className="circle-btn-card-title">Circle Buttons</p>
                        </div>

                        <div className="card-body">
                            <p className="circle-btn-card-body-text">
                                Use Font Awesome Icons (included with this theme package) along with the circle buttons as shown in the examples below!
                            </p>

                            <div className="icon-1">
                                <p className='btn-cmd'>.btn-circle</p>
                                <span ><i className="fab fa-facebook-f lg-icon bg-primary circle-btn"></i></span>
                                <span ><i className="fas fa-check  lg-icon bg-success circle-btn"></i></span>
                                <span ><i className="fas fa-info-circle lg-icon bg-info circle-btn"></i></span>
                                <span ><i className="fas fa-exclamation-triangle lg-icon bg-warning circle-btn"></i></span>
                                <span ><i className="fas fa-trash lg-icon bg-danger circle-btn"></i></span>
                            </div>

                            <br />

                            <div className="icon-2">
                                <p className='btn-cmd'>.btn-circle .btn-sm</p>
                                <span ><i className="fab fa-facebook-f  bg-primary sm-icon circle-btn"></i></span>
                                <span ><i className="fas fa-check   bg-success sm-icon circle-btn "></i></span>
                                <span ><i className="fas fa-info-circle  bg-info sm-icon circle-btn "></i></span>
                                <span ><i className="fas fa-exclamation-triangle  bg-warning sm-icon circle-btn "></i></span>
                                <span ><i className="fas fa-trash  bg-danger sm-icon  circle-btn"></i></span>
                            </div>

                            <br />

                            <div className="icon-3">
                                <p className='btn-cmd'>.btn-circle .btn-lg</p>
                                <span className="btn-lg"><i className="fab fa-facebook-f  bg-primary xl-icon circle-btn"></i></span>
                                <span ><i className="fas fa-check   bg-success xl-icon  circle-btn"></i></span>
                                <span ><i className="fas fa-info-circle  bg-info xl-icon  circle-btn"></i></span>
                                <span ><i className="fas fa-exclamation-triangle  bg-warning xl-icon circle-btn "></i></span>
                                <span ><i className="fas fa-trash  bg-danger xl-icon  circle-btn"></i></span>
                            </div>

                        </div>
                    </div>

                    {/* brand button card */}

                    <div className=" col card brand-card col-lg-12 col-sm-12">

                        <div className="card-header">
                            <p className="brand-card-title">Brand Buttons</p>
                            <div className="card-body">
                                <p>Google and Facebook buttons are available featuring each company's respective brand color. They are used on the user login and registration pages.</p>

                                <p>You can create more custom buttons by adding a new color variable in the <span className="brand-highlight">_variables.scss</span> file and then using the Bootstrap button variant mixin to create a new style, as demonstrated in the <span className="brand-highlight">_buttons.scss</span> file.</p>

                                <div className="d-grid gap-2">
                                    <button className="btn btn-danger" type="button"><i className="bi bi-google"></i>&nbsp;.btn-google</button>
                                    <button className="btn btn-primary" type="button"><i className="fab fa-facebook-f"></i>&nbsp; .btn-facebook</button>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>





                {/* split button card */}
                <div className="right-content col-lg-6 col-sm-12">
                    <div className="card split-btn-card col-lg-12 col-sm-12">

                        <div className="card-header ">
                            <p className="split-card-title">Split Buttons with Icon</p>
                        </div>

                        <div className="card-body">
                            <p>Works with any button colors, just use the <span className="split-card-highlight">.btn-icon-split</span> class and the markup in the examples below. The examples below also use the <span className="split-card-highlight">.text-white-50</span> helper class on the icons for additional styling, but it is not required.</p>
                            <div className="split-btn-group">
                                <div className="flag ">
                                    <button className=" s-icon s-flag"><i class="fa fa-flag"></i></button>
                                    <button className="flag-text bg-primary s-text">&nbsp;Split Button Primary</button>
                                </div>

                                <div className="check ">
                                    <button className=" s-icon  s-check"><i className="fas fa-check"></i></button>
                                    <button className="flag-text bg-success s-text">&nbsp;Split Button Success</button>
                                </div>

                                <div className="info ">
                                    <button className=" s-icon  s-info"><i className="fas fa-info-circle"></i></button>
                                    <button className="flag-text bg-info s-text">&nbsp;Split Button Info</button>
                                </div>

                                <div className="warn ">
                                    <button className=" s-icon s-warn"><i className="fas fa-exclamation-triangle"></i></button>
                                    <button className="flag-text bg-warning s-text">&nbsp;Split Button Warning</button>
                                </div>

                                <div className="trash ">
                                    <button className=" s-icon s-trash "><i className="fas fa-trash"></i></button>
                                    <button className="flag-text bg-danger s-text">&nbsp;Split Button Trash</button>
                                </div>

                                <div className="arrow ">
                                    <button className=" s-icon s-arrow"><i class="fas fa-arrow-right"></i></button>
                                    <button className="flag-text s-text s-arrow-text">&nbsp;Split Button Trash</button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>



        </MainPage>









    );

}