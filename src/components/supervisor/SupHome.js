import React from "react";
import { Navbar,Container,Nav } from "react-bootstrap";

export default function SupHome(){

    
    return (
        
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">Supervisor Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Topics</Nav.Link>
            <Nav.Link href="/SupEvalution">Document Evaluation</Nav.Link>
            <Nav.Link href="#pricing">Documents</Nav.Link>
          </Nav>
          </Container>
          </Navbar>
          
          )
}