import "./App.css";
import Home from "./components/Home";
import Room from "./components/Room";
// import MotionText from './components/motion-text'
import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="container">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/room" element={<Room />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
