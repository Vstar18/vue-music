import vue from 'vue'
import vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutation'
import state from './state'
import createLogger from 'vuex/dist/logger'

vue.use(vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new vuex.Store({
  state,
  actions,
  getters,
  mutations,
  strict: debug,
  plugin: debug ? [createLogger()] : []
})
