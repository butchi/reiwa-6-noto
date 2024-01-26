<script setup lang="ts">
import { useRuntimeConfig, useHead, useAsyncData } from 'nuxt/app'
import { ref, onMounted } from 'vue'
import { Loader } from '@googlemaps/js-api-loader'

const runtimeConfig = useRuntimeConfig()
const baseUrl = runtimeConfig.public?.baseUrl

const gmap = ref<HTMLElement>()
const info = ref<HTMLElement[]>([])

const loader = new Loader({
  apiKey: 'AIzaSyCGaJBNEJQnodJB5dK71dcvZjVXFPiP-Zg',
  version: 'weekly',
  libraries: ['places'],
});

const mapOptions = {
  zoom: 9,
  center: { lat: 37.256556, lng: 136.878639 },
}

const { data: placeData } = await useAsyncData('place-list', () =>
  queryContent('place-list').findOne()
)

const placeBody = placeData.value?.body ?? []

const placeArr = placeBody as { nameJa: string, shortNameJa: string, latLng: string, shindo: string }[]

onMounted(()=>{
  loader
  .load()
  .then(google => {
    const map = new google.maps.Map(gmap.value, mapOptions)

    placeArr.forEach((place: { nameJa: string, latLng: string, shindo: string }, idx: number) => {
      const { latLng } = place
      const [lat, lng] = latLng.split(',')
      const position = new google.maps.LatLng(lat, lng)

      const strokeColor =
        place.shindo === '7' ? 'rgb(255, 0, 0)'
      : place.shindo === '6強' ? 'rgb(255, 60, 0)'
      : place.shindo === '6弱' ? 'rgb(255, 120, 0)'
      : place.shindo === '5強' ? 'rgb(255, 180, 0)'
      : 'rgb(255, 255, 0)'

      const marker = new google.maps.Marker({
        title: place.nameJa,
        position,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: 'yellow',
          fillOpacity: 0.5,
          strokeColor,
          strokeWeight: 3,
          scale: 13,
        },
        label: {
          text: 'location_city',
          color: 'black',
          fontFamily: 'Material Icons',
          fontSize: '18px',
        },
      })

      marker.setMap(map)

      return marker
    })
  })
  .catch((e:Error) => {
    console.log(e)
  })
})

const title = 'SPW防災サイト'
const siteName = 'SPW防災サイト'
const description = '主に防災に関する公式発表へのリンクを掲載する一次情報まとめサイトです。'
const ogImg = 'ogp.png'

useHead({
    title,
    meta: [
        { property: 'title', content: title },
        { property: 'description', content: description },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: siteName },
        { property: 'og:image', content: `${baseUrl}${ogImg}` },
        { property: 'og:url', content: baseUrl },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@spw_bousai' },
        { name: 'twitter:creator', content: '@spw_bousai' },

    ],
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>情報マップ</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div
          ref="gmap"
          :style="{ width: '100%', height: '720px' }"
        />
      </v-col>
    </v-row>
  </v-container>
</template>