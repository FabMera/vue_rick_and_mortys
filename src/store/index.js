import { createStore } from 'vuex'
import api from './../api_axios/api';

export default createStore({
    state: {
        personajes: [],
        personaje: {},
        paginadoInfo: {},
        loading: false,
    },
    getters: {
        getPersonajes(state) {
            return state.personajes;
        },
        getPersonaje(state) {
            return state.personaje;
        },
        getSortedPersonajes: (state) => (orden) => {
            //Copiamos el array de personajes
            let personajesOrdenados = [...state.personajes]
            switch (orden) {
                case 'AZname':
                    return personajesOrdenados.sort((a, b) => a.name.localeCompare(b.name))
                case 'AZespecie':
                    return personajesOrdenados.sort((a, b) => a.species.localeCompare(b.species))
                default:
                    return personajesOrdenados;
            }
        }

    },
    mutations: {
        setPersonajes(state, payload) {
            state.personajes = payload;
        },
        setPersonaje(state, payload) {
            state.personaje = payload;
        },
        setPaginadoInfo(state, payload) {
            state.paginadoInfo = payload;
        },
        setLoading(state, payload) {
            state.loading = payload;
        },
    },
    actions: {
        async getCharactersAndPagination({ commit }, url) {
            try {
                commit('setLoading', true)
                const response = await api.get(url)
                const dataCharacteres = response.data.results
                const dataPagination = response.data.info
                console.log(dataCharacteres)
                console.log(dataPagination)
                commit('setPersonajes', dataCharacteres)
                commit('setPaginadoInfo', dataPagination)
            } catch (error) {
                console.log(error)
                return error;
            } finally {
                setTimeout(() => {
                    commit('setLoading', false);
                }, 1500)
                console.log('Finalizada la carga de personajes');
            }
        },
        async nextPage({ state, dispatch }) {
            //Si hay next, entonces se llama a la acción getCharactersAndPagination con la url de next como parámetro 
            {
                if (state.paginadoInfo.next) {
                    await dispatch('getCharactersAndPagination', state.paginadoInfo.next)
                }
            }
        },
        //Si hay prev, entonces se llama a la acción getCharactersAndPagination con la url de prev como parámetro
        async prevPage({ state, dispatch }) {
            {
                if (state.paginadoInfo.prev) {
                    await dispatch('getCharactersAndPagination', state.paginadoInfo.prev)
                }
            }
        },
    },
    modules: {
    }
})

