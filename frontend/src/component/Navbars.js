import React,{useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown, Container, Nav, Form, Button } from 'react-bootstrap';
import {NavLink,useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import './css/Navbars.css';
import Img from './image/favicon.ico'
// import Img1 from './image/earth.png'

const  Navbars = ({size}) => {
  const [login, setLogin] = useState(false);
  const [filter ,setFilter] = useState('');
  const navigator = useNavigate ()
  


  
  // useTranslation
  const { t, i18n } = useTranslation();
  const changeEn = () =>{
    i18n.changeLanguage('en')
}
const changeFr = () =>{
    i18n.changeLanguage('ar')
}


  const handleRemove = () =>{
    Cookies.remove("login");
    setLogin(false);
    navigator("/Signin")
    window.location.reload()
  }

  return (
    
    <Navbar className="bg-body-tertiary icons">
        <Container>
          <Navbar.Brand href="#home"  className="icons">
            <img
              alt=""
              src={Img}
              width="60"
              height="60"
              className="d-inline-block align-top icon"
            />{' '}
            Nefertari
          </Navbar.Brand>
        </Container>
      </Navbar>
    
  
  );
}

export default Navbars;
