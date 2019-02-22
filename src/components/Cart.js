import React from "react"
import { ProductConsumer } from "./context";

export default class Cart extends React.Component {
    render() {
        return (
            <>
            <div>{this.state}</div>
            <ProductConsumer>{(value)=> (<div>value</div>)}</ProductConsumer>
            </>
            
        )
    }
}