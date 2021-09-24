import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AppFooter extends Component {
    render() {
        return <div id="footer">
            <p>
                <Link to="/">HOME</Link> | 
                <Link to="/about">ABOUT US</Link> | 
                <Link to="/car-list">NEW CARS</Link> | 
                <Link to="/contact-us">CONTACTS</Link><br/>
            </p>
        </div>
    }
} 

export default AppFooter;