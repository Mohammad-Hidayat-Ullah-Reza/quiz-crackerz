import React from "react";
import { useNavigate } from "react-router-dom";

const TopicCard = ({ topic }) => {
  const { id, logo, name, total } = topic;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/quiz/${id}`);
  };
  return (
    <div className="card w-72 lg:w-96 glass">
      <figure>
        <img src={logo} alt={`logo of ${name}`} />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title text-4xl">{name}</h2>
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
