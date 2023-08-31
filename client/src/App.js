import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";



const App = () => {
    return (
        <div>
        <BrowserRouter>
        <Routes>
            <Route path="/login"  exact Component={Login} />
            <Route path="/register" exact Component={Register} />
            <Route path="/home" exact Component={Home} />
            </Routes>
        </BrowserRouter>
        </div>
    )

}

export default App;