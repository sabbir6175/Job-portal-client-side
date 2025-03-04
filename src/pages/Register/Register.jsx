import Lottie from "lottie-react";
import React, { useContext } from "react";
import animationLottieData from "../../assets/animation/lottie.json";
import AuthContext from "../../context/Authcontext/AuthContext";
import SocialLogin from "../shared/SocialLogin";


const Register = () => {
  
    const {createUser} = useContext(AuthContext)

    const handleRegister= e =>{
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const formObject ={name, photo, email, password};
        console.log(formObject)
        createUser(email, password)
          .then(result =>{
            console.log(result.user)
            
          })
          .catch(error => console.log(error.message))
    }


  return (
    <div
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/hZ1TC20/pexels-fwstudio-33348-129731.jpg)",
      }}
      className="hero min-h-screen"
    >
        
      <div className="hero-content flex-col lg:flex-row-reverse gap-5">
        <div className="">
          <Lottie animationData={animationLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-4xl text-center mt-5 font-bold">Welcome Sign up!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name:</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered input-accent w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL:</span>
              </label>
              <input
                type="file"
                name="photo"
                placeholder="Enter your photo url"
                className="input input-bordered input-accent w-full max-w-xs py-2"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email:</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
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
                placeholder="Enter you password"
                className="input input-bordered input-accent w-full max-w-xs"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-emerald-400">Register Now</button>
            </div>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
