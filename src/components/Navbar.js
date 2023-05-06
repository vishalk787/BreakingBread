import React, { useState } from "react";
import {Outlet, Link, useLocation} from 'react-router-dom'

function Navbar () {
    const location = useLocation()
    const itemsObj = {
        'Black Forest Pastry': 0,
        'Chocolate Pastry' : 0 ,
        'Cinamon Roll': 0,
        'Croissant':0,
        'Donuts':0,
        'Macarone':0,
        'Ferrero Rocher Muffin':0,
        'Spiced Bread':0,
        'Strawberry Cheese Cake':0,
        'Total':0
    }
    const [cartItems, setCartItems] = useState(itemsObj)


    return(
        <div className="navbar flex">
            <Link to='/'  className="logo">
                <h1 > Breaking Bread </h1>
            </Link>
            { location.pathname === '/' ?  
            
                <Link to='/cart' className='btn btnHeight flex'>
                    {/* <h1>Cart</h1>    */}
                    <img className="icon" src='/cart.png' alt="Cart Icon"/>
                </Link>

                : null
            }
            <Outlet context={[cartItems, setCartItems]}/>
        </div>
    )
}

export default Navbar