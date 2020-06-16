
import React from "react"
import resume from "./ScottyMikul_Resume.pdf";


class Footer extends React.Component{
    render(){
        return(
            <div>
            <h3 className="text-center mt-4" id="contact">Contact</h3>
            <ul className="row d-flex justify-content-center mt-3 noleftpadding">
                <li className="col-2"><a href="https://www.linkedin.com/in/scottmikul"><i className="fab fa-linkedin"></i></a></li>
                <li className="col-2"><a href="https://github.com/ScottMikul"><i className="fab fa-github-square"></i></a></li>
                <li className="col-2"><a href="https://twitter.com/scottymikul1"><i className="fab fa-twitter"></i></a></li>
                <li className="col-2"><a href={resume}><i className="fas fa-file-alt"></i></a>  </li>
                <li className="col-2"><a href="mailto:scottymikul@gmail.com"><i className="fas fa-envelope"></i></a></li>
            </ul>
            </div>

        )

    }
}

export default Footer;