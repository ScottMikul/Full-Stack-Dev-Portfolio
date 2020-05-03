import React from "react"
import NavItem from "../components/NavItem";

class TopNav extends React.Component{
    render(){
        return(
        <div className="topnavbar">
            <ul className="nav nav-pills mx-auto d-md-none flex-row mx-auto justify-content-center ">
                <NavItem href="#about" linkName="About" />
                <NavItem href="#work" linkName="Recent Projects" />
                <NavItem className="justify-content-center" href="#home" linkName="home" />
                <NavItem href="#technologies" linkName="Technologies" />
                <NavItem href="#contact" linkName="Contact" />
            </ul>
        </div>
        )

    }
}

export default TopNav;