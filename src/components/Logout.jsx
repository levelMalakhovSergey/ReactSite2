import React from 'react';
import {GoogleLogout} from "react-google-login";

const clientId = "672938067510-hqkcsj6nllovs9c8l4m31lq38jm5fbl2.apps.googleusercontent.com";
const Logout = () => {
    const onSuccess = () => {alert('logout success')}
    return (
        <div>
            <GoogleLogout clientId={clientId} buttonText='Logout' onLogoutSuccess={onSuccess}/>
        </div>
    );
};

export default Logout;