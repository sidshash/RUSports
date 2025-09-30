import React, { useState } from "react";
import Header from "./components/Header/Header";
import ScoreCard from "./components/Matches/ScoreCard/ScoreCard";
import { Box, Tab, Tabs } from "@mui/material";
import MatchPanel from "./components/Matches/MatchPanel/MatchPanel";
import Leaderboard from "./components/Matches/Leaderboard/Leaderboard";

function CustomTabPanel({index, value, children}){
  return(
    <div
     hidden={value !== index}
     role="tabpanel"
     >
      {
        value === index && <Box>{children}</Box>
      }
    </div>
  )
}

function App() {
  const [value, setValue] = useState(1);

  return (
    <>
      <Header />
      <div className="relative top-18 flex flex-col gap-8 px-2">

        <p className="text-2xl font-bold text-gray-500">🎉 Events</p>
        <div className="flex flex-col justify-between gap-2 shadow-md bg-white rounded-md p-2">
          <p className="font-bold text-2xl">RU Cup</p>
          <hr />
          <p>Badminton League</p>
          <hr />
          <p>Cricket League</p>
          <hr />
          <p>Badminton League</p>
          <hr />
          <p>Badminton League</p>
        </div>

        <p className="text-2xl font-bold text-gray-500">🎯 Live Games</p>
        <Box className="shadow-md bg-white rounded-md p-2 flex flex-col gap-4">
        <Box className="w-full">
          <p className="font-bold text-gray-500 text-lg">Cricket League</p>
          <Tabs variant="fullWidth" value={value} onChange={(e, v) => setValue(v)}>
            <Tab label="Matches"/>
            <Tab label="Table" />
          </Tabs>
        </Box>
        <CustomTabPanel index={0} value={value}>
          <MatchPanel />
        </CustomTabPanel>
        <CustomTabPanel index={1} value={value}>
          <Leaderboard />
        </CustomTabPanel>
        </Box>
      </div>
    </>
  );
}

export default App
