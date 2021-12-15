<template lang="pug">
div(class='py-1.5 px-3.5')
  h1.text-2xl js test
  h2.text-xl time format
  .m-4
    p.text-base any date format 2 YYYY-M-D || YYYY-MM-DD
    p.text-base => {{ dateFormat(new Date()) }}
</template>

<script>
  import { dateFormat } from '@/utils/timeFormat'

  export default {
    name: 'JsPage',
    data() {
      return {}
    },
    methods: {
      dateFormat,
    },
  }
</script>