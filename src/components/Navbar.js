import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import cart from '../cart.png';

class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-sm bg-success navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand" height="50" width="50"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/"className="nav-link">
                            FOOTBALL BOOTS STORE
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <img src={cart} alt="cart" height="30" width="30" />
                </Link>
            </nav>
        );
    }
}

export default Navbar;