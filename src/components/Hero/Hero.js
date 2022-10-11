import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            The online quiz that's easy to use, fun and resourceful{" "}
          </h1>
          <p className="mb-5">
            Take our quizzes and become a master at web development. We have
            huge collection of quizzes and global ranking system. Compete with
            others and enrich your knowledge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
