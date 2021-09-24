import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return <div>
            <ul className="menu">
                <li className="btn_1">
                    <Link to="/">home page</Link>
                </li>
                <li className="line"></li>
                <li className="btn_2">
                    <Link to="/about">about us</Link>
                </li>
                <li className="line"></li>
                <li className="btn_3">
                    <Link to="/car-list">all cars</Link>
                </li>
                <li className="line"></li>
                <li className="btn_5">
                    <Link to="/contact-us">contacts</Link>
                </li>
            </ul>
        </div>
    }
} 

export default Menu;