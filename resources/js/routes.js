import VueRouter from 'vue-router';
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import ForgotPassword from "./components/login/ForgotPassword";
import Home from "./components/main/Home";
import Overview from "./components/main/Overview";
import Charts from "./components/main/Charts";
import Tables from "./components/main/Tables";
let routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path:'/register',
        component: Register
    },
    {
        path:'/forgotPassword',
        component: ForgotPassword
    },
    {
        path: '/',
        component: Home,
        children: [
            { path: '/', component: Overview },
            { path: '/charts', component: Charts },
            { path: '/tables', component: Tables },
        ]
    }
];
export default new VueRouter({
    //使用history 模式 ， url不顯示/#/

    mode:'history',
    routes
})
