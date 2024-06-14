// import React from 'react'

// @ts-ignore
import transition from "../transition.jsx";

import MotionText from "./motion-text.js";
import { Button } from "./ui/button.js";
import { Link } from "react-router-dom";

const Room = () => {
  return (
    <div className="container flex flex-col h-screen text-black space-y-6">
      <div className="text-4xl font-bold">Room</div>
      <div className="text-2xl font-semibold">
        <MotionText delayOffset={1.1}>Filesync</MotionText>
      </div>
      <Link to="/">
        <Button className="px-4 py-2 bg-white text-red-500 rounded-md shadow hover:bg-red-100 transition-all duration-300">
          Home
        </Button>
      </Link>
    </div>
  );
};

export default transition(Room);
