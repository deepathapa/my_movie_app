import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Error from "./Error";
import Home from "./Home";
import SingleMovie from "./SingelMovie";

const App = () => {
     return (
          <>
               <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='movie/:id' element={<SingleMovie />} />
                    <Route path='*' element={<Error />} />
               </Routes>
          </>
     );
};

export default App;
