<template>
    <div class="contact-edit-page">
        <a @click="$router.go(-1)" class="btn">
            <font-awesome-icon class="arrow vue-color" title="Go back to contacts page" icon="fa-solid fa-arrow-left" />
        </a>
        <form v-on:submit.prevent="onSaveContact" v-if="contact">
            <label for="name-input">
                Name
                <input v-model="contact.name" type="text" id="name-input">
            </label>
            <label for="phone-input">
                Phone Number
                <input v-model="contact.phone" type="text" id="phone-input" required>
            </label>
            <label for="email-input">
                Email
                <input v-model="contact.email" type="email" id="email-input" required>
            </label>
            <div class="btn-container">
                <button v-if="contactId" @click="onRemoveContact" class="icon remove btn" title="Delete contact">
                    <font-awesome-icon icon="fa-solid fa-trash" />
                </button>
                <button @click="onSaveContact" type="submit" class="save btn" title="Save contact">
                    <font-awesome-icon icon="icon fa-solid fa-floppy-disk" />
                </button>
            </div>
        </form>

    </div>
</template>
<script>
import { contactService } from '../services/contactService';

export default {
    data() {
        return {
            contact: null
        }
    },
    methods: {
        async onRemoveContact() {
            try {
                await contactService.deleteContact(this.contactId)
                this.$router.push('/contact')
            } catch (err) {
                console.log('Could not delete contact at this time.')
            }
        },
        async onSaveContact() {
            try {
                await contactService.saveContact(this.contact)
                this.$router.push(`/contact/${this.contact._id}`)

            } catch (err) {
                console.log('Could not save contact at this time.')
            }

        }
    },
    computed: {
        contactId() {
            return this.$route.params._id
        }
    },
    async created() {
        if (!!this.contactId) {
            this.contact = await contactService.getContactById(this.contactId)
        } else {
            this.contact = contactService.getEmptyContact()
        }
    }
}
</script>
<style lang="scss" scoped>
.contact-edit-page {
    display: flex;
    flex-direction: column;

    .btn {
        margin-inline: auto;
    }

    form {
        display: grid;
        place-items: center;
        gap: 1rem;

        label {
            display: flex;
            flex-direction: column;
            font-size: 1.2rem;

            input {
                all: unset;
                background-color: black;
                padding: 5px;
                border-radius: 0.5rem;
                color: #41B883;
            }
        }

        .btn-container {
            display: flex;
            gap: 1rem;
        }
    }
}
</style>