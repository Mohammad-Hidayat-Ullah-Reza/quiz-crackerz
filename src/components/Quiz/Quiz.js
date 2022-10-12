import React from "react";

const Quiz = ({ qus, HandleAnsCheck }) => {
  const { id, correctAnswer, options, question } = qus;
  const checkAns = (option) => {
    if (option === correctAnswer) {
      HandleAnsCheck(true);
    } else {
      HandleAnsCheck(false);
    }
  };

  return (
    <div className="p-5 m-5 border border-white rounded-md">
      {/* question */}
      <h4 className="mb-5 text-white text-xl">{question.slice(3, -4)}</h4>
      {/* options */}
      <div className="grid grid-cols-2">
        {options.map((option) => {
          return (
            <div className="form-control w-fit">
              <label className="label cursor-pointer">
                <input
                  onClick={() => checkAns(option)}
                  type="radio"
                  name="radio-6"
                  className="mr-4 radio bg-white checked:bg-blue-500"
                  checked
                />
                <span className="label-text text-white">{option}</span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Quiz;
