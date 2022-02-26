import React from 'react';
import {Route,Redirect,  Switch} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import {routes} from "../router";

const AppRouter = () => {
    return (
        <Switch>
            {routes.map(route =>
                <Route exact={route.exact} component={route.component} path={route.path}/>
            )}
            <Redirect to ="/posts"/>
        </Switch>
    );
};

export default AppRouter;