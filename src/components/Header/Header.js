import "./header.css";
import { useState, useEffect } from "react";
import { CountryContext } from "../../pages/Home";

// icons
import { FaLeaf } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Icon } from "@blueprintjs/core";
import { BiLeaf } from "react-icons/bi"


function Header(){

    const [formDataList, setFormDataList] = useState([]);

    useEffect(() => {
        
        const storedFormDataList = JSON.parse(localStorage.getItem("formDataList")) || [];
        setFormDataList(storedFormDataList);
      }, []);

    return(

        <header id="header" className="header">

            <a href="/welcome">

                <div className="brand">
                    <div className="brand-icon">
                        <IconContext.Provider value={{size:"1.5rem", color: "#00502c"}}>
                            <BiLeaf />
                        </IconContext.Provider>
                    </div>

                    <div className="brand-name">
                        <h1>GardenSense</h1>
                    </div>
                    
                    
                </div>
            </a>

            

            <nav className="header-links-container">
                <ul className="header-links">
                <div className="active-sensors">
                    <div className="active-sensor-tag"><p>{formDataList.length}</p></div>
                    <li><a href="/">Active Sensors</a></li>
                </div>
                <li><a href="/">My Profile</a></li>
                <li><a href="/">Home</a></li>
                </ul>
            </nav>
            
            {/* <form className="quick-search">
                <input type="text" placeholder="Quick Search" onChange={(e) => filterJobs(e.target.value)} />
            </form> */}
            

        </header>

    )

}

export default Header;