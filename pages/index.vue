<template lang="pug">
.relative.w-screen.h-screen
  .content.absolute.inset-0.m-auto.w-20.h-50
    router-link.text-xl.text-green-500.bg-green-200(class='py-1.5 px-2.5', to='/js') JS
    router-link.text-xl.text-green-500.bg-green-200(class='py-1.5 px-2.5', to='/scss') SCSS
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'IndexPage',
  })
</script>


