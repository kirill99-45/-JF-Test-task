import axios from 'axios';

export const userModule = {
    state: () => ({
        users: [],
        activeUser: null,
        searchQuery: '',
        isUsersLoading: false,
        searchBadRequest: '',
    }),
    getters: {
        allUsers(state) {
            const params = state.searchQuery.split(',')
            const result = {} // Использую объект, чтобы при поиске пользователей была возможность проверить по ключу.

            state.users.filter(user => {
                for (let i = 0; i < params.length; i++) {
                    const currentParam = params[i].trim()
                    if (currentParam !== '' && (user.username.toLowerCase().includes(currentParam.toLowerCase()) || user.id === Number(params[i]))) {
                        if (!result[user.id]) {
                            result[user.id] = user
                        }
                    }
                }
            })
            return Object.values(result)
        },
        activeUser(state) {
            return state.activeUser
        }
    },
    actions: {
        async fetchUsers({ commit }) {
            const URL = 'https://jsonplaceholder.typicode.com/users'

            try {
                commit('setLoading', true)
                const response = await axios.get(URL)
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
        closeActiveUser(state) {
            state.activeUser = null
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },
        setLoading(state, bool) {
            state.isUsersLoading = bool
        },
        setSearchBadRequest(state, string) {
            state.searchBadRequest = string
        },
    },
    namespaced: true,
}