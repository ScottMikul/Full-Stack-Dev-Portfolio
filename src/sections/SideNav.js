
import React from "react"
import NavItem from "../components/NavItem";


class TopNav extends React.Component{
    render(){
        return(
        <nav className="d-none d-md-block navbar-light bg-light col-md-2 position-fixed" style={{height:'100vh'}}>
        <ul className="nav nav-pills bd-sidenav flex-column justify-content-center" style={{height:'100vh'}} >
                <NavItem id="home_sidebar" className="justify-content-center" href="#home" linkName="home" />
                <NavItem id="about_sidebar" href="#about" linkName="About" />
                <NavItem id="work_sidebar" href="#work" linkName="Recent Projects" />
                <NavItem id="technologies_sidebar" href="#technologies" linkName="Technologies" />
                <NavItem  id="contact_sidebar" href="#contact" linkName="Contact" />
        </ul> 
        </nav>
        )

    }
}

export default TopNav;