import React, {useEffect, useState} from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";


import "./styles/App.css";
import Navbar from "./components/UI/navbar/Navbar";
import Switch from "react-router-dom/es/Switch";
import Redirect from "react-router-dom/es/Redirect";
import Error from "./pages/Error";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";


function App() {
    const [isAuth,setIsAuth] = useState(false)
    const [loginnedUsers, setUser] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    useEffect(() => {
        setUser([{login:'admin', password:'12345'}])
        if (localStorage.getItem('auth'))
        {
            setIsAuth(true)
        }
        setIsLoading(false)
    },[])
    return (


        <AuthContext.Provider  value={{
            isAuth, setIsAuth,isLoading, loginnedUsers,setUser
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>

            </BrowserRouter>

        </AuthContext.Provider>

    )
}

export default App;
