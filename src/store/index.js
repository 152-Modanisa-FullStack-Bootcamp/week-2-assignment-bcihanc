import Vue from "vue";
import Vuex from "vuex";
import API from "@/api";

Vue.use(Vuex)

const INSERT_VIDEOS_MUTATION = "insertVideos"
export const FETCH_VIDEOS_ACTION = "fetchVideos"

export default new Vuex.Store({
    state: {videos: []},
    getters: {
        getAllVideos: state => state.videos,
        getFavoritesVideos: state => state.videos.filter(video => video.favorite === true),
    },
    mutations: {
        [INSERT_VIDEOS_MUTATION](state, payload) {
            state.videos = payload
        }
    },
    actions: {
        async [FETCH_VIDEOS_ACTION]({commit}) {
            const data = await API.fetchVideos()
            commit(INSERT_VIDEOS_MUTATION, data);
            console.log(data);
        }
    }
})
