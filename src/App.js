import React from 'react';
import Home from './pages/Home';
import "./App.css";
import Landing from './pages/Landing';

// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SensorDoc from './components/Documentation/SensorDoc';
import Dashboard from './components/Dashboard/Dashboard'
import SensorList from './components/SensorList/SensorList';
import SensorForm from './components/SensorForm/SensorForm';
import Community from './components/Community/Community';
import Welcome from './components/Welcome/Welcome';


function App() {

  return(

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}>
          </Route>
          <Route path="/welcome" element={<Welcome />}>
          </Route>
          <Route path="/gettingstarted" element={<Home />}>
          </Route>
          <Route path="/community" element={<Community />}>
          </Route>
          <Route path="/mysensors" element={<SensorList />}>
          </Route>
          <Route path="/addsensor" element={<SensorForm />}>
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
          </Route>
          <Route path="/setupsensor" element={<SensorDoc />}>
          </Route>
        </Routes>
    </BrowserRouter>
     

   )

}

// function hitAPI () {
//   fetch('https://api.reliefweb.int/v1/reports?appname=apidoc&query[value]=jobs').then(res => res.json().then((json_res) => {
//   }))
// }

export default App;
