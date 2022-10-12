import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "React", "total number of Quiz": 8 },
  { name: "JavaScript", "total number of Quiz": 9 },
  { name: "CSS", "total number of Quiz": 8 },
  { name: "Git", "total number of Quiz": 11 },
];

const Statistic = () => {
  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold text-white">
        Statistics of <span className="text-yellow-500">total questions</span>
        per topic
      </h2>
      <div className="mt-10 flex justify-center items-center">
        <ResponsiveContainer width="95%" height={400}>
          <BarChart width={500} height={400} data={data}>
            <CartesianGrid stroke="#E2FEF0" strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#E2FEF0" />
            <YAxis stroke="#E2FEF0" />
            <Tooltip wrapperStyle={{ width: 200, backgroundColor: "#ccc" }} />
            <Legend />
            <Bar dataKey="total number of Quiz" fill="#020b9c" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistic;
