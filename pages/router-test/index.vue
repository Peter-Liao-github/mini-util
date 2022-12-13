<template>
  <div class="mt-2 flex flex-col items-center">
    <h1>auto dynamic router generate</h1>
    <nuxt-link
      v-for="item in list"
      :key="item.id"
      class="block p-2 my-1 text-blue-400 bg-blue-100 rounded"
      :to="{
        name: 'router-test-customPath',
        params: { customPath: item.customPath },
      }"
    >
      name: {{ item.customPath }}
    </nuxt-link>
  </div>
</template>

<script>
import list from './DataBase'

export default {
  data() {
    return {
      list,
    }
  },
}
</script>

<style></style>
