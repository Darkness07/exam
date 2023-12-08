import React from 'react'
import Home from '../pages/Home/Home'
import Contacts from '../pages/Contacts/Contacts'
import About from '../pages/About/About'
import { Route, Routes } from 'react-router-dom'

export default function MainRouter() {
    const nuEtoDa = [
        { link: "/", element: <Home />, id: 1 },
        { link: "/Contacts", element: <Contacts />, id: 2 },
        { link: "/About", element: <About />, id: 3 },
    ]
    return (
        <Routes>
            {
                nuEtoDa.map((item) => (
                    <Route path={item.link} element={item.element} key={item.id}></Route>
                ))
            }
        </Routes>
    )
}
