import VueRouter from "vue-router";
import Bookables from "./bookables/Bookables";
import Bookable from "./bookable/Bookable";

const routes = [
    {
        path: "/",
        name: "home",
        component: Bookables
    },

    {
        path: "/bookable/:id",
        name: "bookable",
        component: Bookable
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
