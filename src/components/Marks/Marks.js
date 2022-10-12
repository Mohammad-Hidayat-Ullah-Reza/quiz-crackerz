import React from "react";

const Marks = ({ className, right, wrong }) => {
  return (
    <div className={`${className} text-white mb-20`}>
      <h5 className="mt-20 md:mt-10 mb-3 font-semibold text-2xl">Your Marks</h5>
      <p>Correct Answer: {right}</p>
      <p>Wrong Answer: {wrong}</p>
    </div>
  );
};

export default Marks;
