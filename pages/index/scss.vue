<template lang="pug">
div(class='py-1.5 px-3.5')
  a.text-blue-500(src='https://sass-scss-converter.netlify.app/') sass-scss-converter
  div
    h2.text-xl flex wrap between last row align left
    .flex.flex-wrap.mx-auto.w-48
      .mt-2.w-8.h-5.flex-between-last-row-align-left.bg-green-300(
        v-for='(item, index) in 7',
        :key='`flex-wrap-${index}`'
      ) {{ index + 1 }}
  .mt-8
    h2.text-xl truncate multi lines
    .m-4
      h3.text-lg .truncate-3-lines
      p.truncate-3-lines.text-base Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, repudiandae sapiente aliquam vel totam id ducimus ut labore iste illum quibusdam sit alias excepturi omnis optio quidem cupiditate. Excepturi molestias assumenda fuga dolores porro, rerum ex amet quam sequi velit sint aliquam autem exercitationem repellendus quia error soluta veritatis reiciendis laudantium. Impedit quia ullam repellat veritatis quod excepturi dolorem, rem porro, iste sapiente ex beatae illo voluptatibus, ipsa iure commodi sequi saepe in necessitatibus architecto error! Cumque veritatis autem laboriosam! Reiciendis iste nihil temporibus. Iste, architecto quia? Deleniti tempora omnis error debitis, cumque corrupti ullam repudiandae quidem maxime a laboriosam, adipisci amet facere nam impedit quod vel? Omnis, perspiciatis. Ducimus doloremque quidem illum delectus, dignissimos ipsum facere, enim sequi saepe quis quae earum modi. Obcaecati exercitationem modi officia odit recusandae, voluptatibus quae velit doloremque mollitia delectus fugit incidunt aspernatur voluptatum nemo iste minus dolor dolores est repellat quidem? Accusantium, enim? Quis itaque voluptas corporis facere alias debitis praesentium dolor nulla eos dolores necessitatibus vel voluptatem laboriosam culpa deserunt nostrum, voluptatum in cumque! Facilis amet praesentium delectus natus laborum perferendis distinctio, nesciunt consequuntur eaque, debitis itaque nam. Aut, dolores. Eos, iusto magnam provident illo est nam necessitatibus quos. Distinctio, dolor repellendus.
    .m-4
      h3.text-lg .truncate-5-lines
      p.truncate-5-lines.text-base Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, repudiandae sapiente aliquam vel totam id ducimus ut labore iste illum quibusdam sit alias excepturi omnis optio quidem cupiditate. Excepturi molestias assumenda fuga dolores porro, rerum ex amet quam sequi velit sint aliquam autem exercitationem repellendus quia error soluta veritatis reiciendis laudantium. Impedit quia ullam repellat veritatis quod excepturi dolorem, rem porro, iste sapiente ex beatae illo voluptatibus, ipsa iure commodi sequi saepe in necessitatibus architecto error! Cumque veritatis autem laboriosam! Reiciendis iste nihil temporibus. Iste, architecto quia? Deleniti tempora omnis error debitis, cumque corrupti ullam repudiandae quidem maxime a laboriosam, adipisci amet facere nam impedit quod vel? Omnis, perspiciatis. Ducimus doloremque quidem illum delectus, dignissimos ipsum facere, enim sequi saepe quis quae earum modi. Obcaecati exercitationem modi officia odit recusandae, voluptatibus quae velit doloremque mollitia delectus fugit incidunt aspernatur voluptatum nemo iste minus dolor dolores est repellat quidem? Accusantium, enim? Quis itaque voluptas corporis facere alias debitis praesentium dolor nulla eos dolores necessitatibus vel voluptatem laboriosam culpa deserunt nostrum, voluptatum in cumque! Facilis amet praesentium delectus natus laborum perferendis distinctio, nesciunt consequuntur eaque, debitis itaque nam. Aut, dolores. Eos, iusto magnam provident illo est nam necessitatibus quos. Distinctio, dolor repellendus.
</template>

<script>
  export default {
    name: 'ScssPage',
    data() {
      return {}
    },
  }
</script>

<style lang="sass" scoped>
$col-count: 5
$col-width: 2rem
.flex-between-last-row-align-left
  &:not(:nth-child(#{$col-count}n))
    margin-right: calc((100% - #{$col-width} * #{$col-count}) / (#{$col-count} - 1))

.text-shadow
  text-shadow: 0 1px 1px rgba(0,0,0,0.60)

$lines: 3, 5 // 可自行增加多個需要的行數，如 $lines: 2, 3, 4;
@each $i in $lines
  .truncate-#{$i}-lines
    display: -webkit-box
    -webkit-line-clamp: $i
    -webkit-box-orient: vertical
    overflow: hidden
</style>