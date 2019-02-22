import React from "react"
import { ProductConsumer } from "../context";

export default class Cart extends React.Component {
    render() {
        
        return (
            <>
            
            <div>{this.state}</div>
            <ProductConsumer>
            
            {(value)=> {
                const {img, title, price} = value.detailProduct; 
                return (<div>
                <h1>{title}</h1>
                
                <h2>{price}</h2>
                </div>)}}
                </ProductConsumer>
            </>
            
        )
    }
}