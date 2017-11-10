export const addIdea = ({ dispatch }) => {
  dispatch('ADD_IDEA')
}

export const editIdea = ({ dispatch }, e) => {
  dispatch('EDIT_IDEA', e.target.value)
}

export const deleteIdea = ({ dispatch }) => {
  dispatch('DELETE_IDEA')
}

export const updateActiveIdea = ({ dispatch }, idea) => {
  dispatch('SET_ACTIVE_IDEA', idea)
}
