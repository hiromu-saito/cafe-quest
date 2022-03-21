<template>
  <div class="flex flex-col items-start mx-auto mb-8">
    <img class="object-cover w-3/4 mb-2 overflow-hidden rounded-lg shadow-sm mx-h-25" src="https://cdn.devdojo.com/images/may2021/workout.jpg">
    <h2 class="text-lg font-bold sm:text-xl md:text-2xl">{{post.storeName}}</h2>
    <p class="text-md text-gray-500">{{post.impression}}</p>
    <p class="pt-2 text-xs font-medium">
        <a href="#_" class="mr-1 underline">{{post.userId}}</a> · 
        <span class="mx-1">{{post.postedDate}}</span></p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export interface Post {
  storeName: string
  impression:string
  userId :string
  postedDate:Date
}

export default defineComponent({
  name: 'CqPostCard',
  props: {
    post: {
      type: Object as PropType<Post>
    }
  }
})

</script>
