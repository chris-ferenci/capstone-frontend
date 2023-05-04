import { useState, createContext, useEffect } from "react";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Loader from '../Loader/Loader';
import './docs.css';


export const CountryContext = createContext();

function SensorDoc(){

 // Loader function

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1300);
    }, []);

    // States 
    // const [activeCountry, setActiveCountry] = useState('United States');
    // const [activeExperience, setActiveExperience] = useState('')
    // const [jobs, setJobs] = useState('');
    // const [searchQuery, setSearchQuery] = useState('');
    // const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(false);



    return(
        <>
        { loading ? ( <Loader /> ) :
        (
        <div id='grid-container'>
            
            <Header />
            <Sidebar />
            
            <div>
                <h1>Hardware Requirements</h1>
                <ul>
                    <li>1 ESP32 WiFi Bluetooth 4MB Flash UNO R3 development board</li>
                    <li>1 HC-SR04 ultrasonic distance sensor to measure the height of the plant</li>
                    <li>1 DHT22 sensor module to measure the temperature and humidity of the environment</li>
                    <li>1 Soil Moisture sensor module to measure the soil moisture</li>
                    <li>1 TEMT6000 light sensor to measure the light intensity</li>
                    <li>1 LED display MATRIX MAX7219 to show current conditions of the plant directly on the monitoring system</li>
                    <li>1 25 points breadboard</li>
                    <li>M-F Dupont Cables</li>
                    <li>1 micro USB cable</li>
                    <li>1 USB charger</li>
                </ul>
                <p>Now it's time to start putting things together. Below, you can see the pinouts of all sensors and outputs:</p>
                <p>As I had more inputs and outputs than power and ground pins, I also used the 25 points breadboard. I wired it to the vcc pin and gnd pin, so I created 3 extra gnd and vcc pins that I will use for my inputs and outputs.</p>
            </div>
        
        </div>
        )}
        </>
            // {/* <CountryContext.Provider value={[activeCountry, setActiveCountry, activeExperience, setActiveExperience, jobs, setJobs, searchQuery, setSearchQuery, favorites, setFavorites]}>
            //     <Header />
            //     <Sidebar />
            //     <SensorDoc />
            // </CountryContext.Provider> */}
        
    )
}

export default SensorDoc;