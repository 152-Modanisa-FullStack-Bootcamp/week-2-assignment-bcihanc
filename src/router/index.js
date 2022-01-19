import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/views/HomePage";
import FavoritesPage from "@/views/FavoritesPage";
import WatchPage from "@/views/WatchPage";

Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    routes: [
        {path: "/", component: HomePage},
        {path: "/favorites", component: FavoritesPage},
        {path: "/watch/:videoId", component: WatchPage}
    ]
})
