import React, { Component } from 'react';
import '../styles/Navbar.css';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';
import cart from '../images/cart.png';

class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-sm bg-success navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand" height="50" width="50"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-4">
                        <Link to="/"className="nav-link">
                            FOOTBALL BOOTS STORE
                        </Link>
                    </li>
                    <li className="nav-item ml-4">
                        <Link to="/about"className="nav-link">
                            ABOUT US
                        </Link>
                    </li>
                    <li className="nav-item ml-4">
                        <Link to="/products"className="nav-link">
                            PRODUCTS
                        </Link>
                    </li>
                    <li className="nav-item ml-4">
                        <Link to="/guide"className="nav-link">
                            GUIDE
                        </Link>
                    </li>
                    <li className="nav-item ml-4">
                        <Link to="/sale"className="nav-link">
                            SALE OFF
                        </Link>
                    </li>
                    <li className="search-container ml-4">
                        <div class="container-1">
                            <span class="icon"><i class="fa fa-search"></i></span>
                            <input type="search" id="search" placeholder="Search..." />
                        </div>
                    </li>
                    <li className="nav-item ml-4">
                        <Link to="/account"className="nav-link">
                            ACCOUNT
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-5">
                    <img src={cart} alt="cart" height="30" width="30" />
                </Link>
            </nav>
        );
    }
}

export default Navbar;