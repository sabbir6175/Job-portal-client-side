import Lottie from "lottie-react";
import React, { useContext } from "react";
import animationLottieData from "../../assets/animation/lottie.json";
import AuthContext from "../../context/Authcontext/AuthContext";
import SocialLogin from "../shared/SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {

  const { signInUser } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  console.log("in login page ",location)
  const from = location.state || '/'

    const handleLogin= e =>{
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // const formObject ={name, photo, email, password};
        console.log( email, password)
        signInUser(email, password)
          .then(result => {
            console.log(result.user)
            navigate(from)
          
          })
          .catch(error=>console.log(error.message))
    }


  return (
    <div
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/hZ1TC20/pexels-fwstudio-33348-129731.jpg)",
      }}
      className="hero min-h-screen"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={animationLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-4xl text-center mt-5 font-bold">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                 name="email"
                placeholder="Type your email"
                className="input input-bordered input-accent w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered input-accent w-full max-w-xs"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-emerald-400">Login Now</button>
            </div>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
