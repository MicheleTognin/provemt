import React from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import './BootNavbarStyles.scss';



function BootNavbar () {
 return (
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
     <Navbar.Brand href="#home">QBGROUP</Navbar.Brand>
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
       <Nav className="mr-auto">
         <Nav.Link href="#features">Formazione</Nav.Link>
         <Nav.Link href="#pricing">Comunicazione</Nav.Link>
         <NavDropdown title="Chi Siamo" id="collasible-nav-dropdown">
           <NavDropdown.Item href="#action/3.1">Come raggiungerci</NavDropdown.Item>
           <NavDropdown.Item href="#action/3.2">
             Staff
           </NavDropdown.Item>
           <NavDropdown.Item href="#action/3.3">La nostra storia</NavDropdown.Item>
           <NavDropdown.Divider />
           <NavDropdown.Item href="#action/3.4">
             Contatti
           </NavDropdown.Item>
         </NavDropdown>
       </Nav>
       <Nav>
         <Nav.Link href="#deets">Video</Nav.Link>
         <Nav.Link eventKey={2} href="#memes">
           Dicono di noi
         </Nav.Link>
       </Nav>
     </Navbar.Collapse>
   </Navbar>
 );
}

export default BootNavbar;