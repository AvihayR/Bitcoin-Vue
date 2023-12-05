import { storageService } from './async-storage.service.js'
import { contactService } from './contactService.js'
const USERS_STORAGE_KEY = 'user'
const LOGGED_USER_STORAGE_KEY = 'loggedUser'

const user = {
    name: "Avici R",
    balance: 100,
    transactions: []
}

async function getUser() {
    return await storageService.query(LOGGED_USER_STORAGE_KEY)
}

async function login(username) {
    const userDB = await storageService.query(USERS_STORAGE_KEY)
    let foundUser = userDB.find(user => user.name === username)

    if (!foundUser) {
        foundUser = await signup(username)
    } else {
        storageService.save(LOGGED_USER_STORAGE_KEY, foundUser)
    }
}

async function logout() {
    return await storageService.save(LOGGED_USER_STORAGE_KEY, [])
}

async function signup(username) {
    let userToSave = {
        name: username,
        balance: 100,
        transactions: []
    }
    userToSave = await storageService.post(USERS_STORAGE_KEY, userToSave)
    storageService.save(LOGGED_USER_STORAGE_KEY, userToSave)
}

async function transferFunds(contactId, amount) {
    const loggedUser = await getUser()
    if (loggedUser.balance < amount) return new Error('Unable to transfer larger amount than user\'s current amount')

    const contactToTransfer = await contactService.getContactById(contactId)

    const transfer = {
        toId: contactToTransfer._id,
        to: contactToTransfer.name,
        at: Date.now(),
        amount
    }

    loggedUser.transactions.unshift(transfer)
    loggedUser.balance -= amount

    await storageService.save(LOGGED_USER_STORAGE_KEY, loggedUser)
    await storageService.put(USERS_STORAGE_KEY, loggedUser)
    return loggedUser
}

async function getTransactions() {
    const loggedUser = await getUser()
    return loggedUser.transactions
}

export const userService = {
    getUser,
    login,
    logout,
    transferFunds,
    getTransactions,
}