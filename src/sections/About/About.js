import React from "react"
import selfie from "./portfolio-pic.jpg"

class About extends React.Component{
    render(){
        return(
            <div className="small-side-margins">
                <div className="add40vh" id="about"></div>
                <h3 className="text-center"> About me</h3>
                <div className="row">
                    <div className="col-12 col-md-6 order-md-2 order-1"><img src={selfie} className="mx-auto rounded-circle  d-block d-md-flex" alt="portfolio-pic" height="180px" width="215px" />  </div> 
                   <div className="col-12 col-md-6 order-md-1 order-2" >
                     <p> Hi! I'm Scotty I'm a full stack developer from Atlanta Georgia. I'm a high energy, good attitude kind of guy who
                    enjoys comedy. I love coding, learning new things and overcoming challenges.  </p>
                    <p>
                    I have quite a bit of coding education and a bit of work experience too. I graduated Georgia Southern with a BS
                    in computer science, got a certificate with teamtreehouse in java web development, and more recently graduated from a Full Stack Development bootcamp with Georgia Tech. I had worked as a developer with Home Depot for about 3 years.
                </p>
                    </div> 
                    
                    
                </div>

              
                
 

            
            <h3 className="text-center">Personal</h3>
            
            
            <p>
                I grew up in Marietta Georgia and went to a high school here too. I've been pretty interested in all kinds of sports and while I have a huge passion for video games, I've also been camping quite a bit growing up. I spent some time with the Boy Scouts and that's where I learned the most about camping. I even made it to Eagle Scout. 
            </p>
            
            <p>
                I play quite a bit of video games. I tend to like strategy games the most. Currently my favorite is card game called Hearthstone, but I play quite a bit of others too. 
            </p>

            <p>I'm starting to like cooking because I like eating. I think everyone likes eating. The main problem with eating is that eventually you have to stop.</p>



            </div>
           
            
        )

    }
}

export default About;