import React from "react";
import MainPage from "./mainpage";


export default function Login() {

  return (

    <MainPage>


      <div className="page-container col-12" >

        <div className="image col-sm-12 col-md-12 col-xl-5 col-xxl-5" >
          <img src="https://nnhsnorthstar.com/wp-content/uploads/2021/04/digitalworldcoverimage.jpg" alt="digital world"></img>

        </div>

        <div className="login-details col-sm-12 col-md-12 col-xl-5 col-xxl-5 ">

          <h5 className="login-welcome" style={{ textAlign: 'center' }}>Welcome Back!</h5>

          <div className="first-box" style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <input className='email' placeholder="Enter Email Address..."></input> <br />
            <input className="password" placeholder="Password"></input> <br />


            <button className="login-btn btn btn-primary">Login</button> </div>
          <hr />

          <div className="second-box d-grid gap-2" style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <button className="btn  btn-danger"><span>Login With Google</span></button> <br />
            <button className="btn  btn-primary"><span>Login With Facebook</span></button> </div>
          <hr />

          <div className="first-box" style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <a href="#">Forgot Password?</a> <br />
            <a href="#">Create an Account!</a> </div>

        </div>

      </div> {/* page container div closing */}




    </MainPage>
  );
}