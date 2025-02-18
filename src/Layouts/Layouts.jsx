import React from 'react'
import Header from './Header/Header'
import { Outlet } from "react-router-dom";
import Footer from './Footer/Footer';
export default function Layouts() {
    return (
        <main>
            <Header />
            <div className="body">
                <Outlet />
            </div>
            <Footer />
        </main>
    )
}
