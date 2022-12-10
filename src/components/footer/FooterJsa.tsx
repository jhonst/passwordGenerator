import "./FooterJsa.css";
import linkedin from "./icons/linkedin.svg";
import git from "./icons/square-github.svg";

const FooterJsa = () => {
    return (
        <footer className="footer-jsa">

<div className="container-icons-footerjsa">
<a href="https://www.linkedin.com/in/jhonst/" target="_blank"><img src={linkedin} alt="My Happy SVG" width="20px"/></a> 
<a href="https://github.com/jhonst" target="_blank"><img src={git} alt="My Happy SVG" width="20px"/></a> 


</div>

        <a href=""></a>        
        <p>By: Jhon Arteaga © 2022</p>
        <p>jhon.arteaga.r@gmail.com</p>
        {/* 
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/222579/apple.svg" alt="My Happy SVG" />
        <img src={cat} alt="My Happy SVG" width="50px"/>
        <img src="icons/cat-solid.svg" alt="My Happy SVG" />
        */}

        </footer>
    );
}

export { FooterJsa };