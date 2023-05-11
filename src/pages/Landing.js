import React, { useState, useEffect } from 'react';
import {Link} from 'react-scroll'
import 'animate.css';




import './landing.css';
import '../components/Loader/Loader.css'
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import Loader from '../components/Loader/Loader';
import landingImg from "./img/landing-img-1.jpg"
import landingImg2 from "./img/landing-img-2.jpg"


import imgViz from "./img/viz-bg.png"
import sensor_bg from "./img/sensor-bg.png"
import comm_bg from "./img/comm-bg.png"
import tm_cf from "./img/tm-cf.png"
import tm_km from "./img/tm-km.png"
import tm_mk from "./img/tm-mk.png"
import berk_logo from "./img/berkeleyischool-logo-blue-lg.png"

import chevronDown from "./img/ic-btn-green.png"
import { BiLeaf } from 'react-icons/bi';


function Landing() {
    return(
    <>
        <article className='landing-container'>

        
            
            <section className='hero-left'>
                <article className='hero-inner'>
                    <h1>GardenSense</h1>
                    <h4>An IoT-based environmental monitoring web application</h4>

                

                    <a href="/welcome" className="btn btn-primary btn-large">
                        Explore the Prototype
                        <IconContext.Provider value={{ size: "1.2rem"}}>
                            <FaChevronRight />
                        </IconContext.Provider>
                    </a>

                    {/* <a href="/setupsensor" className="btn btn-primary btn-large">
                        Documentation
                        <IconContext.Provider value={{ size: "1.2rem" }}><FaChevronRight />
                        </IconContext.Provider>
                    </a> */}

                    <article className="description">
                        
                        <img className='berk-logo' src={berk_logo}/>
                        <p>2023 Capstone</p>
                        

                    </article>

                    <Link to="overview" smooth={true}>
                        <div className="scroll-button animate__animated animate__bounce animate__slower animate__infinite">

                            <div className="scroll-icon">
                                <img className="icon" src={chevronDown}></img>
                            </div>
                        </div>
                    </Link>
                </article>

            </section>
                    
            <section className="hero-right">

                <article className="vertical-half">
                    <img className="landing-img" src={landingImg2} />
                </article>

                <article className="vertical-half">
                    <img className="landing-img" src={landingImg} />
                </article>
                
            </section>
                
        </article>

        <section id="overview" className="project-overview">
            <div className='overview-inner'>
                <div>
                    <IconContext.Provider value={{ size: "4rem", color:"#00502c"}}>
                        <BiLeaf />
                    </IconContext.Provider>
                    </div>
                <div className="overview-header">
                   

                        <h2><strong>GardenSense</strong> connects <span className="overview-hl">gardeners</span> and <span className="overview-hl">farmers</span> to real-time data</h2>
                </div>
            </div>
     

        </section>

        <section id="sec-dashboard">
            <div className='half-left'>
                <div className="dashboard-header">
                    <h2>Real-Time Plant Health Data</h2>
                    <p>Stay current with your plant and crop health with our real-time dashboards. Track your plants soil moisture, room temperature, and humidity levels. You can also set alerts and make predictions.
                    </p>   
                </div>
            </div>

            <div className='half-right'>
                <img className="landing-img" src={imgViz} />
            </div>
        </section>

        <section id="sec-dashboard">
            <div className='half-left'>
            <img className="landing-img" src={sensor_bg} />
            </div>

            <div className='half-right'>
                
                <div className="dashboard-header">
                    <h2>Low-Cost Sensors</h2>
                    <p>With a total component cost of $15, our sensors are advanced and light on the wallet. A Gardense Sensor collects:
                        <ul>
                            <li>Soil Moisture</li>
                            <li>Temperature</li>
                            <li>Humidity</li>
                        </ul>
                        all in real-time. 
                    </p>   
                    <p>Get connected to GardenSense using our Set Up Guide.</p>
                </div>
            </div>
        </section>

        <section id="sec-dashboard">
            <div className='half-left'>
                <div className="dashboard-header">
                    <h2>Online Community</h2>
                    <p>Connect with the broader grower and farming community to share and learn best practices, data for specific plants and crop types, and contribute to broader ecological and environmental research. 
                    </p>   
                </div>
            </div>

            <div className='half-right'>
                <img className="landing-img" src={comm_bg} />
            </div>
        </section>


        <section id="sec-project-team">

            <div className="team-header">
                <h2>Project Team</h2>
                <p>IoT-Based Environmental Monitoring for Soil Sensing</p>
            </div>

            <div className='team-container'>

                <div className="team-member-card">
                    <img src={tm_cf} />
                    <div className="card-content">
                        <h2>Chris Ferenci</h2>
                        <p>Master of Information Management and Systems, 2023</p>
                    </div>
                </div>
                <div className="team-member-card">
                    <img src={tm_mk} />
                    <div className="card-content">
                        <h2>Marissa Khoury</h2>
                        <p>Master of Information Management and Systems, 2023</p>
                    </div>

                </div>
                <div className="team-member-card">
                    <img src={tm_km} />
                    <div className="card-content">
                        <h2>Kendra Moore</h2>
                        <p>Master of Information Management and Systems, 2023</p>
                    </div>

                </div>
            </div>
        </section>

       

        

    </>

    

   )

}


export default Landing;