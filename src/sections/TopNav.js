import React from "react"
import NavItem from "../components/NavItem";

class TopNav extends React.Component{
    render(){
        return(
            <div className="topnavbar">
            <ul className="nav nav-pills mx-auto d-md-none flex-row mx-auto justify-content-center ">
                {/* <li className="nav-item ">
                    <a className="nav-link" href="#about">About</a>
                </li> */}
                <NavItem href="#about" linkName="About" />
                {/* <li className="nav-item ">
                    <a className="nav-link " href="#work">Recent Projects</a>
                </li>
                
                <li className="nav-item">
                    <a className="navbar-brand " href="#home" className="justify-content-center"><i className="fas fa-home"></i></a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link" href="#technologies">Technologies</a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link " href="#contact">Contact</a>
                </li> */}
            </ul>
        </div>
        )

    }
}

export default TopNav;