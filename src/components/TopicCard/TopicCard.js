import React from "react";

const TopicCard = ({ topic }) => {
  console.log(topic);
  const { id, logo, name, total } = topic;
  return (
    <div className="card w-96 glass">
      <figure>
        <img src={logo} alt={`logo of ${name}`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-left">Total Quizzes: {total}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Take the Quiz Now</button>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
