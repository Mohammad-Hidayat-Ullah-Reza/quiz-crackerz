import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Quizzes = () => {
  const quizzes = useLoaderData();
  const questions = quizzes.data.questions;

  return (
    <div>
      <h2 className="my-8 font-bold text-5xl text-white">
        Welcome To {quizzes.data.name} Quiz
      </h2>
      <div className="grid grid-cols-2">
        {questions.map((qus) => (
          <Quiz qus={qus}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Quizzes;
