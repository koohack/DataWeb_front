import React from 'react';
import { Box } from "@mui/material";
import { VictoryChart, VictoryLine, VictoryTheme, VictoryBar, VictoryLabel } from "victory";


function Chart({myData}) {
  return (
    <Box display="flex" justifyContent="center" width="50%">
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryBar
          labels={({ datum }) => datum.y}
          style={{ data: { fill: "#c43a31" }, labels: { fill: "white" }}}
          alignment="start"
          labelComponent={<VictoryLabel />}
          data={myData}
        />
      </VictoryChart>
    </Box>
    
  )
}

export default Chart