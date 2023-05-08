import React from "react"
import { useEffect, useState } from "react";
import './displaytable.css';

import { IconContext } from "react-icons";
import { BiLeaf } from "react-icons/bi"

function DisplayTable(){

    const [formDataList, setFormDataList] = useState([{"plant_name": "Jade", "plant_location": "bedroom", "plant_type": "indoor", "sensor_name": "Sensor 003"}]);

    useEffect(() => {
        setFormDataList(formDataList);
        
        const storedFormDataList = JSON.parse(localStorage.getItem("formDataList")) || [];
        setFormDataList(storedFormDataList);
      }, []);

        return(

        <>

    
        <div class="sensor-grid">
        {formDataList.map((formData, index) => (
            <div key={index} class="sensor-card">
                <div className="placeholder">
                    <IconContext.Provider value={{size:"4rem", color: "#00502c"}}>
                            <div className="place-ic"><BiLeaf /></div>
                    </IconContext.Provider>
                </div>
                <div class="sensor-card-inner">
                    
                        <h2>{formData.plant_name}</h2>
                        <p>{formData.plant_location}</p>
                        <p>{formData.plant_type}</p>
                        <p>{formData.sensor_name}</p>

                        <button className="btn btn-outline">Edit</button>
                    
                </div>
            </div>
            ))}
        </div>
       

    </>

    );
}

export default DisplayTable;

