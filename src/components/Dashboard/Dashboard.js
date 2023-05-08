import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

import "./dashboard.css"

import Iframe from 'react-iframe'


function Dashboard(){

    return(
        <div id="grid-container">
            
            <Header />
            <Sidebar />
            
            <div className="container">
                <h2>Dashboard</h2>
                <div className="dashboard-container">
                
                <div class="dash-container-inner">
                    <p>Click below to view your Dashboard on Grafana!</p>
                    <a href="https://snapshots.raintank.io/dashboard/snapshot/4cEb9yQZi5GcKkvhbXNH1r3pH6YanQCh" className="btn btn-primary">View Dashboard</a>
                    <p><em>Dashboard will open in a new tab</em></p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;