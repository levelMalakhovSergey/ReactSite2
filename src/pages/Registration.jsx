import React, {useContext, useState} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";
import {render} from "react-dom";
import {useHistory} from "react-router-dom";




const Registration = () => {
    const [login,setLogin]= useState('')
    const [password,setPassword]= useState('')
    const {isAuth, setIsAuth, loginnedUsers, setUser } = useContext(AuthContext )
    let history= useHistory();
    const  regUser =  event => {
        let temp= [...loginnedUsers, {login: login , password: password}];
        setUser(temp)
        setPassword('')
        setLogin('')
        //  setIsAuth(true)
        // localStorage.setItem('auth', 'true')
        console.log(loginnedUsers)

        history.push('/')
        //document.location.href = "/login";
    }
    return (
        <div style={{width:"800px" , margin:"0 auto"}}>
            <h1>Page for registration</h1>

                <MyInput type="text" onChange={e => setLogin(e.target.value)} placeholder='login' value={login}/>
                <MyInput type="password" onChange={e => setPassword(e.target.value)} placeholder='password' value={password}/>
                <MyButton onClick={() => regUser()}>Зарегестрироваться</MyButton>

        </div>
    );
};

export default Registration;