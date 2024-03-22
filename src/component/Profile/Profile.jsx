

import "./Profile.scss"
import image from './../../assets/green.jpg'
import badge from './../../assets/badge.png'
import cardImage from './../../assets/green-p.jpg'
import green2 from './../../assets/green2.png'

const Profile = () =>{
    return(
       <section className="profile">
        <h3 className="title">Zero Waste Challenge</h3>
        <div className="progress">
            <div className="container">
                <p className="text">3/10</p>
                
                <div className="bar"></div>
                <div className="bar2"></div>
                <img className="image" src={image} alt="" />
            </div>
        </div>

        <div className="badges">
            <p>Badges</p>
            <div>
                <img className="badge-img" src={badge} alt="" />
                <p>Earth Protector</p>
            </div>
        </div>

        <div className="learn">
            <p>Learn more about green products</p>

            <div className="card-list">
                <div className="card">
                    <img className="card-image" src={cardImage} alt="" />
                    <a href="https://ecobnb.com/blog/2020/04/eco-friendly-cosmetics/"><h3>5 Advantages of Choosing Eco-Friendly Cosmetics</h3></a>
                    <p>Do you ever think about how your daily beauty routine has an impact on the environment? You’re in the right place if you want to discover 5 good reasons to choose eco cosmetics rather than the ordinary ones. Not only your health, but also the whole planet will be grateful!</p>
                </div> 

                <div className="divider"></div>
                  
                <div className="card">
                    <img className="card-image" src={green2} alt="" />
                    <a href="https://ecobnb.com/blog/2020/04/eco-friendly-cosmetics/"><h3>5 Advantages of Choosing Eco-Friendly Cosmetics</h3></a>
                    <p>Do you ever think about how your daily beauty routine has an impact on the environment? You’re in the right place if you want to discover 5 good reasons to choose eco cosmetics rather than the ordinary ones. Not only your health, but also the whole planet will be grateful!</p>
                </div> 
               
            
        
            </div>

        </div>
       </section>
    )
}

export default Profile