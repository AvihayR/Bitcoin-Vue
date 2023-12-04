<template>
    <main class="contact-details-page">
        <img v-if="!contact" class="loader" src="../assets/img/puff.svg" alt="Loading..">
        <div v-else class="contact-details">
            <h1 class="person-name" title="Contact's name">{{ contactName }}</h1>
            <img v-bind:src="getLoadingImg()" alt="Loading.." ref="loading" />
            <img v-bind:src="contactImg" @error="defaultImg" @load="onLoadImg" alt="Contact's image"
                title="Contact's image" />
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
                <router-link :to="editUrl" class="btn" title="Edit contact">
                    <font-awesome-icon icon="icon fa-solid fa-pen" />
                </router-link>

            </div>
        </div>
        <router-link to="/contact">
            <font-awesome-icon class="arrow vue-color" title="Go back to contacts page" icon="fa-solid fa-arrow-left" />
        </router-link>
    </main>
</template>
<script>
import loadingSvg from "../assets/img/puff.svg"
import { contactService } from '../services/contactService'

export default {
    data() {
        return {
            contact: null,
        }
    },
    methods: {
        defaultImg(e) {
            e.target.src = loadingSvg
        },
        onLoadImg(e) {
            console.log(this.$refs.loading.classList.add('hidden'))
        },
        getLoadingImg() {
            return loadingSvg
        }
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
        },
        editUrl() {
            return `/contact/edit/${this.contact._id}`
        },
    },
    async created() {
        this.contact = await contactService.getContactById(this.contactId)
    },
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
        flex-direction: column;
        align-items: center;
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

    .hidden {
        display: none;
    }
}
</style>