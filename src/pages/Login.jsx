import React, {useContext, useState} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";



const Login = () => {
    const [text, setText] = useState('')
    const {isAuth, setIsAuth, loginnedUsers, setUser } = useContext(AuthContext )
    const login = event => {
        event.preventDefault();
        console.log(event)
        loginnedUsers.map(user => {
            if (user.login === event.target[0].value)
            {
                if (user.password === event.target[1].value)
                {
                    setIsAuth(true)
                    localStorage.setItem('auth', 'true')
                }
            }

        })
        event.target[0].value="";
        event.target[1].value="";
        setText("Uncorrect data")
    }

    return (
        <div style={{width:"800px" , margin:"0 auto"}}>
            <h1>Page for login</h1>
            <h3>{text}</h3>
            <form onSubmit={login}>
                <MyInput type="text" placeholder='login'/>
                <MyInput type="password" placeholder='password'/>
                <MyButton >Войти</MyButton>

            </form>
            <a href='/registration'>Зарегестрироваться</a>
        </div>
    );
};

export default Login;