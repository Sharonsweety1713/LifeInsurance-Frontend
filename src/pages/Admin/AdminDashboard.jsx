import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "VitalSecure Life Plan",
    applied: 1500,
    claimed: 800,
    amt: 2400
  },
  {
    name: "EchoGuard Family Coverage",
    applied: 3000,
    claimed: 1398,
    amt: 2210
  },
  {
    name: "Lifeline Assurance Policy",
    applied: 2000,
    claimed: 800,
    amt: 2290
  },
  {
    name: "EchoFlex Term Insurance",
    applied: 3580,
    claimed: 908,
    amt: 2000
  },
  {
    name: "VitalFuture Protection Plan",
    applied: 1890,
    claimed: 400,
    amt: 2181
  }
  
];

const AdminDashboard = () => {
  return (
    <div className="flex flex-col items-center p-6 min-h-screen w-full">
      <h1 className="text-2xl font-bold mb-4 ">Policy Performance</h1>
      <div className="w-full max-w-6xl p-6 rounded-lg shadow-lg">
        <BarChart
          width={1000}
          height={430}  
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fill: 'black' }} />
          <YAxis />
          <Tooltip contentStyle={{ color: 'black' }} />
          <Legend wrapperStyle={{ color: 'black' }} />
          <Bar dataKey="applied" fill="#8884d8" />
          <Bar dataKey="claimed" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default AdminDashboard;
