<template>
        <div :class="`bg-primary fixed top-0 left-0 flex items-center flex-col transition duration-300 w-16
             ${isOpen && 'w-1/6' || 'w-16'}
        `" 
        style="height: 100vh; transition: 300ms;">
            <div class="flex justify-end w-full">
                <img src="../components/static/back.svg" @click="isOpen = !isOpen" :class="`mt-2 mr-2 h-12 w-12 
                cursor-pointer hidden md:flex com rounded-full transition duration-300 
                ${!isOpen && 'rotate-180' || ''} transform-gpu`"
                alt="request-form">
            </div>
            
            <Transition name="fade">
                <h1 v-if="isOpen" @click="formComponents = !formComponents" class="half-component opener font-bold text-center cursor-pointer">
                    request-form components {{ formComponents && '-' || '+' }}
                </h1>
            </Transition>

            <Transition name="fade"> 
                <div v-if="formComponents">
                <Transition name="fade">
                    <h1 @click="createComponent('input')" class="com half-component" v-if="isOpen">
                        input
                    </h1>
                </Transition>
            
                <Transition name="fade">
                    <h1 @click="createComponent('button')" class="com half-component" v-if="isOpen">
                        button
                    </h1>
                </Transition>
                
                <Transition name="fade">       
                    <h1 @click="createComponent('checkbox')" class="com half-component" v-if="isOpen">
                        checkbox
                    </h1>
                </Transition>
                <Transition name="fade">
                    <h1 @click="createComponent('dropdown')" class="com half-component" v-if="isOpen">
                        dropdown
                    </h1>
                </Transition>
            </div>
            </Transition> 
            
        </div>
</template>

<script>
export default{
  name: 'IndexPage',
  props: ['components'],
  data(){
    return{
        isOpen: true,
        componentList: [],
        formComponents:true
    }
  },

  methods: {
    createComponent(componentName){
        if(componentName === 'input'){
            console.log(this.componentList.length)
            this.componentList.push({
                component:'SlidyInput',
                count:this.componentList.length
            });
            this.$emit('components', this.componentList);
        }
    }
  }
}
</script>

<style>
h1.com{ 
    @apply md:text-lg lg:text-xl px-1 py-1 md:px-4 md:py-2 rounded cursor-pointer transition duration-200 font-bold text-center;
}
.opener{
    @apply text-sm;
}
@media screen and (max-width: 600px){
    h1.com{
        font-size: 10px;
    }
    .opener{
        font-size:7.5px;
    }
}

.com:hover{
    background: #fafafa30;
}

.fade-enter{
  opacity: 0;
  transition: 300ms;
}
.fade-enter-to{
  opacity: 1;
  transition: 300ms;
}

.fade-leave-from{
    opacity: 1;
    transition: 300ms;
}

.fade-leave-to{
    opacity: 0;
    transition: 300ms;
}
</style>