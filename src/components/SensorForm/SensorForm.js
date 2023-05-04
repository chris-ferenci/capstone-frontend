import { useState, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './sensorform.css'
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';


function SensorForm() {


    const [formData, setFormData] = useState([{
        plant_name: "",
        plant_type: "indoor",
        plant_location: "living room",
        sensor_name:""
      }]);

    
      useEffect(() => {
        const storedData = localStorage.getItem("formData");
        if (storedData) {
          setFormData(JSON.parse(storedData));
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData));
      }, [formData]);
    
      const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
            setFormData((prevData) => {
            if (type === "radio") {
                return { ...prevData, [name]: value };
            } else if (type === "checkbox") {
                return { ...prevData, [name]: checked };
            } else if (type === "select-one") {
                    return { ...prevData, [name]: value };
            } else {
                return { ...prevData, [name]: value };
            }
            });
      };
    
    const handleSubmit = (event) => {
    event.preventDefault();

    
    console.log("Form data submitted:", formData);

    const formDataList = JSON.parse(localStorage.getItem("formDataList")) || [];

    formDataList.push(formData);
    localStorage.setItem("formDataList", JSON.stringify(formDataList));
    };

    // TOAST
    const notify = () => toast.success("Sensor Successfull Added!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });;
    

    return(

        <div id="grid-container">
        
            <Header/>
            <Sidebar/>

            <div class="container">

            <h1>Set Up A New Sensor</h1>
            

                <div class="form-group">

                    <form onSubmit={handleSubmit} >

                        <label htmlFor="plant_name"><h3>Plant Name</h3></label>
                        <input placeholder="Enter Plant Name" type="text" id="plant-name" name="plant_name" value={formData.name} onChange={handleChange}/>

                        
                        <label htmlFor="plant_type"><h3>Plant Type</h3></label>

                            <div className="radio-group">
                                <input type="radio" id="indoor" name="plant_type" value="indoor" checked={formData.plant_type === "indoor"} onChange={handleChange}/>
                                
                                <label className='form-control' htmlFor="indoor">Indoor</label>
                                <input type="radio" id="outdoor" name="plant_type" value="outdoor" checked={formData.plant_type === "outdoor"} onChange={handleChange}/>

                                <label className='form-control' htmlFor="outdoor">Outdoor</label>
                                <input type="radio" id="other" name="plant_type" value="other" checked={formData.plant_type === "other"} onChange={handleChange}/>
                                <label className='form-control' htmlFor="other">Other</label>
                            </div>

                        <label htmlFor="plant_location"><h3>Plant Location</h3></label>

                            <div className="radio-group">

                            <input type="radio" id="living-room" name="plant_location" value="living room" checked={formData.plant_location === "living room"} onChange={handleChange}/>
                            <label className='form-control' htmlFor="living-room">Living Room</label>
                            <input type="radio" id="bedroom" name="plant_location" value="bedroom" checked={formData.plant_location === "bedroom"} onChange={handleChange}/>
                            <label className='form-control' htmlFor="bedroom">Bedroom</label>
                            <input type="radio" id="bathroom" name="plant_location" value="bathroom" checked={formData.plant_location === "bathroom"} onChange={handleChange}/>
                            <label className='form-control' htmlFor="bathroom">Bathroom</label>
                            <input type="radio" id="office" name="plant_location" value="office" checked={formData.plant_location === "office"} onChange={handleChange}/>
                            <label className='form-control' htmlFor="office">Office</label>
                            <input type="radio" id="patio" name="plant_location" value="patio" checked={formData.plant_location === "patio"} onChange={handleChange}/>
                            <label className='form-control' htmlFor="patio">Patio</label>
                            <input type="radio" id="backyard" name="plant_location" value="backyard" checked={formData.plant_location === "backyard"} onChange={handleChange}/>
                            <label className='form-control' htmlFor="backyard">Backyard</label>
                            <input type="radio" id="front_yard" name="plant_location" value="front yard" checked={formData.plant_location === "front yard"} onChange={handleChange}/>
                            <label className='form-control' htmlFor="front_yard">Front Yard</label>
                            <input type="radio" id="other_location" name="plant_location" value="other location" checked={formData.plant_location === "other"} onChange={handleChange}/>
                            <label className='form-control' htmlFor="other_location">Other</label>
                        
                        </div>

                        <div className="inline-block relative w-64">
                            <label htmlFor="sensor_name"><h3>Sensor Name:</h3></label>
                            <select id="sensor_name" name="sensor_name" value={formData.sensor_name} onChange={handleChange}>
                                <option value="Sensor 1">Sensor 1</option>
                                <option value="Sensor 2">Sensor 2</option>
                                <option value="Sensor 3">Sensor 3</option>
                            </select>
                            {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div> */}
                        </div>

                        <button onClick={notify} className="btn submit-button" type="submit">Add Sensor</button>
                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"
                        />
                    </form>

                </div>
            </div>
        </div>

    )

}

export default SensorForm;