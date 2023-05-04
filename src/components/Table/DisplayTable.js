import React from "react"
import { useEffect, useState } from "react";
import './displaytable.css';

import { IconContext } from "react-icons";
import { BiLeaf } from "react-icons/bi"

function DisplayTable(){

    const [formDataList, setFormDataList] = useState([]);

    useEffect(() => {
        
        const storedFormDataList = JSON.parse(localStorage.getItem("formDataList")) || [];
        setFormDataList(storedFormDataList);
      }, []);

        return(

        <>

    
        <div class="sensor-grid">
        {formDataList.map((formData, index) => (
            <div key={index} class="sensor-card">
                {/* <img src="https://dummyimage.com/300x200/f2f2f2/aaa"></img> */}
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
       

        {/* <table>
            <thead>
            <tr>
                <th>Plant Name</th>
                <th>Plant Location</th>
                <th>Plant Type</th>
                <th>Sensor Name</th>
            </tr>
            </thead>
            <tbody>
                {formDataList.map((formData, index) => (
                <tr key={index}>
                    <td>{formData.plant_name}</td>
                    <td>{formData.plant_location}</td>
                    <td>{formData.plant_type}</td>
                    <td>{formData.sensor_name}</td>
                </tr>
                ))}
            
            </tbody>
        </table> */}

    </>

    );
}

export default DisplayTable;

