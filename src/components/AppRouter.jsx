import React, {useContext} from 'react';
import {Route, Redirect, Switch} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import {publicRoutes, privateRoutes} from "../router";
import {AuthContext} from "../context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
    const {isAuth, setIsAuth , isLoading} = useContext(AuthContext)
    if (isLoading)
    {
        return <Loader/>
    }
    return (
        isAuth
            ? <Switch>
                {privateRoutes.map(route =>
                    <Route exact={route.exact} component={route.component} path={route.path} key = {route.path}/>
                )}
                <Redirect to="/posts"/>
            </Switch>
            : <Switch>
                {publicRoutes.map(route =>
                    <Route exact={route.exact} component={route.component} path={route.path}  key = {route.path}/>
                )}
                <Redirect to="/login"/>
            </Switch>


    );
};

export default AppRouter;