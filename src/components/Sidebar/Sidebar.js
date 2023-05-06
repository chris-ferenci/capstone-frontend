import { Button } from '@blueprintjs/core';
import { useContext, } from 'react';
import { Link } from 'react-router-dom';
import { CountryContext } from '../../pages/Home';
import './sidebar.css'
import Space from '../Space/Space';

import { IconContext } from "react-icons";
import { GoDashboard, GoPlus } from "react-icons/go";
import { BiLeaf, BiGroup } from "react-icons/bi"
import { MdSensors } from "react-icons/md";



function Sidebar(){

    // const [activeCountry, setActiveCountry] = useContext(CountryContext);

    return(
        <nav id="sidebar-container" className='sidebar'>
            
            <ul>
                {/* <Space type="country" value="Set Up A New Sensor"/> */}
                {/* <li>Set Up A New Sensor</li> */}

                <IconContext.Provider value={{ size: "1.3em"}}>

                    <h3>Get Started</h3>
                    <div>
                        <li>
                        <Link to ="/addsensor">
                            <button className="btn btn-add"><i><GoPlus/></i>Add A New Sensor</button>
                        </Link>
                        </li>
                    </div>

                    <div class="nav-item">
                        <li><i><BiLeaf/></i>
                        <Link to="/welcome">Get Started</Link>
                        </li>
                    </div>
                    
                    <div class="nav-item">
                        <li><i><GoDashboard/></i>
                        <Link to="/dashboard">Dashboard</Link>
                        </li>
                    </div>

                    <div class="nav-item">
                        <li><i><MdSensors/></i>
                        <Link to="/mysensors">My Sensors</Link>
                        </li>
                    </div>

                    <div class="nav-item">
                        <li><i><BiGroup/></i>
                        <Link to="/community">Community</Link>
                        </li>
                    </div>


                    {/* <h2>My Sensors</h2>
                    <li><Link to="/sensorlist">Sensor List</Link></li>
                    */}
                    {/* <h3>Documentation and Guides</h3>
                    <li><Link to="/setupsensor">Github</Link></li>
                    <li><Link to="/setupsensor">Building a Sensor</Link></li>
                    <li><Link to="/influx">Setup Influx</Link></li>
                    <li><Link to="/grafana">Setup Grafana</Link></li>

                    <h3>About</h3>
                    <li><Link to="/team">About the Project</Link></li>
                    <li><Link to="/team">Team</Link></li> */}

                </IconContext.Provider>

                {/* <Space type="experience" value="Building a Sensor"/> */}
                {/* <Space type="experience" value="Setting Up Influx"/>
                <Space type="experience" value="Setting Up Grafana"/> */}
                
            </ul>
        </nav>

    )
}

function updateCountry (country, setActiveCountry) {
    setActiveCountry(country);
}

export default Sidebar;