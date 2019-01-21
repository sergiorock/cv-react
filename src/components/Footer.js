import React, { Component } from "react";

class Footer extends Component {
    render() {
        return(
            <footer>
         
               <div class="row">
         
                  <div class="twelve columns">
         
                     <ul class="social-links">
                        <li><a href="https://www.linkedin.com/in/lopezernic/"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="https://github.com/sergiorock"><i className="fa fa-github-square"></i></a></li>
                        <li><a href="mailto:lopez.sergio.n@gmail.com"><i className="fa fa-envelope"></i></a></li>
                     </ul>
                  </div>
         
                  <div id="go-top"><a class="smoothscroll" title="Back to Top" href="#home"><i class="icon-up-open"></i></a></div>
         
               </div>
         
            </footer> 
        )
    }
}

export default Footer;