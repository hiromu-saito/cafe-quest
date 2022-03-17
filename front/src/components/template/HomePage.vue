<template>
  <div>
      <nav>
        <CqHeader/>
      </nav>
      <main>
        <router-view/>
      </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CqHeader from '../moleclues/CqHeader.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    CqHeader
  },
})

</script>