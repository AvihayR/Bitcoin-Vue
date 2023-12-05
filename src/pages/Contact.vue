<template>
    <main class="contact-page">
        <img v-if="!contacts?.length" src="../assets/img/puff.svg" alt="Loading contacts..">
        <ContactFilter v-on:search="onFilterBy" />
        <router-link class="btn add" to="/contact/edit">Add a new contact</router-link>
        <ContactList v-bind:contacts="contacts" />
    </main>
</template>
<script>
import ContactFilter from '../cmps/ContactFilter.vue'
import ContactList from '../cmps/ContactList.vue'
import ContactPreview from '../cmps/ContactPreview.vue'
import { contactService } from '../services/contactService'

export default {
    data() {
        return {
        }
    },
    components: { ContactFilter, ContactList, ContactPreview },
    methods: {
        async onFilterBy(filterBy) {
            // this.contacts = await contactService.getContacts({ term: filterBy })
            this.$store.dispatch({ type: 'setFilterBy', filterBy })
        }
    },
    computed: {
        contacts() {
            return this.$store.getters.contacts
        },
    },
    async created() {
        try {
            this.$store.dispatch({ type: 'loadContacts' })
        } catch (err) {
            console.log('Could not load contacts')
        }
    },

}
</script>
<style lang="scss" scoped>
.contact-page {
    margin-block-start: 3rem;
    margin-inline: 1rem;

    .btn {
        &.add {
            display: flex;
            justify-content: center;
        }
    }
}
</style>