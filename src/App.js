
import React from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";


import "./styles/App.css";
import Navbar from "./components/UI/navbar/Navbar";
import Switch from "react-router-dom/es/Switch";
import Redirect from "react-router-dom/es/Redirect";
import Error from "./pages/Error";
import AppRouter from "./components/AppRouter";

function App() {
  return  (
  
    
    <BrowserRouter>
    <Navbar/>
    <AppRouter/>

    </BrowserRouter>

    
 
  )}

export default App;
