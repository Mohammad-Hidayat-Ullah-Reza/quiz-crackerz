import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Quizzes = () => {
  const [ans, setAns] = useState();
  const quizzes = useLoaderData();
  const questions = quizzes.data.questions;
  const HandleAnsCheck = (checkedAns) => {
    if (checkedAns) {
      notify("Correct Answer!!!");
    } else {
      notify("Opps!!! Wrong answer.");
    }
  };
  const showCorrectAns = (correctAns) => {
    // console.log(para);
    notify("Correct Answer: " + correctAns);
  };
  const notify = (text) =>
    toast(text, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <div>
      <h2 className="my-8 font-bold text-5xl text-white">
        Welcome To {quizzes.data.name} Quiz
      </h2>
      <div className="grid grid-cols-2">
        {questions.map((qus) => (
          <Quiz
            key={qus.id}
            qus={qus}
            HandleAnsCheck={HandleAnsCheck}
            showCorrectAns={showCorrectAns}
          ></Quiz>
        ))}
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Quizzes;
