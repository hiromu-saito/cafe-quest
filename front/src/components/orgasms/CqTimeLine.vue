<template>
  <section class="bg-red mx-auto max-w-3xl">
    <cq-post-card :post="post"></cq-post-card>
    <cq-post-card :post="post"></cq-post-card>
    <cq-post-card :post="post"></cq-post-card>
    <cq-post-card :post="post"></cq-post-card>
    <cq-post-card :post="post"></cq-post-card>
    <cq-post-card :post="post"></cq-post-card>
    <cq-post-card :post="post"></cq-post-card>
    <cq-post-card :post="post"></cq-post-card>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import CqPostCard from '../moleclues/CqPostCard.vue'

export default defineComponent({
  name: 'CqTimeLine',
  components: {
    CqPostCard
  },
  setup(){
    const post = reactive({
      storeName: '店名',
      impression: '感想',
      userId: 'userID',
      postedDate: new Date().toLocaleString('ja-JP')
    })
    return {
      post
    }
  }
})

</script>