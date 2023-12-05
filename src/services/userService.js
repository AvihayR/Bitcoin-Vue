import { storageService } from './async-storage.service.js'
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
    const foundUser = userDB.find(user => user.name === username)
    if (!foundUser) {
        signup(username)
    } else {
        await storageService.save(LOGGED_USER_STORAGE_KEY, foundUser)
    }
}

async function signup(username) {
    const userToSave = {
        name: username,
        balance: 100,
        transactions: []
    }

    const savedUser = await storageService.post(USERS_STORAGE_KEY, userToSave)
    return await storageService.save(LOGGED_USER_STORAGE_KEY, savedUser)
}

export const userService = {
    getUser,
    login
}