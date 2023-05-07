import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

import './community.css'
import img_comm from './im-comm.png'
import { FaRegLightbulb, FaArrowDown, FaArrowUp } from "react-icons/fa";




function Community(){

    return(
        
        <div id="grid-container">
            
            <Header />
            <Sidebar />
            
            <div className="container">
                <h2>My Community</h2>

                <div className="feed-container">
                    <div className="column-2">
                        <h2>Latest Updates</h2>
                        <div className="feed-item">
                            <img className="feed-avatar" src="https://i.pravatar.cc/72/12532168"/>
                            <p>Did you know that some plants can communicate with each other through chemical signals?<span className="feed-sig"> - Intriguing User</span></p>
                        </div>
                        <div className="feed-item">
                            <img className="feed-avatar" src="https://i.pravatar.cc/72/12532164"/>
                            <p>If you're looking for an all-natural way to keep pests out of your garden, try planting some companion herbs like basil, mint, or lavender.<span className="feed-sig"> - Curious User</span></p>
                        </div>
                        <div className="feed-item">
                            <img className="feed-avatar" src="https://i.pravatar.cc/72/12532161"/>
                            <p>Want to give your indoor plants a boost? Mix some used coffee grounds into the soil for an extra dose of nutrients. <span className="feed-sig"> - Growing User</span></p>
                        </div>
                        <div className="feed-item">
                            <img className="feed-avatar" src="https://i.pravatar.cc/72/12532167"/>
                            <p>Want to give your indoor plants a boost? Mix some used coffee grounds into the soil for an extra dose of nutrients. <span className="feed-sig"> - Super User</span></p>
                        </div>
                    </div>

                    <div className="column-1">
                        <h2>Trending Tips</h2>

                        <div className="tip-item">
                            <div className="tip-vote">
                                <div className="vert-center">
                                <FaArrowUp/>58<FaArrowDown/>
                                </div>
                            </div>
                            <p>Water your plants in the morning or evening to prevent evaporation and help them absorb nutrients more efficiently.<span className="feed-sig"> - Intriguing User</span></p>
                        </div>

                        <div className="tip-item">
                            <div className="tip-vote">
                                <div className="vert-center">
                                <FaArrowUp/>76<FaArrowDown/>
                                </div>
                            </div>
                            <p>Use companion planting to naturally repel pests and improve soil health by planting complementary crops together.<span className="feed-sig"> - Intriguing User</span></p>
                        </div>

                        
                    </div>



                </div>

                <h4>Growers Near Berkeley, CA</h4>

                <div className="grower-card-grid">
                    
                    <div className="grower-card">
                        <div className="grower-name">
                            <img className="grower-avatar" src="https://i.pravatar.cc/250/12532163"/>
                            <h2>User A</h2>
                            
                        </div>

                        <p className="followers">64 followers</p>

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

                        <p className="followers">52 Followers</p>

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

                        <p className="followers">87 Followers</p>

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

                        <p className="followers">24 Followers</p>

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