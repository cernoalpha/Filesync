import './App.css'
import Home from './components/Home';
import Room from './components/Room';
// import MotionText from './components/motion-text'
import {
  BrowserRouter ,
  Route,
  Routes,
} from "react-router-dom";

import { AnimatePresence } from 'framer-motion';

function App() {


  return (
    <>
      <BrowserRouter>
          <div className="container">
          <AnimatePresence mode='wait'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/room" element={<Room />} />
            </Routes>
            </AnimatePresence>
          </div>
        </BrowserRouter>
      
    </>
  )
}

export default App
