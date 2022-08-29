import Vue from "vue"
import VueRouter from "vue-router";
import HomePage from "@/pages/HomePage";

Vue.use(VueRouter)

const routes = [
    {
        path: '/search-house-page',
        component: () => import('../pages/SearchHousePage')
    },
    {
        path: '',
        component: HomePage

    },
    {
        path: '/login',
        component: () => import('../pages/LoginPage')
    },
    {
        path: '/company-name',
        component: () => import ('../pages/CompanyListPage')
    },
    {
        path: '/add-advertisement-page',
        component: () => import('../pages/AddAdvertisementPage')
    },
    {
        path: '/help-page',
        component: () => import('../pages/HelpPage')
    },
    {
        path: '/registration-page',
        component: () => import('../pages/RegistrationPage')
    },
    {
        path: '/personal-account-page',
        component: () => import('../pages/PersonalAccountPage')
    },
    {
        path: '/room-page/:houseId',
        component: () => import('../pages/RoomPage')
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})