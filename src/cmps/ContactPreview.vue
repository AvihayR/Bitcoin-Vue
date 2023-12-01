<template>
    <div class="contact-card">
        <div class="icons-container">
            <h3><font-awesome-icon icon="fa-solid fa-person" /></h3>
            <h4><font-awesome-icon icon="fa-solid fa-mobile-screen" /></h4>
            <h5><font-awesome-icon icon="fa-solid fa-at" /></h5>
        </div>
        <hr>
        <div class="details-container">
            <h3>{{ contact.name }}</h3>
            <h4>{{ contact.phone }}</h4>
            <h5> {{ contact.email }}</h5>
        </div>

        <font-awesome-icon class="arrow" icon="fa-solid fa-arrow-right" />
    </div>
</template>
<script>
export default {
    props: ['contact'],
}
</script>
<style lang="scss">
.contact-card {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background-color: #0f0f0f;
    border-radius: 1rem;
    margin-bottom: .5rem;
    cursor: pointer;

    &:hover {

        .arrow {
            opacity: 1;
            margin-inline-start: 3.5rem;
        }
    }

    .arrow {
        opacity: 0;
        align-self: center;
        font-size: 1.5rem;
        color: #41B883;
        transition: opacity 0.4s;
        transition: margin 0.4s;
    }

    .details-container {
        display: grid;
        gap: .5rem;
        font-size: 1.1rem;
    }

    .icons-container {
        display: grid;
        gap: .5rem;
        font-size: 1.2rem;
    }
}
</style>