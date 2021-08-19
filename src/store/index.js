import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters:[],
    charactersFilter:[]
  },
  mutations: {
    setCharacters(state,payload){
      state.characters =payload
    },
    setCharactersFilter(state,payload){
      state.charactersFilter=payload
    }
  },
  actions: {
    async getCharacters({commit}){
      try {
        const response = await fetch("https://rickandmortyapi.com/api/character")
        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.error(error)
        
      }
    }
  },
  modules: {
  }
})
