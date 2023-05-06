import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route,  } from 'react-router-dom'

import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Cart  from "./components/Cart";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path='/'  element={<Navbar/>} >
            <Route path="/" element={<Homepage/>} />
            <Route path="/Cart" element={<Cart/>} />
        </Route>
            
        </>
    )
)

export { router }