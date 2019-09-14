import React, { Component } from 'react'
import { storeProducts, detailProduct } from "./data"
const ProductContext = React.createContext();
//provider 
//consumer

class ProductProvider extends Component {
    state = {
        products: storeProducts,
        detailProduct: detailProduct
    }
    handleDetails = () => {
        console.log("hello from d")
    }
    addToCart = () => {
        console.log('asd')
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetails: this.handleDetails,
                addToCart: this.addToCart
            }}>
                {
                    this.props.children
                }
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductConsumer, ProductProvider };
