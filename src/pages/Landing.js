import React, { useState, useEffect } from 'react';
import './landing.css';
import '../components/Loader/Loader.css'
import { FaChevronRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import Loader from '../components/Loader/Loader';
import landingImg from "./img/landing-img-1.jpg"
import landingImg2 from "./img/landing-img-2.jpg"

import tm_cf from "./img/tm-cf.png"
import tm_km from "./img/tm-km.png"
import tm_mk from "./img/tm-mk.png"


function Landing() {
    return(
    <>
        <article className='landing-container'>
            
            <section className='hero-left'>
                <article className='hero-inner'>
                    <h1>SmartPlant</h1>
                    <h4>Real-time Plant and Crop Data Visualization and Sensing with IoT and Grafana</h4>

                

                    <a href="/gettingstarted" className="btn btn-primary btn-large">
                        View Demo
                        <IconContext.Provider value={{ size: "1.2rem" }}><FaChevronRight />
                        </IconContext.Provider>
                    </a>
                    {/* <a href="/setupsensor" className="btn btn-primary btn-large">
                        Documentation
                        <IconContext.Provider value={{ size: "1.2rem" }}><FaChevronRight />
                        </IconContext.Provider>
                    </a> */}

                    <article className="description">
                        <p>A Berkeley School of Information Student Project </p>
                    </article>
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

        <section className="project-overview">
            <div className="overview-header">
                <h2>Connecting gardeners and farmers with real-time data</h2>
            </div>

            <div className="overview-body">

                <p>The goal of this project was to create a low cost platform that included a sensor and easy to read data visualizations to provide gardeners with insights on how to manage their plants. While many commercial platforms offer sensors starting at 50 dollars we were able to build a sensor for around 15 dollars.
                </p>

            </div>
        </section>

        <section id="sec-dashboard">
            <div className='half-left'>
                <div className="dashboard-header">
                    <h2>Interactive Dashboards for Real-Time Plant Health Data</h2>
                    <p>The goal of this project was to create a low cost platform that included a sensor and easy to read data visualizations to provide gardeners with insights on how to manage their plants. While many commercial platforms offer sensors starting at 50 dollars we were able to build a sensor for around 15 dollars.
                    </p>   
                </div>
            </div>

            <div className='half-right'>
                <img className="landing-img" src={landingImg2} />
            </div>
        </section>

        <section id="sec-dashboard">
            <div className='half-left'>
            <img className="landing-img" src={landingImg2} />
            </div>

            <div className='half-right'>
                
                <div className="dashboard-header">
                    <h2>Low-Cost Sensors Accessible to the Masses</h2>
                    <p>The goal of this project was to create a low cost platform that included a sensor and easy to read data visualizations to provide gardeners with insights on how to manage their plants. While many commercial platforms offer sensors starting at 50 dollars we were able to build a sensor for around 15 dollars.
                    </p>   
                </div>
            </div>
        </section>

        <section id="sec-dashboard">
            <div className='half-left'>
                <div className="dashboard-header">
                    <h2>Online Community</h2>
                    <p>The goal of this project was to create a low cost platform that included a sensor and easy to read data visualizations to provide gardeners with insights on how to manage their plants. While many commercial platforms offer sensors starting at 50 dollars we were able to build a sensor for around 15 dollars.
                    </p>   
                </div>
            </div>

            <div className='half-right'>
                <img className="landing-img" src={landingImg2} />
            </div>
        </section>

        <section id="sec-project-team">

            <div className="team-header">
                <h2>The Team</h2>
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