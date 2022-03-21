<template>
  <section class="bg-red mx-auto max-w-3xl">
    MapPage
    <div class="map" ref="googleMap">
    </div>
  </section>
</template>

<script>
import { defineComponent, ref, onMounted} from 'vue'
import GoogleMapsApiLoader from 'google-maps-api-loader'
const apiKey = process.env.VUE_APP_GOOGLE_MAP_API_KEY

export default defineComponent({
  name: 'CqMap',
  setup(){
    //TODO ブラウザの現在位置の情報を取得する
    const mapConfig = {
      center: {
        lat: 35.68944,
        lng: 139.69167
      },
      zoom: 17
    }
    let google
    const googleMap = ref(null)

    const initializeMap = ()=>{
      new google.maps.Map(googleMap.value, mapConfig)
    }

    onMounted(async() => {
      console.log(`apiKey:${apiKey}`)
      google = await GoogleMapsApiLoader({
        apiKey: apiKey
      })
      initializeMap()
    })
    return {
      googleMap
    }
  },
})

</script>
<style scoped>
.map {
  width: 800px;
  height: 500px}
</style>