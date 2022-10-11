import React from "react";
import { useLoaderData } from "react-router-dom";
import Hero from "../Hero/Hero";
import TopicCard from "../TopicCard/TopicCard";
import "./Home.css";

const Home = () => {
  const topics = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center	p-10 animatedBackground">
        {topics.data.map((topic) => (
          <TopicCard key={topic.id} topic={topic}></TopicCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
