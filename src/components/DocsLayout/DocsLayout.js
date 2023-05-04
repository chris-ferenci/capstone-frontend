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

        // <div>
        //     <p>Sensor Docs Test</p>
        // </div>

        <>
        { loading ? ( <Loader /> ) :
        (
        <div id='grid-container'>
            
            <Header />
            <Sidebar />
            
            
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