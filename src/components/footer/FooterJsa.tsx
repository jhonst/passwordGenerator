import "./FooterJsa.css";
import linkedin from "./icons/linkedin.svg";
import git from "./icons/square-github.svg";

const FooterJsa = () => {
    return (
        <footer className="footer-jsa">
            <div className="container-icons-footerjsa">
                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/jhonst/" target="_blank"><img src={linkedin} alt="My Happy SVG" width="20px" /></a>
                <a rel="noopener noreferrer" href="https://github.com/jhonst" target="_blank"><img src={git} alt="My Happy SVG" width="20px" /></a>
            </div>
            <p>By: Jhon Arteaga © 2022</p>
            <p>jhon.arteaga.r@gmail.com</p>
        </footer>
    );
}

export { FooterJsa };