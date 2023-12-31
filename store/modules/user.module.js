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

                if (loggedUser.length === 0) context.commit({ type: 'setUser', user: null })
                else context.commit({ type: 'setUser', user: loggedUser })

            } catch (err) {
                console.log(err)
                throw err
            }
        },
        async transferFunds(context, { contactId, amount }) {
            const user = await userService.transferFunds(contactId, amount)
            const transactions = await userService.getTransactions()

            context.commit({ type: 'setUser', user: { ...user, transactions: transactions } })
            try {
                // userService.transferFunds()
            } catch (err) {
                console.log(err)
                throw err
            }
        },
        async logOut(context) {
            try {
                const res = await userService.logout()
                context.commit({ type: 'setUser', user: res })
            } catch (err) {
                console.log(err)
                throw err
            }
        }
    },
    getters: {
        loggedUser(state) { return state.loggedUser },
        transactions(state) { return state.loggedUser?.transactions }
    },
}