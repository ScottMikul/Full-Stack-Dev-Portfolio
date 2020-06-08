import React from "react"
import "../css/style.css"
class technology {
    constructor(iconClass,name){
        this.iconClass=iconClass;
        this.name=name;
    }
}
class Technologies extends React.Component{
    render(){
        const PrimaryTechNologiesData = [
            new technology("devicon-git-plain colored","Github"),
            new technology("devicon-nodejs-plain colored","NodeJs"),
            new technology("devicon-javascript-plain colored","JavaScript"),
            new technology("devicon-bootstrap-plain colored","BootStrap"),

            new technology("devicon-css3-plain colored","CSS3"),
            new technology("devicon-html5-plain colored","HTML5"),
            new technology("devicon-react-original colored","React"),
            new technology("devicon-express-original colored grey","Express"),

            new technology("devicon-mongodb-plain colored","MongoDB"),
            new technology("devicon-visualstudio-plain colored","VS Code"),
            new technology("devicon-jquery-plain colored","jQuery"),
            new technology("devicon-mysql-plain colored","MySQL"),

            new technology("devicon-linux-plain colored","Linux"),
            new technology("devicon-ssh-plain colored yellow","SSH"),
            new technology("devicon-google-plain colored","Google Fu"),
            new technology("devicon-sequelize-plain colored","Sequelize"),
        ]
        let PrimaryTechNologiesElems = PrimaryTechNologiesData.map((item, index)=>{
                return <div className="col-3" key={index}><i className={item.iconClass}><span className="d-none d-lg-inline">{item.name}</span></i></div>
        })
        return(
            <div>
                <h3 className="text-center mt-3" id="technologies">Primary Technologies</h3>
                <div className= "large-icons">
                    <div className="row text-center mt-4">
                        {PrimaryTechNologiesElems.slice(0,4)}
                    </div>
                    <div className="row text-center mt-4">
                        {PrimaryTechNologiesElems.slice(4,8)}
                    </div>
                    <div className="row text-center mt-4">
                        {PrimaryTechNologiesElems.slice(8,12)}
                    </div>
                    <div className="row text-center mt-4">
                        {PrimaryTechNologiesElems.slice(12,16)}
                    </div>
                </div>
                <h3 className="text-center mt-3" >Familiar Technologies</h3>
                <div className="row text-center mt-4">
                    <div className="offset-3 col-3"><i className="devicon-amazonwebservices-original colored"><span className="d-none d-lg-inline">AWS</span></i></div>
                    <div className="col-3"><i className="devicon-java-plain colored"><span className="d-none d-lg-inline">Java</span></i></div>
                </div>
            </div>

        )

    }
}
export default Technologies;