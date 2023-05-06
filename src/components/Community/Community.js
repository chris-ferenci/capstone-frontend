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
                            <h2>User A</h2>
                            
                        </div>

                        <p><strong>64 Followers</strong></p>

                        <div className="button-group">
                            <button className="btn btn-primary">Follow</button>
                        </div>

                        <div className="grower-description">
                            <p>Bringing together a community of plant lovers who share a passion for growing their own food.</p>
                            <h3>Favorite Crops</h3>
                            <ul>
                            <li>Tomatoes</li>
                            <li>Strawberry</li>
                            <li>Basil</li>
                            </ul>
                        </div>

                        
                    </div>

                    <div className="grower-card">
                        <div className="grower-name">
                            <img className="grower-avatar" src="https://i.pravatar.cc/250/2364361"/>
                            <h2>User B</h2>                    
                        </div>

                        <p><strong>52 Followers</strong></p>

                        <div className="button-group">
                            <button className="btn btn-primary">Follow</button>
                        </div>

                        <div className="grower-description">
                            <p>Sharing the joys of farm life, one post at a time.</p>
                            <h3>Favorite Crops</h3>
                            <ul>
                            <li>Tomatoes</li>
                            <li>Strawberry</li>
                            <li>Basil</li>
                            </ul>
                        </div>

                        
                    </div>

                    <div className="grower-card">
                        <div className="grower-name">
                            <img className="grower-avatar" src="https://i.pravatar.cc/250/1234643"/>
                            <h2>User C</h2>
                            
                        </div>

                        <p><strong>87 Followers</strong></p>

                        <div className="button-group">
                            <button className="btn btn-primary">Follow</button>
                        </div>

                        <div className="grower-description">
                            <p>Dedicated to creating a sustainable food system through community gardening</p>
                            <h3>Favorite Crops</h3>
                            <ul>
                            <li>Tomatoes</li>
                            <li>Strawberry</li>
                            <li>Basil</li>
                            </ul>
                        </div>

                       
                    </div>

                    <div className="grower-card">
                        <div className="grower-name">
                            <img className="grower-avatar" src="https://i.pravatar.cc/250/146346"/>
                            <h2>User D</h2>
                            
                        </div>

                        <p><strong>24 Followers</strong></p>

                        <div className="button-group">
                            <button className="btn btn-primary">Follow</button>
                        </div>

                        <div className="grower-description">
                            <p>Urban farmer and foodie, sharing recipes and stories from the garden</p>
                            <h3>Favorite Crops</h3>
                            <ul>
                            <li>Tomatoes</li>
                            <li>Strawberry</li>
                            <li>Basil</li>
                            </ul>
                        </div>

    
                    </div>

                    
                </div>

                
            </div>
        </div>
        
    )
}

export default Community;