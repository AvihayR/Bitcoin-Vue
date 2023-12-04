<template>
    <main class="contact-page">
        <img v-if="!contacts.length" src="../assets/img/puff.svg" alt="" srcset="">
        <ContactFilter v-on:search="onFilterBy" />
        <router-link class="btn add" to="/contact/edit">Add a new contact</router-link>
        <ContactList :contacts="contacts" />
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
            contacts: [],
        }
    },
    components: { ContactFilter, ContactList, ContactPreview },
    methods: {
        async onFilterBy(filterBy) {
            this.contacts = await contactService.getContacts({ term: filterBy })
        }
    },
    computed: {},
    async created() {
        this.contacts = await contactService.getContacts()
    }

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