import React, { Component } from "react";
import styled from 'styled-components'


const logoPath = 'images/nav/navLogo.png'


const Nav = styled.div `
background-color: #FFFFFF;


`

 // const Header = ({ navigation }) => {
        class HeaderPage2AndOn extends Component {

           
            render() {
                return (
            <Nav>
            {/* <div className = 'navArrow'>
            <div className='card-img-top arrow'>
            </div> */}
            <img className='podIcon' src={logoPath} alt="POD"></img>
            {/* <div className='empty'></div> */}
            {/* </div> */}
            </Nav>
            )          
        }
  }
export default HeaderPage2AndOn