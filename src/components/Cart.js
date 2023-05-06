import React from "react";
import { useOutletContext } from "react-router-dom";

function Cart () {
    const [cartItems] = useOutletContext()
    function chekout(){
        console.log('checkout', checkoutObj)
    }
    let checkoutObj = {}
    function renderCartItems () {
        let cartItemsKeys = Object.keys(cartItems)
        let itemsToRender = cartItemsKeys.map(key => {
            if(cartItems[key] > 0) {
                checkoutObj[key] = cartItems[key]
                return (
                    <div className="cartItems flex bgcw" key={key}>
                        <h2> {key} </h2>
                        <h2> {cartItems[key]} </h2>
                    </div>
                )
            }
            return null
        })

        return itemsToRender
    }

    return(
        <div className="container cart">

            {renderCartItems()}
            <button onClick={chekout} className='btn chkout' > <h1>Checkout</h1> </button>
        </div>
    )
}

export default Cart