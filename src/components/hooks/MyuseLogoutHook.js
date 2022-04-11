import {GoogleLogout, useGoogleLogout} from "react-google-login";

import React, {useContext} from 'react';
import {AuthContext} from "../../context";
import {useHistory} from "react-router-dom";
const clientId = "672938067510-hqkcsj6nllovs9c8l4m31lq38jm5fbl2.apps.googleusercontent.com";
const MyuseLogoutHook = () => {
    const {isAuth,setIsAuth} = useContext(AuthContext)
    const history = useHistory()
    const onLogoutSuccess = (res) => {
        console.log("logout succes")
    }
    const onFailure = () => {console.log("handle failure cases")}
    const myLogout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
        history.push('/login')
        localStorage.removeItem('posts')
        signOut()
    }
    const {signOut} = useGoogleLogout({
        clientId , onFailure, onLogoutSuccess

    })
    return (
        <button className='googleButton' onClick={ myLogout}>
            <img src="icons.google.svg"/>
            Sign Out
        </button>
    );
};

export default MyuseLogoutHook;