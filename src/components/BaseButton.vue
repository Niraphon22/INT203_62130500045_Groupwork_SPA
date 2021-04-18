<template>
    <button @click="buttonClick" class="ml-4 py-2 px-4 font-medium rounded-md transition ease-in duration-100 hover:bg-yellow-600 hover:text-white" 
    :class="[buttonColor, textColor]" 
    :type="buttonType"> 
    <slot>{{ buttonLabel }} </slot>
    </button>
</template>

<script>
export default {
    props: ['buttonLabel','buttonColor','textColor','buttonType'],

    emits: ['btn-click'],

    methods: {
        buttonClick(){
            this.$emit('btn-click', {
                buttonLabel: this.buttonLabel
            })
        }
    }
}
</script>