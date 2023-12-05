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
    name: "Telangana",
    noOfPapers: 4000,
    requested: 2400,
    //pending:1600
  },
  {
    name: "Maharastra",
    noOfPapers: 5000,
    requested: 6000,
    pending:1000
  },
  {
    name: "Punjab",
    noOfPapers: 4000,
    requested: 2400,
    //pending:1600
  },
  {
    name: "Odisha",
    noOfPapers: 5000,
    requested: 6000,
    pending:1000
  },
  {
    name: "Punjab",
    noOfPapers: 4000,
    requested: 2400,
    //pending:1600
  },
];
 
function BarGraph2() {
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
      {/* <Legend /> */}
      <Bar dataKey="noOfPapers" fill="#8884d8" />
      {/* <Bar dataKey="requested" fill="#82ca9d" />
      <Bar dataKey="pending" fill="#f4a261" /> */}
    </BarChart>
    </Box>
  );
}

export default BarGraph2