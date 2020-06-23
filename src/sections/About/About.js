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

              
                
 

            

            

            </div>
           
            
        )

    }
}

export default About;