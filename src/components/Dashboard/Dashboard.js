import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

import Iframe from 'react-iframe'


function Dashboard(){

    return(
        <div id="grid-container">
            
            <Header />
            <Sidebar />
            
            <div class="container">
            <p>Place Dashboard Here</p>
                <div>
                <Iframe src="https://snapshots.raintank.io/dashboard/snapshot/h8gW2ohhndmtWb7QklvLNw6yUyORrbfg" width="450" height="800" frameborder="0"/>
                <Iframe src="https://snapshots.raintank.io/dashboard/snapshot/doAJAoLOR0hRJdsWvhiiWgw2tyTC6F0a" width="600" height="400" frameBorder="0" />
                
                
                </div>
            </div>
        </div>
    )
}

export default Dashboard;