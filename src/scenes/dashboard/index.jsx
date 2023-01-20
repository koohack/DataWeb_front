import { Box } from "@mui/material";
import Header from "../../components/Header";
import React, {useState} from 'react'
import { userCount, topUser } from "../utils/Utils.js"
import Chart from "../../components/Chart";

function Dashboard() {
  const [data, setData] = useState(false);

  if (data === false){
    userCount();
    const response = topUser();
    const temp = [];
    response.then(function(response){
      for(var item in response.data["data"]){
        temp.push(response.data["data"][item])
      }
      setData(temp);
    })
  }
  console.log(data)
  console.log(typeof(data));
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignitem="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      {data != {} && (
        <Chart myData={data}/>
      )}
    </Box>
  )
}

export default Dashboard