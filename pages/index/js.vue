<template lang="pug">
div(class='py-1.5 px-3.5')
  div
    h2.text-xl date
    h3.text-lg format
    .m-4
      p.text-base format 2 YYYY-M-D || YYYY-MM-DD
      p.text-base #[code dateFormat(new Date())]
      p.text-base #[code => {{ dateFormat(new Date()) }}]
  .mt-8
    h2.text-xl array
    h3.text-lg unique element
    .m-4
      p.text-base #[code arrayUniq({{ arg1 }})]
      p.text-base #[code => {{ argUniqExample }}]
</template>

<script>
  import { dateFormat } from '@/utils/timeFormat'
  import { arrayUniq } from '@/utils/array'

  export default {
    name: 'JsPage',
    data() {
      return {
        arg1: [1, 1, 2, 3, 3, 3],
      }
    },
    computed: {
      argUniqExample: ({ arg1 }) => arrayUniq(arg1),
    },
    methods: {
      dateFormat,
      arrayUniq,
    },
  }
</script>