<template lang="pug">
.relative.w-screen.h-screen
  .content.mt-4.mx-auto.w-max
    NuxtLink.inline-block.w-28.h-10.text-xl.text-center.text-green-500.bg-green-200.rounded.border.border-gray-500(
      v-for='(link, index) in links',
      :key='`link-${index}`',
      class='mx-2.5 py-1.5 px-2.5',
      :to='link.to'
    ) {{ link.name }}
  NuxtChild
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'IndexPage',
    data() {
      return {
        links: [
          {
            name: 'JS',
            to: '/js',
          },
          {
            name: 'SCSS',
            to: '/scss',
          },
        ],
      }
    },
  })
</script>

<style lang="sass" scoped>
*
  @apply box-border
</style>
