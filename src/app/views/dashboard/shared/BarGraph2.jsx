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
    noOfPapers: 4000,
    requested: 2400,
    //pending:1600
  },
  {
    name: "20",
    noOfPapers: 5000,
    requested: 6000,
    pending:1000
  },
  {
    name: "50",
    noOfPapers: 4000,
    requested: 2400,
    //pending:1600
  },
  {
    name: "100",
    noOfPapers: 5000,
    requested: 6000,
    pending:1000
  },
  {
    name: "200",
    noOfPapers: 4000,
    requested: 2400,
    //pending:1600
  },
  {
    name: "500",
    noOfPapers: 5000,
    requested: 6000,
    pending:1000
  },
  {
    name: "1000",
    noOfPapers: 4000,
    requested: 2400,
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
      <Legend />
      <Bar dataKey="noOfPapers" fill="#8884d8" />
      {/* <Bar dataKey="requested" fill="#82ca9d" />
      <Bar dataKey="pending" fill="#f4a261" /> */}
    </BarChart>
    </Box>
  );
}

export default BarGraph2