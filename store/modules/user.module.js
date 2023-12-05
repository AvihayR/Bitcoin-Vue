import { contactService } from '../../src/services/contactService.js'
import { userService } from '../../src/services/userService.js'

export default {
    state() {
        return {
            loggedUser: null,
        }
    },
    mutations: {
        setUser(state, { user }) {
            state.loggedUser = user
        },

    },
    actions: {
        async loadLoggedUser(context) {
            try {
                const loggedUser = await userService.getUser()
                context.commit({ type: 'setUser', user: loggedUser })
            } catch (err) {
                console.log(err)
                throw err
            }
        },
    },
    getters: {
        loggedUser(state) { return state.loggedUser }
    },
}