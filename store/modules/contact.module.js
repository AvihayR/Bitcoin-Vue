import { contactService } from '../../src/services/contactService.js'

export default {
    state() {
        return {
            contacts: null,
        }
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        // removeCar(state, { carId }) {
        //     const idx = state.cars.findIndex(car => car._id === carId)
        //     state.cars.splice(idx, 1)
        // },
        // updateCar(state, { savedCar }) {
        //     console.log(savedCar)
        //     const idx = state.cars.findIndex(car => car._id === savedCar._id)
        //     state.cars.splice(idx, 1, savedCar)
        // },
        // saveCar(state, { savedCar }) {
        //     state.cars.push(savedCar)
        // },
    },
    actions: {
        async loadContacts(context) {
            try {
                const contacts = await contactService.getContacts()
                context.commit({ type: 'setContacts', contacts: contacts })
            } catch (err) {
                console.log(err)
                throw err
            }
        },
        async setFilterBy(context, { filterBy }) {
            try {
                const filteredContacts = await contactService.getContacts({ term: filterBy })
                context.commit({ type: 'setContacts', contacts: filteredContacts })
            } catch (err) {
                console.log(err)
                throw err
            }
        },
        // async removeCar(context, { carId }) {
        //     try {
        //         await carService.remove(carId)
        //         context.commit({ type: 'removeCar', carId })
        //     } catch (err) {
        //         console.log(err)
        //         throw err
        //     }
        // },
        // async saveCar(context, { car }) {
        //     const isUpdate = !!car._id

        //     try {
        //         const savedCar = await carService.save(car)

        //         if (isUpdate) {
        //             context.commit({ type: 'updateCar', savedCar })
        //         } else {
        //             context.commit({ type: 'saveCar', savedCar })
        //         }
        //     } catch (err) {
        //         console.log(err)
        //         throw err
        //     }
        // }
    },
    getters: {
        contacts(state) { return state.contacts }
    },
}