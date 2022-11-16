<template>
  <div class="mt-4">
    <Header />

    <div class="mt-24 md:mt-32 flex flex-col gap-y-12 md:gap-y-24">
      <h1 class="text-2xl md:text-5xl w-7/12 mb-12 font-medium">
        register
      </h1>

      <div class="whitespace-nowrap w-full">
        <Transition :name="side">
          <div class="third flex absolute" v-if="this.registerNumber === 4">
            <div class="flex flex-col w-1/3 lg:flex-row gap-y-36 lg:gap-y-0  
                      lg:gap-x-24 lg:w-2/3">
              <h1 class="text-lg md:text-2xl w-full">You're done, we're redirecting you in<br>
                <span class="text-5xl text-primary">
                  {{ countDown }}
                </span>
                <br>
                seconds.
              </h1>
            </div>
          </div>
        </Transition>

        <Transition :name="side">
          <div class="first flex relative" v-if="registerNumber === 0">
            <div div class="flex flex-col lg:flex-row gap-y-36 lg:gap-y-0 absolute 
                          lg:gap-x-24 lg:w-2/3">
              
              <div class="w-64 md:w-96">
                <SlidyInput placeholder="username" />
              </div>

              <div class="w-64 md:w-96">
                <SlidyInput placeholder="email" />
              </div>
            </div>
          </div>~
        </Transition>

        <Transition :name="side">
          <div class="first flex relative" v-if="registerNumber === 1">
            <div div class="flex flex-col lg:flex-row gap-y-36 lg:gap-y-0 absolute 
                          lg:gap-x-24 lg:w-2/3">
              <div class="w-64 md:w-96">
                  <SlidyInput placeholder="password" />
              </div>

              <div class="w-64 md:w-96">
                <SlidyInput placeholder="again" />
              </div>
            </div>
          </div>
        </Transition>

        <Transition :name="side">
          <div v-if="this.registerNumber === 2" style="height: 0px !important">
            <h1 style="height: 0px !important" class="text-lg md:text-2xl w-64 md:w-96 lg:w-full">
              we're have to check your e-mail,<br>
              we're sending a code to your email.</h1>
          </div>
        </Transition>

        <Transition :name="side">
          <div class="third flex" v-if="this.registerNumber === 3">
            <div class="flex flex-col lg:flex-row gap-y-36 lg:gap-y-0 absolute lg:gap-x-24 w-64 md:w-96">
              <SlidyInput placeholder="code" />
            </div>
          </div>
        </Transition>
      </div>

      <Transition name="fade">
        <div v-if="registerNumber < 4" :class="`transition duration-200 flex flex-col gap-y-12 md:gap-y-16 mt-6 md:mt-12`">
          <button class="transition duration-200 bg-primary 
        hover:bg-primary-dark focus:ring-2 focus:bg-primary-dark ring-primary 
        cursor-pointer text-white px-4 w-64 md:w-96 h-16 rounded 
        outline-none border-0 flex justify-center 
        items-center
        " v-if="registerNumber < 4" @click="changeRegisterNum(registerNumber + 1)" style="font-size:30px;">
            {{ registerNumber < 2 && 'next' || '' }} {{ registerNumber === 2 && 'send the mail' || '' }} {{
                registerNumber > 2 && 'verify' || ''
            }}
          </button>

          <div class="flex gap-x-2 justify-center w-64 md:w-96">
            <div
              :class="`w-3 h-3 rounded-full cursor-pointer transition duration-200 ${registerNumber === index && 'bg-primary' || 'bg-white'}`"
              @click="changeRegisterNum(index)" v-for="(key, index) in 4" :key="key" />
          </div>

          <span>you already have an account? <NuxtLink to="/login" href="/login" class="text-primary-light">login
            </NuxtLink> then!</span>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      registerNumber: 0,
      countDown: 10,
      side: 'right'
    }
  },
  methods: {
    changeRegisterNum(num) {
      if (num < this.registerNumber) {
        this.side = 'left';
      }
      else if (this.side === 'left') {
        this.side = 'right'
      }
      this.registerNumber = num;
    }
  },
  created() {
    this.$watch('registerNumber', () => {
      if (this.registerNumber === 4 && this.countDown !== 0) {

        const cInterval = setInterval(() => {
          this.countDown--;
        }, 1000)

        setTimeout(() => {
          clearInterval(cInterval);
          this.$router.push('/')
        }, 10000)

      }
    })
  },
  head() {
    return {
      title: 'request form - register',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'sign up for request-form!'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'request-form yefee request form form-request sending request with form yefee8 register sign up signup sign-up'
        }
      ]
    }
  }
}
</script>

<style scoped>
.right-enter {
  transform: translateX(-10vw);
  opacity: 0;
  transition: 750ms;
}

.right-enter-to {
  transform: translateX(0);
  opacity: 1;
  transition: 750ms;
}

.right-leave-from {
  transform: translateX(0);
  opacity: 1;
  transition: 500ms;
}

.right-leave-to {
  transform: translateX(10vw);
  opacity: 0;
  transition: 500ms;
}

.left-enter {
  transform: translateX(10vw);
  opacity: 0;
  transition: 750ms;
}

.left-enter-to {
  transform: translateX(0);
  opacity: 1;
  transition: 750ms;
}

.left-leave-from {
  transform: translateX(0);
  opacity: 1;
  transition: 500ms;
}

.left-leave-to {
  transform: translateX(-10vw);
  opacity: 0;
  transition: 500ms;
}

.fade-enter {
  transform: translateX(-10vw);
  opacity: 0;
  transition: 750ms;
}

.fade-enter-to {
  transform: translateX(0);
  opacity: 1;
  transition: 750ms;
}

.fade-leave-from {
  transform: translateX(0);
  opacity: 1;
  transition: 500ms;
}

.fade-leave-to {
  transform: translateX(10vw);
  opacity: 0;
  transition: 500ms;
}
</style>  