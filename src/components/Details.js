import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import '../styles/Button.css';

class Details extends Component {
    render() {
        return(
            <ProductConsumer>
                {value => {
                    const {id,company,img,info,price,title,inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h3>Made by: {company}</h3>
                                    <h3 className="font-weight-bold">Price: <span>$</span>{price}</h3>
                                    <h3>Information about the product:</h3><p className="text-muted">{info}</p>
                                    <div>
                                        <Link to="/">
                                            <button className="continue">Continue Shopping</button>
                                        </Link>
                                        <button className="cart" disabled={inCart?true:false} onClick={() =>{
                                            value.addToCart(id);
                                        }}>
                                            {inCart ? 'inCart' : 'add to cart'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;