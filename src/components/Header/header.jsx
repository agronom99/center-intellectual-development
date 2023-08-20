import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/f_31061dc1e375ab34 1.png"
import logoTel from "../../images/Group 2.svg"

const Header = () => {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">О нас</Nav.Link>
            <Nav.Link href="#features">Каталог</Nav.Link>
            <Nav.Link href="#pricing">Сертификаты</Nav.Link>
            <Nav.Link href="#pricing">Отзывы</Nav.Link>
            <Nav.Link href="#pricing">Контакты</Nav.Link>
          </Nav>
          <Nav.Link href="#pricing" className="tel">
            <img src={logoTel} alt="logoTel" style={{marginRight:"8px"}}/>
            <p style={{fontWeight:"600", fontSize:"18px"}}>8 (---) 145-98-26</p>
          </Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
