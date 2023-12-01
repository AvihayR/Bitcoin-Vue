<template>
    <div class="contacts-list">
        <ContactPreview v-for="contact in contacts" :contact="contact" />
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
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 1rem;
    max-width: 1200px;
    margin-inline: auto;
    margin-block: 1.5rem;
}
</style>