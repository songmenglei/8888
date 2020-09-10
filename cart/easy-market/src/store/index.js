import Vuex from 'vuex'
import Vue from 'vue'
import CreatLogger from 'vuex/dist/logger'

// 引入子模块
import home from './modules/home'


Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        home
    },
    plugins: [CreatLogger()]
})