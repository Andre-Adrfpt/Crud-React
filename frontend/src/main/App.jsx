import React from "react"
import {BrowserRouter, HashRouter} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Logo from "../components/template/Logo"
import Footer from "../components/template/Footer"
import Nav from "../components/template/Nav"
import Routes from "./routes"

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>