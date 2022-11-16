<template>
  <div>
    <div class="relative h-full mt-4 top-0 left-0">
      <Header />

      <div class="flex flex-col lg:flex-row justify-between">
        <div class="flex justify-between w-screen items-center flex-row">
          <div class="component title">
            <a href="https://github.com/Yefee8" class="cursor-pointer text-primary-light">
              request-form
            </a>
            makes you easy to creating form with sending request to your backend!
          </div>
        </div>
      </div>

      <NuxtLink to="/register">
        <button class="px-8 py-4 font-medium text-white hover:bg-primary-dark transition duration-200 text-lg
      md:text-xl bg-primary border-0 rounded-lg half-component">
          Get Started
        </button>
      </NuxtLink>

      <div class="mt-36 md:mt-48 text-2xl font-thin gap-x-2 items-center flex">
        scroll down <img src="../static/arrow-down.svg" class="w-4">
      </div>
    </div>

    <div style="position: relative; top: 35vh; width: 100%;">
      <div class="bg-darker py-4">
        <div class="text-3xl font-semibold items-center flex">
          FAQ
        </div>

        <div class="mt-12 md:mt-16">
          <div class="font-semibold text-2xl">
            what is request-form?
          </div>

          <div class="mt-3 md:mt-6 font-thin text-xl mr-4 md:mr-0">
            > request-form is a form builder that makes you easy to creating form with sending request to your backend.
          </div>
        </div>

        <div class="mt-24">
          <div class="font-semibold text-2xl">
            why request-form?
          </div>

          <div class="mt-3 md:mt-6 font-thin text-xl mr-4 md:mr-0">
            > because request-form easy to use and it makes easier to create form with sending request to your backend.
          </div>
        </div>

        <div class="mt-24">
          <div class="font-semibold text-2xl">
            is it free?
          </div>

          <div class="mt-3 md:mt-6 font-thin text-xl mr-4 md:mx-0">
            > yes, request-form is totally free.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  head() {
    return {
      title: 'request form - made by @Yefee8',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'request form makes you easy to creating form with sending request to your backend!'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'request-form yefee request form form-request sending request with form yefee8'
        }
      ]
    }
  }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
@import url("../components/global.css");

body {
  overflow-x:hidden;
  @apply bg-dark text-white;
  font-family: Poppins;
}

::-webkit-scrollbar {
  width: 0.5rem;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-white;
}
</style>
