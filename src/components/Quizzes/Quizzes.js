import React from "react";
import { useLoaderData } from "react-router-dom";

const Quizzes = () => {
  const quizzes = useLoaderData();
  console.log(quizzes);
  return (
    <div>
      <h2>Welcome to Quizzes Page</h2>
      <p>{quizzes.data.id}</p>
      <p>{quizzes.data.name}</p>
    </div>
  );
};

export default Quizzes;
