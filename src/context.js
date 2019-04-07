import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: storeProducts,
            detailProduct: detailProduct
        };
    }

    handleDetails = () => {

    }

    addToCart = () => {
        
    }

    render() {
        return(
            <ProductContext.Provider
                value={{
                    ...this.state,
                    handleDetails: this.handleDetails,
                    addToCart: this.addToCart,
                }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};