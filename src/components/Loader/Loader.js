import React from 'react';
import "./Loader.css";

import { FaLeaf } from "react-icons/fa";
import { IconContext } from "react-icons";
import { BiLeaf } from "react-icons/bi"


function Loader() {
  return (
        <div className='loader-container'>
            <div className='spinner'>
              <IconContext.Provider value={{size:"4rem", color: "#00502c"}}>
                          <BiLeaf />
              </IconContext.Provider>
            </div>

        </div>
  )
}

export default Loader;