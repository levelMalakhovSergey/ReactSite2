import {GoogleLogout, useGoogleLogout} from "react-google-login";

import React, {useContext} from 'react';
import {AuthContext} from "../../context";
const clientId = "672938067510-hqkcsj6nllovs9c8l4m31lq38jm5fbl2.apps.googleusercontent.com";
const MyuseLogoutHook = () => {
    const {isAuth,setIsAuth} = useContext(AuthContext)
    const onLogoutSuccess = (res) => {
        console.log("logout succes")
    }
    const onFailure = () => {console.log("handle failure cases")}
    const myLogout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
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