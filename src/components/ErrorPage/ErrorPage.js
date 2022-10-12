import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    // <div
    //   className="hero min-h-screen"
    //   style={{
    //     backgroundImage: `url("https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-10996.jpg?w=996&t=st=1665559598~exp=1665560198~hmac=f973ea4657205d493b8dfe0aeb744a2cac19aa5082e16ee9f0a0f57e49bbbe22")`,
    //   }}
    // >
    //   <div className="hero-overlay bg-transparent"></div>
    //   <div className="hero-content text-center text-neutral-content">
    //     <div className="max-w-md">
    //       <p className="mb-5 text-5xl font-bold text-purple-700">
    //         OOps!!! Something Went Wrong.
    //       </p>
    //       <p className="mb-5 text-2xl text-black">
    //         Please Return To Homepage By Clicking the Button Below
    //       </p>
    //       <Link
    //         className="btn btn-success text-white font-semibold text-2xl"
    //         to="/home"
    //       >
    //         Home
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col justify-center items-center">
        <img
          src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-10996.jpg?w=996&t=st=1665559598~exp=1665560198~hmac=f973ea4657205d493b8dfe0aeb744a2cac19aa5082e16ee9f0a0f57e49bbbe22"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="404 with a cat"
        />
        <p className="py-6 mb-5 text-2xl">
          Please Return To Homepage By Clicking the Button Below
        </p>
        <Link
          className="btn btn-warning hover:bg-yellow-400 text-white font-semibold text-2xl"
          to="/home"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
