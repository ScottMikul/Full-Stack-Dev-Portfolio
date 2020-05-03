
import React from "react"


class Footer extends React.Component{
    render(){
        return(
            <div>
            <h3 class="text-center mt-4" id="contact">Contact</h3>
            <ul class="row d-flex justify-content-center mt-3 noleftpadding">
                <li class="col-2"><a href="https://www.linkedin.com/in/scottmikul"><i class="fab fa-linkedin"></i></a></li>
                <li class="col-2"><a href="https://github.com/ScottMikul"><i class="fab fa-github-square"></i></a></li>
                <li class="col-2"><a href="https://twitter.com/scottymikul1"><i class="fab fa-twitter"></i></a></li>
                <li class="col-2"><a href="assets/files/ScottyMikulFullStackDev2020.pdf"><i class="fas fa-file-alt"></i></a>  </li>
                <li class="col-2"><a href="mailto:scottymikul@gmail.com"><i class="fas fa-envelope"></i></a></li>
            </ul>
            </div>

        )

    }
}

export default Footer;