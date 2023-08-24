import React from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/f_31061dc1e375ab34 1.png";
import logoTel from "../../images/Group 2.svg";

const Header = () => {
  return (
    <div className="flex items-center justify-between ml-28 h-32">
      <a href="#home">
        <img src={logo} alt="logo" />
      </a>
      <div className="nav-link text-lg font-medium ">
        <a href="#a"  className="mx-6"> О нас</a>
        <a href="#a"  className="mx-6"> Каталог</a>
        <a href="#a"  className="mx-6"> Сертификаты</a>
        <a href="#a"  className="mx-6"> Отзывы</a>
        <a href="#a"  className="mx-6"> Контакты</a>
      </div>
      <a href="#tel" className="flex items-center mr-28">
        <img src={logoTel} alt="logoTel" className="mx-2"/>
        <p className="font-semibold text-xl">8 (---) 145-98-26</p>
      </a>
    </div>
  );
};

export default Header;
