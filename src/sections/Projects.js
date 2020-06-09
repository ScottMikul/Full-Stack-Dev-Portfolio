import React from "react";
import Project from "../components/Project";
class project {
    constructor(title, imgUrl, description, repoLink, demoLink) {
      this.title = title;
      this.imgUrl = imgUrl;
      this.description = description;
      this.repoLink = repoLink
      this.demoLink = demoLink;
    }
  }

class Projects extends React.Component {

    render() {

        let projects = [
            new project("Password Generator",
             "password-generator.png",
              "Create any a customized and secure password.",
              "https://github.com/ScottMikul/PasswordGenerator",
              "https://scottmikul.github.io/PasswordGenerator"),

            new project("DataTrak",
              "datatrak.png",
              "allow community event organizers to track data and generate reports.",
              "https://github.com/ScottMikul/24-project-3",
              "https://salty-mountain-80189.herokuapp.com/"
            ),

             new project("Weather Forecast",
             "WeatherDashBoard.png",
             "Displays the next 5 days of forecast using the OpenWeather Api",
             "https://github.com/ScottMikul/WeatherForecast",
             "https://scottmikul.github.io/WeatherForecast/"

             ),

             new project("Stop and Shop",
                 "stop-and-shop.png",
                 "allows a shopper to put items into a card then checkout using stripe client api",
                 "https://github.com/ScottMikul/stopandshop",
                 "https://stop-and-shop-2020.herokuapp.com/"
             ),

            new project("Developer Profile Generator",
                "PortfolioGenerator.gif",
                "A node application the creates a styled pdf from a github users URL",
                "https://github.com/ScottMikul/developer-profile-generator"
            
            ),

            new project("Day Callendar",
                "WorkDayScheduler.png",
                "Save an activity to hour slot and the result is stored on the browser",
                "https://github.com/ScottMikul/daycallendar",
                "https://scottmikul.github.io/daycallendar/"
            )
        ]

        //const projectComponentArr = "woopee";

        const projectComponentArr = projects.map((project,index)=> {
            if(project.demoLink){
                return <Project title={project.title} repoLink={project.repoLink} demoLink={project.demoLink} imgUrl={project.imgUrl} description={project.description} key={index}></Project>
            }

                return <Project title={project.title} repoLink={project.repoLink}  imgUrl={project.imgUrl} description={project.description} key={index}></Project> 

            
        })
        return (
            <div id="work" >
                <h3 className="text-center">Recent Projects</h3>
                {projectComponentArr}
            </div>

        )

    }
}

export default Projects;