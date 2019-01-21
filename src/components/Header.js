import React, { Component } from 'react';

class Header extends Component {
    name = "Hi! I'm López Sergio"
    introduction = "I'm a computer engineering student and I'm taking my first steps to became an elite web developer. "
    render(){
        return(
            <header id="home">
               <div className="row banner">
                  <div className="banner-text">
                     <h1 className="responsive-headline">{this.name}</h1>
                     <h3>{this.introduction}<a className="smoothscroll" href="#about">Let's start scrolling </a>
                     and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
                     <hr />
                     <ul className="social">
                        <li><a href="https://www.linkedin.com/in/lopezernic/"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="https://github.com/sergiorock"><i className="fa fa-github-square"></i></a></li>
                        <li><a href="mailto:lopez.sergio.n@gmail.com"><i className="fa fa-envelope"></i></a></li>
                     </ul>
                  </div>
               </div>
         
               <p className="scrolldown">
                  <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
               </p>
        </header>
        )
    }
}
export default Header 