<template>
  <div class="w-screen h-screen bg-gray-200">
    <div class="px-8 xl:px-56 h-full flex flex-col justify-center gap-5">
      <vue-typed-js class="font-bold text-3xl xl:text-5xl flex justify-center mb-10" :startDelay="0"
 :strings="['Hello, i am Alfin :D']" :typeSpeed="100">
        <h1 class="typing"></h1>
      </vue-typed-js>
      <div class="w-full grid grid-cols-1 xl:grid-cols-3 text-center gap-2">
        <a target="_blank" class="flex items-center justify-center px-5 py-2 border-2 border-black rounded" href="https://portfolio-tw.vercel.app/"><i class="las la-address-card"></i> Portfolio</a>
        <a target="_blank" class="flex items-center justify-center px-5 py-2 border-2 border-black rounded" href="https://www.linkedin.com/in/alfinry/"><i class="text-3xl lab la-linkedin"></i> Linkedin</a>
        <a target="_blank" class="flex items-center justify-center px-5 py-2 border-2 border-black rounded" href="https://github.com/AlfinRy"><i class="text-3xl lab la-github"></i> Github</a>
        <a target="_blank" class="flex items-center justify-center px-5 py-2 border-2 border-black rounded" href="https://instagram.com/alfinry_"><i class="text-3xl lab la-instagram"></i> Instagram</a>
      </div>
    </div>
    <div class="w-screen h-12 flex justify-center items-center fixed bottom-0">
      <span>Made with <button @click="start">❤</button></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    start(){
      this.$confetti.start({
  particles: [
    {
      type: 'heart',
    }
  ],
  defaultColors: [
    'red',
    'pink',
    '#ba0000',
  ],
});
      setTimeout(() => {
        this.$confetti.stop();
      }, 3000)
    },
  }
}
</script>
