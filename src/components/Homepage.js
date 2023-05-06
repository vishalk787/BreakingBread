import React from "react"
import Card from "./Card"
import Items from "../data"
import { useOutletContext } from "react-router-dom"

function Homepage () {
    const [cartItems, setCartItems] = useOutletContext()
    
    return(
        <div className="container flex" >
            {Items.map(item => {
                return (
                    <Card
                      key={item.name}
                      name={item.name}
                      src={item.src}
                      price={item.price}
                      addtoCart={setCartItems}
                      oldCart={cartItems}
                    />
                )
            })}
        </div>
    )
}

export default Homepage