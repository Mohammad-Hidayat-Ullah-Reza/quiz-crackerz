import React from "react";
import { Link, useNavigate } from "react-router-dom";

const TopicCard = ({ topic }) => {
  //   console.log(topic);
  const { id, logo, name, total } = topic;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/quiz/${id}`);
  };
  return (
    <div className="card w-96 glass">
      <figure>
        <img src={logo} alt={`logo of ${name}`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-left">Total Quizzes: {total}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleNavigate()} className="btn btn-primary">
            Take the Quiz Now
          </button>
          {/* <Link to={`/quiz/${id}`}>{name}</Link> */}
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
