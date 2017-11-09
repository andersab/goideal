import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  ideas: []
}

const mutations = {
  ADD_IDEA (state) {
    const newIdea = {
      overview: 'Brief Overview of idea',
      author: 'Author of Idea',
      upVotes: 0
    }
    state.ideas.push(newIdea)
    state.activeIdea = newIdea
  }
}

export default new Vuex.Store({
  state,
  mutations
})
