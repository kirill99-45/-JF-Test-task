import axios from 'axios';

export const userModule = {
    state: () => ({
        users: [],
        activeUser : null,
        searchQuery : '',
        isUsersLoading : false,
        searchBadRequest : '',
    }),
    getters : {
        allUsers(state) {
            return state.users.filter(user => {
                if (user.name.toLowerCase().includes(state.searchQuery.toLowerCase()) || user.id === Number(state.searchQuery)) {
                    return user
                }
            })
        },
        activeUser(state) {
            return state.activeUser
        }
    },
    actions: {
        async fetchUsers({ commit }) {
            try {
                commit('setLoading', true)
                const response = await axios.get('https://jsonplaceholder.typicode.com/users?_limit=10')
                commit('updateUsers', response.data)
            } catch (error) {
                commit('setSearchBadRequest', `Возникла ошибка: ${error}.`)
            } finally {
                commit('setLoading', false)
            }
        },
    },
    mutations: {
        updateUsers(state, users) {
            state.users = users
        },
        updateActiveUser(state, user) {
            state.activeUser = user
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },
        setLoading(state, bool) {
            state.isUsersLoading = bool
        },
        setSearchBadRequest(state, string) {
            state.searchBadRequest = string
        }
    },
    namespaced: true,
}