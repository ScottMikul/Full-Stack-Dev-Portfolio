import React from "react";
import Project from "../components/Project";
class project {
    constructor(title, imgUrl, description, repoLink, demoLink, login) {
      this.title = title;
      this.imgUrl = imgUrl;
      this.description = description;
      this.repoLink = repoLink
      this.demoLink = demoLink;
      this.login= login;
    }
  }

class Projects extends React.Component {

    render() {

        let projects = [
            new project("Password Generator",
             "password-generator.png",
              "Javascript/html/css/bootstrap project that allows a user to create any a customized and secure password.",
              "https://github.com/ScottMikul/PasswordGenerator",
              "https://scottmikul.github.io/PasswordGenerator"),

            new project("DataTrak",
              "datatrak.png",
              "MERN/passport/chartjs project that allows community event organizers to track data and generate reports.",
              "https://github.com/ScottMikul/24-project-3",
              "https://salty-mountain-80189.herokuapp.com/",
              {user:"admin@gmail.com", password:"password"}
            ),

             new project("Weather Forecast",
             "WeatherDashBoard.png",
             "Bootstrap/css/html/javascript/jquery project that displays the next 5 days of forecast using the OpenWeather Api",
             "https://github.com/ScottMikul/WeatherForecast",
             "https://scottmikul.github.io/WeatherForecast/"

             ),

             new project("Stop and Shop",
                 "stop-and-shop.png",
                 "Node/sql/handlebars/express/bootstrap project that allows users to put items into a card then checkout using stripe client api",
                 "https://github.com/ScottMikul/stopandshop",
                 "https://stop-and-shop-2020.herokuapp.com/",
                 {user:"arvin.mahmoudi@gmail.com", password:"123456"}
                 
             ),

            new project("Developer Profile Generator",
                "PortfolioGenerator.gif",
                "Node/Javascript/CSS project that allows the user to create a styled pdf from a github users URL",
                "https://github.com/ScottMikul/developer-profile-generator"
            
            ),

            new project("Day Callendar",
                "WorkDayScheduler.png",
                "LocalStorage/Bootstrap/Javascript/Css/ projcet that allows a user to add activities to hour slot and store in browser",
                "https://github.com/ScottMikul/daycallendar",
                "https://scottmikul.github.io/daycallendar/"
            )
        ]

        //const projectComponentArr = "woopee";

        const projectComponentArr = projects.map((project,index)=> {
            
            if(project.login){
                return <Project title={project.title} repoLink={project.repoLink} demoLink={project.demoLink} imgUrl={project.imgUrl} description={project.description} login={project.login} key={index}></Project>
            }
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