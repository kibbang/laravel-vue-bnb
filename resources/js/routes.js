import VueRouter from "vue-router";
import Bookables from "./bookables/Bookables";
import secondComponent from "./components/Example2";

const routes = [
    {
        path: "/",
        name: "home",
        component: Bookables
    },

    {
        path: "/sec",
        name: "sec",
        component: secondComponent
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
