import React from "react";
import { useLoaderData } from "react-router-dom";
import TopicCard from "../TopicCard/TopicCard";

const Home = () => {
  const topics = useLoaderData();
  // console.log(topics.data);
  return (
    <div>
      <h2>This is Home</h2>
      <div className="grid grid-cols-2 gap-12 p-10">
        {topics.data.map((topic) => (
          <TopicCard key={topic.id} topic={topic}></TopicCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
