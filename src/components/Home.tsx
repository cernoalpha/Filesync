// import React from 'react'

import { Link } from "react-router-dom"
import { Button } from "./ui/button"

// @ts-ignore
import transition from "../transition.jsx"

const Home = () => {
  return (
    <>
    <div className="container bg-red-600 h-screen">
    <div>Home</div>
    <Link to='/room'>
    <Button>Create room!</Button>
    </Link>
    </div>
    
    </>
  )
}

export default transition(Home);