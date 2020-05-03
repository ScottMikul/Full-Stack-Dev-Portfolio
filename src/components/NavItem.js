import React from "react";

function NavItem(props){
    let linkName = props.linkName;
    if(props.linkName==="home"){
        linkName = <i className='fas fa-home'></i> ;
    }

    return (
        <li className="nav-item ">
            <a className="nav-link text-center" href={props.href}>{linkName} </a>
        </li>
    )
}

export default NavItem;