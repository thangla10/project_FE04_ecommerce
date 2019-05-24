import React, { Component } from 'react';
import emptycart from '../../images/emptycart.svg';
import {Link} from 'react-router-dom';

class EmptyCart extends Component {
    render() {
        return(
            <div className="container mt-5">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title">
                        <h1 className="text-capitalize font-weight-bold text-center">Your cart is currently empty</h1>
                        <img src={emptycart} alt="emptycart" height="350" width="350" />
                        <Link to="/products">
                            <button className="continue">Continue Shopping</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmptyCart;