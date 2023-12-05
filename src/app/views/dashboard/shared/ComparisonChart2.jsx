import { Box } from "@mui/material";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip
} from "recharts";
 
const data = [
  {
    name: "10",
    available: 4000,
    requested: 2400,
    defaced:1600
  },
  {
    name: "20",
    available: 5000,
    requested: 3500,
    defaced:1000
  },
  {
    name: "50",
    available: 4000,
    requested: 2400,
    defaced:1600
  },
  {
    name: "100",
    available: 5000,
    requested: 3500,
    defaced:1000
  },
  {
    name: "200",
    available: 4000,
    requested: 2400,
    defaced:1600
  },
];
 
function BarGraph() {
  return (
    <Box sx={{display:"flex",justifyContent:"center"}}>
    <BarChart
      width={800}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="available" fill="#8884d8" />
      <Bar dataKey="requested" fill="#82ca9d" />
      <Bar dataKey="defaced" fill="#f4a261" />
    </BarChart>
    </Box>
  );
}

export default BarGraph