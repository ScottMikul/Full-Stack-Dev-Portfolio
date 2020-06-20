import React from "react";


//imports all of the images from this directory and stores them into an object with the key being the image name
// thank you stack overflow.
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {return images[item.replace('./', '')] = r(item); });
    return images;
  }
const images = importAll(require.context('./', false, /\.(png|jpe?g|svg|gif)$/))

function Project(props){
    console.log(props.imgUrl);
    let demoLink = props.demoLink;
    let loginDesc = props.login;
    if(props.demoLink){
        demoLink = 
        <div>
            Demo: <a href={props.demoLink} >{props.demoLink}</a>
        </div>
    }
    if(props.login){
        console.log("we have props.login :D :D :D D:D: D:D :D :DD :LKDJf;lakjdf;ljklsdfj");
        loginDesc = <div>
            <div>Login: {props.login.user}</div>
            <div>Password: {props.login.password}</div>
        </div>
    }
    return (
        <div className="card">
            <div className="card-header text-center">
                {props.title}
            </div>
            <div className="card-body">
                <img width="100%" height="100%" src={images[props.imgUrl]} alt=""/>
            </div>
            <p className="card-text text-center">
                {props.description}
            </p>
            <div>
                Git: <a href={props.repoLink}> {props.repoLink}</a>
            </div>
            {demoLink}
            {loginDesc}
        </div>
    )
}

export default Project;