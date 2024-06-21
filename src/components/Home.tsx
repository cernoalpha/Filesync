import React from 'react'

import { Link } from "react-router-dom";
import { Button } from "./ui/button";

// @ts-ignore
import transition from "../transition.jsx";
import MotionText from "./motion-text.js";

const Home: React.FC = () => {
  return (
    <>
      <div className="container flex flex-col items-center justify-center h-screen bg-red-400 text-white space-y-6">
        <div className="text-4xl font-bold">Filesync</div>
        <div className="text-2xl font-semibold">
          <MotionText delayOffset={0}>Share files in a flash, with zero hassle.</MotionText>
        </div>

        <Link to="/room">
          <Button className="px-4 py-2 bg-white text-red-500 rounded-md shadow hover:bg-red-100 transition-all duration-300">
            Create room!
          </Button>
        </Link>
      </div>
    </>
  );
};

export default transition(Home);
