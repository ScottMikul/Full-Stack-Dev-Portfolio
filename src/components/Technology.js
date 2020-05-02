import React from "react";

function Technology(props){

    return (
        <li class="nav-item ">
            <a class="nav-link " href={props.href}>{props.linkName}</a>
        </li>
    )
}

export default Technology;