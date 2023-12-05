<template>
    <div class="contacts-list">
        <TransitionGroup name="list" tag="ul">
            <ContactPreview v-for="contact in contacts" :key="contact" :contact="contact" />
        </TransitionGroup>
    </div>
</template>
<script>
import ContactPreview from '../cmps/ContactPreview.vue'

export default {
    props: ['contacts'],
    components: { ContactPreview },

}
</script>
<style lang="scss">
.contacts-list {
    ul {
        all: unset;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 1rem;
        max-width: 1200px;
        margin-inline: auto;
        margin-block: 1.5rem;
    }

    .list-move,
    /* apply transition to moving elements */
    .list-enter-active,
    .list-leave-active {
        transition: all 0.5s ease;
    }

    .list-enter-from,
    .list-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }

    /* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
    .list-leave-active {
        position: absolute;
    }
}
</style>