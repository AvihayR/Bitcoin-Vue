<template>
    <main class="contact-details-page">
        <img v-if="!contact" class="loader" src="../assets/img/puff.svg" alt="Loading..">
        <div v-else class="contact-details">
            <h1 class="person-name" title="Contact's name">{{ contactName }}</h1>
            <img v-bind:src="contactImg" alt="Contact's image" title="Contact's image" />
            <div class="more-details">
                <div class="icons-container">
                    <h4 title="Contact's phone number">
                        <font-awesome-icon class="vue-color" icon="fa-solid fa-mobile-screen" />
                        {{ contact.phone }}
                    </h4>
                    <h5 title="Contact's Email Address">
                        <font-awesome-icon class="vue-color" icon="fa-solid fa-at" />
                        {{ contact.email }}
                    </h5>
                    <small title="Contact's saved ID">
                        <span class="vue-color">ID:</span>
                        {{ contact._id }}
                    </small>
                </div>
            </div>
        </div>
        <router-link to="/contact">
            <font-awesome-icon class="arrow vue-color" title="Go back to contacts page" icon="fa-solid fa-arrow-left" />
        </router-link>
    </main>
</template>
<script>
import { contactService } from '../services/contactService'

export default {
    data() {
        return {
            contact: null
        }
    },
    async created() {
        this.contact = await contactService.getContactById(this.contactId)
    },
    computed: {
        contactId() {
            return this.$route.params._id
        },
        contactName() {
            return this.contact?.name
        },
        contactImg() {
            return `https://robohash.org/${this.contactName}?set=set5`
        }
    }
}
</script>
<style lang="scss">
.contact-details-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;

    .arrow {
        font-size: 2rem;
    }

    .contact-details {
        display: flex;
        align-items: center;
        margin-inline: 1rem;
    }

    .person-name {
        text-align: center;
        color: #41B883;
    }

    .more-details {
        display: flex;
        justify-content: center;

        .icons-container {
            display: grid;

            &>* {
                text-align: center;
                display: flex;
                align-items: center;
                gap: 1rem;
            }
        }
    }

    .loader {
        width: 100px;
    }
}
</style>