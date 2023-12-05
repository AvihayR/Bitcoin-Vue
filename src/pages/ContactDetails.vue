<template>
    <main class="contact-details-page">
        <img v-if="!contact" class="loader" src="../assets/img/puff.svg" alt="Loading..">
        <div v-else class="contact-details">
            <div class="name-container">
                <h1 class="person-name" title="Contact's name">{{ contactName }}</h1>
                <button v-bind:disabled="currFunds <= 0" @click="showModal" class="btn transfer">Transfer
                    Bitcoins💸</button>
                <router-link to="/contact">
                    <font-awesome-icon class="arrow vue-color" title="Go back to contacts page"
                        icon="fa-solid fa-arrow-left" />
                </router-link>
            </div>

            <img v-bind:src="getLoadingImg()" class="loading-img" alt="Loading.." ref="loading" />
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
        <TransactionList v-if="transactions?.length" v-bind:transactions="transactions" />
        <h2 v-else class="no-transactions">No transactions was made to this user yet 😉</h2>
    </main>

    <Modal v-show="isModalVisible" @close="closeModal">
        <template v-slot:header>
            Transfer ₿
        </template>

        <template v-slot:body>
            <form v-on:submit.prevent="onTransferFunds">
                <label for="amount">
                    <input v-model="amountToTransfer" v-bind:max="currFunds" type="number" required>
                </label>
                <button class="vue-color btn-send">Transfer</button>
            </form>
            <h2 class="balance">Your current balance: {{ currFunds }}<span class="vue-color">₿</span> </h2>
        </template>
    </Modal>
</template>
<script>
import loadingSvg from "../assets/img/puff.svg"
import Modal from "../cmps/Modal.vue"
import TransactionList from "../cmps/TransactionList.vue"
import { contactService } from '../services/contactService'
import { userService } from "../services/userService"

export default {
    data() {
        return {
            contact: null,
            isModalVisible: false,
            amountToTransfer: 0
        }
    },
    components: {
        Modal,
        TransactionList
    },
    methods: {
        defaultImg(e) {
            e.target.src = loadingSvg
        },
        onLoadImg(e) {
            this.$refs.loading.classList.add('hidden')
        },
        getLoadingImg() {
            return loadingSvg
        },
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
        async onTransferFunds() {
            try {
                this.$store.dispatch({ type: 'transferFunds', contactId: this.contactId, amount: this.amountToTransfer })
                // await userService.transferFunds(this.contactId, this.amountToTransfer)
            } catch (err) {
                console.log(err)
            } finally {
                this.closeModal()
            }
        }
    },
    computed: {
        contactId() {
            return this.$route.params._id
        },
        contactName() {
            return this.contact?.name
        },
        currFunds() {
            return this.$store.getters.loggedUser?.balance
        },
        transactions() {
            return this.$store.getters.transactions?.filter(transaction => transaction.toId === this.contactId)
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

    .loading-img {
        margin-inline: 2rem;
        width: 5rem;
        height: 5rem;
    }

    .arrow {
        font-size: 2rem;
    }


    .name-container {
        display: grid;
        place-items: center;

        .btn {
            &.transfer {

                color: gray;
                border: 1px solid gray;
                padding: .5rem;
                border-radius: .5rem;

                &:hover {
                    background-color: black;
                    color: #41B883;
                    border-color: #41B883;
                }

                &:disabled {
                    cursor: not-allowed;
                }
            }
        }
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


    @media (max-width: 550px) {
        table {
            margin-inline: 1rem;
        }

        .name-container {
            display: flex;
            flex-direction: column-reverse;
        }

        .contact-details {
            display: grid;
        }

        .more-details {
            flex-direction: row-reverse;
            gap: 1rem;
            margin-block-start: 1rem;
        }

        h2.no-transactions {
            font-size: 1rem;
            font-weight: 700;
        }
    }
}
</style>