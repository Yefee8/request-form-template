<template>
    <div class="relative flex flex-col w-full text-white justify-center rounded group bg-secondary" :style="style">
        <input type="text" class="top-0 left-0 transition duration-200 
        h-16 outline-none border-0 bg-transparent w-full px-4"
        style="font-size:30px"
        v-model="inputValue"
        autocomplete="off"
        ref="slidyinput"
        @focus="val = ''" @focusout="val = placeholder">
        <span :class="`absolute ml-4`" 
        :style="{transform: `translateY(${val === '' && '-4rem' || inputValue === '' && '0rem'})`,
        transition: '400ms',
        fontSize:`30px`,
        color: ''}"
        @click="focusToInput" 
        >{{placeholder}}</span>
    </div>
</template>

<script>
    export default{
        props:["placeholder"],
        data(){
            return{
                val: '',
                inputValue: ''
            }
        },
        created(){
            this.val = this.placeholder
        },
        methods:{
            focusToInput(){
                this.$refs.slidyinput.focus();
            }
        },
        mounted(){
            if(window.innerWidth <= 768){
                this.textHeight = 15
            }
            else{
                this.textHeight = 30
            }
        }
    }
</script>

<style scoped>
.fade-enter{
  opacity: 0;
  transition: 200ms;
}
.fade-enter-to{
  opacity: 1;
  transition: 200ms;
}

.fade-leave-from{
    opacity: 1;
    transition: 200ms;
}

.fade-leave-to{
    opacity: 0;
    transition: 200ms;
}
</style>
