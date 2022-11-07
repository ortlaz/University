import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./home";
import React from "react";
import User from "./user";
import BookList from "./bookList";
import AuthorList from "./authorList";
import Search from "./search";
import BookedBooksList from "./bookedBooksList";
import SignUp from "./signUp";
import SignIn from "./signIn";

export default function Main({authorized, setAuthorized}) {
    return (
        <main>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/user' element={<User setAuthorized={setAuthorized}/>}/>
                <Route path='/books' element={<BookList authorized={authorized} setAuthorized={setAuthorized}/>}/>
                <Route path='/authors' element={<AuthorList authorized={authorized} setAuthorized={setAuthorized}/>}/>
                <Route path='/search' element={<Search/>}/>
                <Route path='/booked' element={<BookedBooksList setAuthorized={setAuthorized}/>}/>
                <Route path='/signup' element={<SignUp setAuthorized={setAuthorized}/>}/>
                <Route path='/signin' element={<SignIn setAuthorized={setAuthorized}/>}/>
            </Routes>
        </main>
    )
}