<template>
  <section class="bg-red mx-auto max-w-3xl">
    <div class="h-12 text-center flex justify-around">
      <a href=""
        class="hover:underline"
        @click.prevent="searchFromCurrentPosition()">
          現在地周辺から探す
      </a>
      <a href=""
        @click.prevent="searchFromAddress()"
        class="hover:underline">
          家の近くから探す
      </a>
    </div>
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
    let google
    const googleMap = ref(null)
    const mapConfig = {
      center: {
        lat: 0,
        lng: 0
      },
      zoom: 17
    }

    const initializeMap = (lat, lng)=>{
      mapConfig.center.lat = lat
      mapConfig.center.lng = lng
      const map = new google.maps.Map(googleMap.value, mapConfig)

      new google.maps.Marker({
        position: mapConfig.center,
        map: map
      })
    }

    onMounted(() => searchFromCurrentPosition())

    const searchFromCurrentPosition = () => {
      navigator.geolocation.getCurrentPosition(async pos => {
        const lat = pos.coords.latitude
        const lag = pos.coords.longitude
        google = await GoogleMapsApiLoader({
          apiKey: apiKey
        })
        initializeMap(lat, lag)
      }, err => {
        console.log(`get current position err:${err.message}`)
        alert('位置情報の取得に失敗しました。\nブラウザの設定から位置情報へのアクセスを許可してください。')
      })
    }

    const searchFromAddress = () =>{
      //TODO APIからの取得値を使う
      const addressLat = 35.64818
      const addressLag = 139.748775
      initializeMap(addressLat, addressLag)
    }

    return {
      googleMap,
      searchFromCurrentPosition,
      searchFromAddress
    }
  },
})

</script>
<style scoped>
.map {
  width: 800px;
  height: 500px}
</style>