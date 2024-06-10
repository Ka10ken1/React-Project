import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "../pages/Home"
import Login from "../pages/Login"
import SignUp from "../pages/SignUp"
import Booking from "../pages/Booking"

function Nav() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout> </Layout>}>
                <Route index element={<Home></Home>} />
                <Route path="booking" element={<Booking />} />
                <Route path='login' element={<Login></Login>} />
                <Route path='signup' element={<SignUp />} />
            </Route>
        </Routes>
    </BrowserRouter>
}


export default Nav;
