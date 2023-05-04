import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

import './community.css'
import img_comm from './im-comm.png'



function Community(){

    return(
        
        <div id="grid-container">
            
            <Header />
            <Sidebar />
            
            <div className="container">
                <h2>Community</h2>
                <h4>Growers Near Berkeley, CA</h4>

                <div className="grower-card-grid">
                    
                    <div className="grower-card">
                        <div className="grower-name">
                            <img className="grower-avatar" src="https://i.pravatar.cc/250/12532163"/>
                            <h2>Jennifer Cawley</h2>
                            
                        </div>

                        <p><strong>64 Followers</strong></p>

                        <div className="grower-description">
                            <p>I own a small farm in Santa Rosa, Ca focusing mainly on sustainable farming practices.</p>
                            <h3>Favorite Crops</h3>
                            <ul>
                            <li>Tomatoes</li>
                            <li>Strawberry</li>
                            <li>Basil</li>
                            </ul>
                        </div>

                        <div className="button-group">
                            <button className="btn btn-primary">Follow</button>
                        </div>
                    </div>

                    <div className="grower-card">
                        <div className="grower-name">
                            <img className="grower-avatar" src="https://i.pravatar.cc/250/2364361"/>
                            <h2>Jane Marcus</h2>                    
                        </div>

                        <p><strong>52 Followers</strong></p>

                        <div className="grower-description">
                            <p>I own a small farm in Santa Rosa, Ca focusing mainly on sustainable farming practices.</p>
                            <h3>Favorite Crops</h3>
                            <ul>
                            <li>Tomatoes</li>
                            <li>Strawberry</li>
                            <li>Basil</li>
                            </ul>
                        </div>

                        <div className="button-group">
                            <button className="btn btn-primary">Follow</button>
                        </div>
                    </div>

                    <div className="grower-card">
                        <div className="grower-name">
                            <img className="grower-avatar" src="https://i.pravatar.cc/250/1234643"/>
                            <h2>Kelly Small</h2>
                            
                        </div>

                        <p><strong>87 Followers</strong></p>

                        <div className="grower-description">
                            <p>I own a small farm in Santa Rosa, Ca focusing mainly on sustainable farming practices.</p>
                            <h3>Favorite Crops</h3>
                            <ul>
                            <li>Tomatoes</li>
                            <li>Strawberry</li>
                            <li>Basil</li>
                            </ul>
                        </div>

                        <div className="button-group">
                            <button className="btn btn-primary">Follow</button>
                        </div>
                    </div>

                    <div className="grower-card">
                        <div className="grower-name">
                            <img className="grower-avatar" src="https://i.pravatar.cc/250/146346"/>
                            <h2>Sandra Poesey</h2>
                            
                        </div>

                        <p><strong>24 Followers</strong></p>

                        <div className="grower-description">
                            <p>I own a small farm in Santa Rosa, Ca focusing mainly on sustainable farming practices.</p>
                            <h3>Favorite Crops</h3>
                            <ul>
                            <li>Tomatoes</li>
                            <li>Strawberry</li>
                            <li>Basil</li>
                            </ul>
                        </div>

                        <div className="button-group">
                            <button className="btn btn-primary">Follow</button>
                        </div>
                    </div>

                    
                </div>

                
            </div>
        </div>
        
    )
}

export default Community;