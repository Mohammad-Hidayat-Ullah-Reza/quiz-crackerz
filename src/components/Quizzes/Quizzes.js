import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Marks from "../Marks/Marks";

const Quizzes = () => {
  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);
  const quizzes = useLoaderData();
  const questions = quizzes.data.questions;
  const HandleAnsCheck = (checkedAns) => {
    if (checkedAns) {
      notify("Correct Answer!!!");
      setRight(right + 1);
    } else {
      notify("Oops!!! Wrong answer.");
      setWrong(wrong + 1);
    }
  };
  const showCorrectAns = (correctAns) => {
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
      <div className="md:grid grid-cols-12">
        <div className="col-span-8 lg:col-span-10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
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
        <Marks
          right={right}
          wrong={wrong}
          className={"col-span-4 lg:col-span-2"}
        ></Marks>
      </div>
    </div>
  );
};

export default Quizzes;
