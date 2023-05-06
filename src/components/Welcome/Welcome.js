import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

import { IconContext } from "react-icons";
import { GoDashboard, GoPlus } from "react-icons/go";
import { BiLeaf, BiGroup } from "react-icons/bi"
import { MdSensors } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";





import "./welcome.css"

function Welcome(){

    return(
        <div id="grid-container">
            
            <Header />
            <Sidebar />

            <IconContext.Provider value={{ size: "2rem"}}>

                <div className="container">
                    <h2 className="welcome-header">Welcome to SmartPlant!</h2>
                    <div className="welcome-container">
                        <div className="welcome-card welcome-sensor-card">
                            <MdSensors/>
                            <h2>Add Sensor</h2>
                            <p>Integrate your home sensors with our software</p>
                        </div>
                        <div className="welcome-card welcome-sensor-card">
                            <GoDashboard/>
                            <h2>Dashboard</h2>
                            <p>Integrate your home sensors with our software</p>
                        </div>

                        <div className="welcome-card welcome-sensor-card">
                            <BiGroup/>
                            <h2>Community</h2>
                            <p>Integrate your home sensors with our software</p>
                        </div>
                    </div>
                    
                    <div className="guide-card">
                        <div class="header-icon">
                            <FaRegLightbulb/>
                            <h2>User Guides</h2>
                        </div>
                        <p>Use our guides to help you get started with integrating your sensors</p>
                        <ul>
                            <li>Build Your Sensor</li>
                            <li>Connect Your Sensor</li>
                            <li>Visualize Your Data</li>
                        </ul>
                    </div>
            </div>

            </IconContext.Provider>
        </div>
    )
}

export default Welcome;