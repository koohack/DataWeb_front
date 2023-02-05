import React, { useState } from 'react';
import { Box, Button, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { getTestData } from "../utils/Utils.js"


function Test() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState({});

  const temp = {"temp": "시발"};
  const response = getTestData(temp);
  console.log(response);


  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignitem="center">
        <Header title="Test Page" subtitle="Here we test our API" />
        
      </Box>
    </Box>
  )
}

export default Test