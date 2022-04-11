import React, {useContext} from 'react';
import {Link, useHistory} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";
import MyuseLogoutHook from "../../hooks/MyuseLogoutHook";


const Navbar = () => {
    const {isAuth,setIsAuth} = useContext(AuthContext)
    let history = useHistory()
    const logout = () => {
        // LOGAUT HAPPANING IN MYUSElOGAUTHOOK
        // setIsAuth(false)
        // localStorage.removeItem('auth')
        // history.push('/login')
    }
    return (
        <div className="navbar">
            <MyButton onClick ={() => logout()} >Exit Account</MyButton>
            <MyuseLogoutHook/>
            <div className="navbar__links">
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/paginationtable">Table View</Link>
            </div>
        </div>
    );
};

export default Navbar;