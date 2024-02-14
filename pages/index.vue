<script setup lang="ts">
import { useRuntimeConfig, useHead } from 'nuxt/app'
import { ref, onMounted } from 'vue'
// TODO: 型がうまく読み込めてないのを直す
import { Loader } from '@googlemaps/js-api-loader'

import placeJson from '@/assets/place-list.json'

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

const sheetUrl = "https://script.google.com/macros/s/AKfycbyX8HQch6pAu7rPVvK_qdVkB9iy-p7TsCV7N_4jnTUeBgKVh5LskFBR29kWL4Ukatm4/exec"

const sourceRes = await fetch(sheetUrl)

const sourceJson = await sourceRes.json()

const sourceArr = sourceJson["items"]

const getDate = (item: { date: string, "update-date": string }) => {
  const dateStr = item.date || item['update-date'] || ''
  const dateObj = new Date(dateStr)

  return dateObj
}

sourceArr.sort((a: { date: string, "update-date": string }, b: { date: string, "update-date": string }) => getDate(b).valueOf() - getDate(a).valueOf())


const placeArr = Object.values(placeJson)

const pickTxt = (str: string, word: string) => {
  const pos = str.indexOf(word) - 125

  const startPos = Math.max(pos, 0)

  const prependTxt = pos > 0 ? '…' : ''
  const appendTxt = str.length > startPos + 150 ? '…' : ''

  return prependTxt + str.slice(startPos, startPos + 150) + appendTxt
}

onMounted(()=>{
  loader
  .load()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .then((google: { maps: any }) => {
    const map = new google.maps.Map(gmap.value, mapOptions)

    const infoWindow = new google.maps.InfoWindow({
      content: '',
    })

    placeArr.forEach((place: { nameJa: string, latLng: string, shindo: string }, idx: number) => {
      const { latLng } = place
      const [lat, lng] = latLng.split(',')
      const position = new google.maps.LatLng(lat, lng)

      const fillColor =
        place.shindo === '7' ? 'rgb(255, 0, 0)'
      : place.shindo === '6強' ? 'rgb(255, 0, 0)'
      : place.shindo === '6弱' ? 'rgb(255, 0, 0)'
      : place.shindo === '5強' ? 'rgb(255, 180, 0)'
      : 'rgb(255, 255, 0)'

      const marker = new google.maps.Marker({
        title: place.nameJa,
        position,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor,
          fillOpacity: 0.5,
          strokeWeight: 0,
          scale: 13,
        },
        label: {
          text: 'location_city',
          color: 'black',
          fontFamily: 'Material Icons',
          fontSize: '16px',
        },
      })

      marker.addListener('click', () => {
        infoWindow.setContent(`
        <article>
          <h2>${ place.nameJa }</h2>
          <ul>${ info.value[idx].innerHTML }</ul>
        </article>
        `.trim())

        infoWindow.open({
          anchor: marker,
          map,
        })
      })

      marker.setMap(map)

      return marker
    })

    map.addListener('click', () => {
      infoWindow.close()
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
  <v-container
    class="ma-0 pa-0 fill-height"
    :style="{ 'max-width': '100%' }"
  >
    <v-row
      class="ma-0 pa-0 fill-height"
      :style="{ 'max-width': '100%' }"
    >
      <div
        ref="gmap"
        class="w-100 ma-0 pa-0 fill-height"
        :style="{ 'max-width': '100%' }"
      />
    </v-row>

    <div
      :style="{ width: 0, height: 0, overflow: 'hidden' }"
    >
      <v-col
        class="mb-15"
        :style="{ width: 0, height: 0, overflow: 'hidden' }"
      >
        <v-card
          v-for="(place, placeIdx) in placeArr"
          :key="placeIdx"
          class="mt-3"
        >
          <v-card-title>{{ place.nameJa }}</v-card-title>
          <v-card-text>
            <div ref="info">
              <ul
                v-for="(item, srcIdx) in sourceArr.filter(s => [s.ttl, s.desc].join('').match(place.shortNameJa))"
                :key="srcIdx"
              >
                <li
                  class="mb-3"
                  :style="{ 'list-style-type': 'none' }"
                >
                  <h2 class="text-h6">
                    <a :href="item.url">{{ item.ttl }}</a>
                  </h2>
                  <p>{{ item.desc.slice(0, 45) }}{{ item.desc.length > 45 ? '…' : '' }}</p>
                  <p class="text-grey-darken-1">
                    <span
                      v-for="(txt, txtIdx) in pickTxt(item.desc, place.shortNameJa).split(place.shortNameJa)"
                      :key="txtIdx"
                    >
                      <b
                        v-if="txtIdx > 0"
                        class="font-weight-bold"
                      > {{ place.shortNameJa }}</b>
                      {{ txt }}
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </div>
  </v-container>
</template>