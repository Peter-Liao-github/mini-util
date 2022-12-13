<template>
  <div class="mt-2 flex flex-col items-center">
    <p class="p-2 text-green-400 bg-green-100 rounded">fixed template 001</p>
    <h1>url: {{ $route.path }}</h1>
    <p>內容: {{ showContent.content }}</p>
    <p class="p-2 bg-red-100 rounded">
      image url: <span class="text-red-400">{{ showContent.imgPath }}</span>
    </p>
  </div>
</template>

<script>
import itemsList from './DataBase'

export default {
  name: 'CustomPathContent',
  data() {
    return {
      itemsList,
    }
  },
  computed: {
    showContent() {
      return this.itemsList.find(
        (e) => e.customPath === this.$route.params.customPath
      )
    },
  },
}
</script>

<style></style>
