import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  ideas: [],
  activeIdea: {}
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
  },
  EDIT_IDEA (state, text) {
    state.activateIdea.text = text
  },
  DELETE_IDEA (state) {
    state.ideas.$remove(state.activeIdea)
    state.activeIdea = state.ideas[0]
  },
  SET_ACTIVE_IDEA (state, idea) {
    state.activeIdea = idea
  }
}

export default new Vuex.Store({
  state,
  mutations
})
