<template>
    <transition name="modal-fade">
        <div class="modal-backdrop">
            <div class="modal">
                <header class="modal-header">
                    <slot name="header">
                        This is the default title!
                    </slot>
                    <button type="button" class="vue-color btn-close" @click="close">
                        x
                    </button>
                </header>

                <section class="modal-body">
                    <slot name="body">
                        This is the default body!
                    </slot>
                </section>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'Modal',
    methods: {
        close() {
            this.$emit('close');
        },
    },
};
</script>
<style lang="scss">
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.754);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background: #2b2b2b;
    position: relative;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    padding-inline: 1rem;
}

.modal-header {
    margin: 0;
    padding-block: .5rem;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}


.modal-footer {
    flex-direction: column;
    justify-content: flex-end;
}

.modal-body {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
        display: flex;
        align-items: center;
        gap: 1rem;

        input {
            all: unset;
            background-color: #171717;
            font-size: 1.5rem;
            margin-block: 1rem;
            color: #41B883;
            padding-inline-start: .5rem;
        }
    }
}

.btn-close {
    position: absolute;
    right: 0;
    top: 0;
    margin: 0;
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
    font-weight: bold;
    background: transparent;
}

.btn-send {
    all: unset;
    padding: 0.5rem 1rem;
    line-height: 1;
    font-size: 1.5rem;
    border: 1px solid #41B883;
    border-radius: 2px;
    cursor: pointer;

    &:hover {
        background-color: #41B883;
        color: #2b2b2b;
    }
}

.balance {
    margin-block: 1rem;
}

.modal-fade-enter,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity .5s ease;
}
</style>