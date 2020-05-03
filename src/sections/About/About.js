import React from "react"
import selfie from "./portfolio-pic.jpg"

class About extends React.Component{
    render(){
        return(
            <div className="small-side-margins">
                <div className="add40vh" id="about"></div>
                <h3 className="text-center"> About me</h3>
                <p className="float-left">
                    <img src={selfie} className="float-right rounded-circle" alt="portfolio-pic" height="180" width="215" />    
                    Hi! I'm Scotty I'm a full stack developer from Atlanta Georgia. I'm a high energy, good attitude kind of guy who
                    enjoys comedy. I love coding, learning new things and overcoming challenges.
                    
                </p>
                
                <p>
                    I have quite a bit of coding education and a bit of work experience too. I graduated Georgia Southern with a BS
                    in computer science, got a certificate with teamtreehouse in java web development, and more recently graduated from a Full Stack Development bootcamp with Georgia Tech. I had worked as a developer with Home Depot for about 3 years.
                </p>

            
            <h3 className="text-center">Personal</h3>
            
            
            <p>
                I grew up in Marietta Georgia and went to a high school here too. I've been pretty interested in all kinds of sports and while I have a huge passion for video games, I've also been camping quite a bit growing up. I spent some time with the Boy Scouts and that's where I learned the most about camping. I even made it to Eagle Scout. 
            </p>
            
            <p>
                I play quite a bit of video games. Currently my favorite is card game called Hearthstone, but I play quite a bit of others too. Recently I've grown pretty fond of my fitbit and I've been very focused on tracking calories and maintaining a healthy weight. I'm doing a bit of running. I've signed up for the bubble run and the blacklight run this year. However I think that the corona virus might be delaying all races. One of my main goals this year is to get employed with a great company with people I enjoy being with.
            </p>

            </div>
           
            
        )

    }
}

export default About;