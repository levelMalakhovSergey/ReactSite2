
import React, {useContext, useState} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";
import GoogleLogin from "react-google-login";
import {refreshTokenSetup} from "../utils/RefreshTokenSetup";
import Logout from "../components/Logout";

const clientId = "672938067510-hqkcsj6nllovs9c8l4m31lq38jm5fbl2.apps.googleusercontent.com"

const Login = () => {

    const onSuccess = (res) => {
        console.log("current User  " + res)
        setIsAuth(true)
        // localStorage.setItem('auth', 'true')
        refreshTokenSetup(res)
    }
    const onFailure = (res) => {

        console.log("Failure " + res)
    }

    const [text, setText] = useState('')
    const {setIsAuth, loginnedUsers} = useContext(AuthContext)
    const login = event => {
        event.preventDefault();

        loginnedUsers.map(user => {
            if (user.login === event.target[0].value) {
                if (user.password === event.target[1].value) {
                    setIsAuth(true)
                    localStorage.setItem('auth', 'true')
                }
            }

        })
        event.target[0].value = "";
        event.target[1].value = "";
        setText("Uncorrect data")
    }

    return (

        <div style={{width: "800px", margin: "0 auto"}}>
            <div style={{display: "flex"}}>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{marginTop: "100px"}}
                isSignedIn={true}
            />
           </div>

            <h1>Page for login</h1>
            <h3>{text}</h3>
            {console.log(loginnedUsers)}
            <form onSubmit={login}>
                <MyInput type="text" placeholder='login'/>
                <MyInput type="password" placeholder='password'/>
                <MyButton>Войти</MyButton>

            </form>
            <a href='/registration'>Зарегестрироваться</a>


        </div>
)
    ;
};

export default Login;