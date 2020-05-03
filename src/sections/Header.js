import React from "react";
import "../css/style.css";
class Header extends React.Component{
    render(){
        return(
            <div className=" d-flex flex-column justify-content-center">
                <div className="add40vh" id="home"></div>
                <h1 className="text-center">Scotty Mikul</h1>
                <div id="subtitle" className="text-center"></div>
            </div>
        )

    }
}

export default Header;