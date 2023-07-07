import {Navbar , Container,Nav} from "react-bootstrap";
import { useState ,useEffect } from "react";
import logo from "../Components/Assets/img/logo.svg";
import navIcon1 from "../Components/Assets/img/nav-icon1.svg";
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar =() =>{
    const [activeLink, setActiveLink] =useState("home");
    const [scrolled , setScrolled] =useState(false);
    useEffect(()=>{
        const onScroll=()=>{
            if (window.scrollY>50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return()=>window.removeEventListener("scroll", onScroll);
    },[])
 const onUpdateActiveLink =(value) =>{
    setActiveLink(value)
 }

return(
  <Router>
<Navbar expand="md" className={scrolled ? "scrolled":""}>
    <Container>
  {/* <Navbar.Brand href="#home">
    
  </Navbar.Brand> */}
  <Navbar.Toggle aria-controls="basic-navbar-nav">
    <span className="navbar-toggle-icon"></span>
  </Navbar.Toggle>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link href="#home" className={activeLink === 'home'? "active-navbar-link" : "navbar-link"} onClick={()=> onUpdateActiveLink("home")}>Home</Nav.Link>
      <Nav.Link href="#skills"className={activeLink === 'skills'? "active-navbar-link" : "navbar-link"}onClick={()=> onUpdateActiveLink("skills")}>Skills</Nav.Link>   
      <Nav.Link href="#projects"className={activeLink === 'project'? "active-navbar-link" : "navbar-link"}onClick={()=> onUpdateActiveLink("projects")}>Projects</Nav.Link>   
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
   <span className="navbar-text" >
        <div className="social-icon" >
            <a href="https://www.linkedin.com/in/sindhura-k-939046233/"><img src={navIcon1} alt=""/></a>
            {/* <a href="#"><img src={navIcon2} alt=""/></a>
            <a href="#"><img src={navIcon3} alt=""/></a> */}
        </div>
      
        <HashLink to='#contact'>
        <button className="vvd"><span>Let's Connect</span></button>
        </HashLink>
    </span>
  </Navbar.Collapse>
  </Container>
</Navbar>
</Router>
)
}