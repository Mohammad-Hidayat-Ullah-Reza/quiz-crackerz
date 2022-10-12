import React from "react";
import { useLoaderData } from "react-router-dom";
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

const Statistic = () => {
  const totalData = useLoaderData();

  const data = [];
  for (const info of totalData.data) {
    const obj = {};
    obj.name = info.name;
    obj["total number of Quiz"] = info.total;
    data.push(obj);
  }

  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold text-white">
        Statistics of <span className="text-yellow-500">total questions</span>{" "}
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
