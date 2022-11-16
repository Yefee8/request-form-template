<template>
  <div class="mt-4">
    <Header />
    
    <div class="mt-24 md:mt-32 flex flex-col gap-y-12 md:gap-y-24">
      <h1 class="text-2xl md:text-5xl w-7/12 font-medium">
        login
      </h1>
    
        <div class="whitespace-nowrap w-full">
            <div class="first flex relative">
                    <div div class="flex flex-col lg:flex-row gap-y-36 lg:gap-y-0 absolute 
                          lg:gap-x-24 lg:w-2/3">
                            <SlidyInput placeholder="email" />

                            <SlidyInput placeholder="password" />
                    </div>
            </div>
        </div>

        <div class="transition duration-200 flex flex-col gap-y-12 md:gap-y-16 
        mt-12 md:mt-0">
        <button class="mt-12 md:mt-16 transition duration-200 bg-primary 
        hover:bg-primary-dark focus:ring-2 focus:bg-primary-dark ring-primary 
        cursor-pointer text-white px-4 w-64 md:w-96 h-16 rounded 
        outline-none border-0 flex justify-center 
        items-center
        "
        style="font-size:30px;"
        >
        login
      </button>

      <span>you don't have an account? <NuxtLink to="/register" href="/register" class="text-primary-light">register</NuxtLink> then!</span>
    </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    head() {
    return {
      title: 'request form - login',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'login to request-form!'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'request-form yefee request form form-request sending request with form yefee8 login'
        }
      ]
    }
  }
}
</script>

<style scoped>
.slide-enter{
  transform: translateX(-10vw);
  opacity: 0;
  transition: 750ms;
}
.slide-enter-to{
  transform: translateX(0);
  opacity: 1;
  transition: 750ms;
}

.slide-leave-from{
    transform: translateX(0);
    opacity: 1;
    transition: 500ms;
}

.slide-leave-to{
    transform: translateX(10vw);
    opacity: 0;
    transition: 500ms;
}

.fade-enter{
  transform: translateX(-10vw);
  opacity: 0;
  transition: 750ms;
}
.fade-enter-to{
  transform: translateX(0);
  opacity: 1;
  transition: 750ms;
}

.fade-leave-from{
    transform: translateX(0);
    opacity: 1;
    transition: 500ms;
}

.fade-leave-to{
    transform: translateX(10vw);
    opacity: 0;
    transition: 500ms;
}
</style>  