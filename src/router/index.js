import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PaginationTable from "../pages/PaginationTable";

export const privateRoutes = [
    {path: '/about', component: About , exact : true},
    {path: '/posts', component: Posts , exact : true},
    {path: '/paginationtable', component: PaginationTable, exact : true},
    {path: '/posts/:id', component: PostIdPage , exact : true},
]
export const publicRoutes = [
    {path: '/login', component: Login , exact : true},
    {path: '/registration', component: Registration , exact : true},
]