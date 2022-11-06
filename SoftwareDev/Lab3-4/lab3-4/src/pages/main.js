import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./home";
import React from "react";

export default function Main() {
    return (
        <main>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                {/*<Route path='/roster' component={Roster}/>*/}
                {/*<Route path='/schedule' component={Schedule}/>*/}
            </Routes>
        </main>
    )
}