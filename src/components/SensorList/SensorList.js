import { useEffect, useState } from "react";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import './SensorList.css'
import DisplayTable from "../Table/DisplayTable";


const columns = [
  {
    title: 'Plant Name',
    dataIndex: 'plant_name',
    key: 'plant_name',
    width: 100,
  },
  {
    title: 'Plant Type',
    dataIndex: 'plant_type',
    key: 'plant_type',
    width: 100,
  },
  {
    title: 'Plant Location',
    dataIndex: 'plant_location',
    key: 'plant_location',
    width: 200,
  },
  {
    title: 'Water Need',
    dataIndex: 'water_need',
    key: 'water_need',
    width: 200,
  },
  {
    title: 'Temperature Need',
    dataIndex: 'temp_need',
    key: 'temp_need',
    width: 200,
  },
  {
    title: 'Humidity Need',
    dataIndex: 'hum_need',
    key: 'hum_need',
    width: 200,
  },
  {
    title: 'Operations',
    dataIndex: '',
    key: 'operations',
    render: () => <a href="#">Delete</a>,
  },
];

const data = [
  { plant_name: 'Tomato', plant_type: 'Outdoor', plant_location: 'Bedroom', water_need: 'Moderate', temp_need: 'Moderate', hum_need: 'Low', key: '1' },
  { plant_name: 'Basil', plant_type: 'Indoor', plant_location: 'Kitchen', water_need: 'Moderate', temp_need: 'Moderate', hum_need: 'Medium', key: '1' }
];



function SensorList({formDataList}){

  
    return(
        <div id="grid-container">
            <Header/>
            <Sidebar/>
            <div className="container">
                <h2>My Sensors</h2>
                <p>Below are all of your connected sensors</p>
                <DisplayTable />
             
            </div>
        </div>
    )
}

export default SensorList;