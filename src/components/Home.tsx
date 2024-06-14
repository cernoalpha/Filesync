// import React from 'react'

import { Link } from "react-router-dom";
import { Button } from "./ui/button";

// @ts-ignore
import transition from "../transition.jsx";
import MotionText from "./motion-text.js";

const Home = () => {
  return (
    <>
      <div className="container bg-red-400 h-screen d-flex items-center">
        <div>Home</div>
        <MotionText delayOffset={1.1}>Filesync</MotionText>
        <Link to="/room">
          <Button>Create room!</Button>
        </Link>
      </div>
    </>
  );
};

export default transition(Home);
