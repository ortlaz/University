import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./home";
import React from "react";
import User from "./user";

export default function Main() {
    return (
        <main>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/user' element={<User/>}/>
                {/*<Route path='/schedule' component={Schedule}/>*/}
            </Routes>
        </main>
    )
}