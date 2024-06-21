// import React from 'react'

// @ts-ignore
import transition from "../transition.jsx";
import ChatBox from "./Chatbox.tsx";
// import MotionText from "./motion-text.js";
import { Button } from "./ui/button.js";
import { Link } from "react-router-dom";

const Room = () => {
  return (
    <>
      <div className="container ml-0 flex flex-col h-screen bg-red-400 text-black  space-y-6">
        <div className="text-4xl font-bold">Room</div>
        
        <Link to="/">
          <Button className="px-4 py-2 bg-white text-red-500 rounded-md shadow hover:bg-red-100 transition-all duration-300">
            Home
          </Button>
        </Link>
        <div className="flex h-full pb-4">
          <div className="h-full w-3/4 bg-blue-400 mr-2">two</div>
          <div className="h-full w-1/4 bg-blue-200">one</div>
        </div>
      </div>
    </>
  );
};

export default transition(Room);
