import React, { Component } from 'react';
import Menu from './Menu';

class AppHeader extends Component {
    render() {
        return <div id="header"> 
            <img src={ process.env.PUBLIC_URL+"/images/logo.jpg" } width="206" height="116" alt="" id="logo" /> 
            <img src={ process.env.PUBLIC_URL+"/images/slogan.jpg"} width="269" height="46" alt="" id="slogan" />
            <Menu />
        </div>
    }
} 

export default AppHeader;