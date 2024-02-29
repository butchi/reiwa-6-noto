<script setup lang="ts">
import { useRuntimeConfig, useHead } from 'nuxt/app'
import { ref, onMounted } from 'vue'
import * as GMaps from '@googlemaps/js-api-loader'

import placeJson from '@/assets/place-list.json'

const runtimeConfig = useRuntimeConfig()
const baseUrl = runtimeConfig.public?.baseUrl
const gMapApiKey = runtimeConfig.public?.gMapApiKey
const sheetUrl = runtimeConfig.public?.sheetUrl as string

const gmap = ref<HTMLElement>()
const info = ref<HTMLElement[]>([])

const mapOptions = {
  zoom: 9,
  center: { lat: 37.256556, lng: 136.878639 },
}

const sourceRes = await fetch(sheetUrl)

const sourceJson = await sourceRes.json()

const sourceArr = sourceJson["items"]

// const getDate = (item: { date: string, createdAt: string, updateAt: string }) => {
//   const dateStr = item.date || item.updateAt || item.createdAt || ''
//   const dateObj = new Date(dateStr || 0)

//   return dateObj
// }

// sourceArr.sort((a: { date: string, createdAt: string, updateAt: string }, b: { date: string, createdAt: string, updateAt: string }) => getDate(b).valueOf() - getDate(a).valueOf())


const placeArr = Object.values(placeJson)

onMounted(async () =>{
  const { Loader } = GMaps

  const loader = new Loader({
    apiKey: gMapApiKey,
    version: 'weekly',
    libraries: ['places'],
  })

  const { Map, InfoWindow } = await loader.importLibrary('maps')
  const { Point, SymbolPath, LatLng } = await loader.importLibrary("core")
  const { Marker } = await loader.importLibrary("marker")

  if (gmap.value == null) return 

  const map = new Map(gmap.value, mapOptions)

  const infoWindow = new InfoWindow({
    content: '',
  })

  const getIcon = (idx: number, zoomLevel: number = 0) => {
    const place = placeArr[idx]

    const fillColor =
      place.shindo === '7' ? 'rgb(255, 0, 0)'
    : place.shindo === '6強' ? 'rgb(255, 0, 0)'
    : place.shindo === '6弱' ? 'rgb(255, 0, 0)'
    : place.shindo === '5強' ? 'rgb(255, 180, 0)'
    : 'rgb(255, 255, 0)'

    const offset = zoomLevel <= 11 ? -0.88 : 0

    const anchor = new Point(0, offset)

    return {
      path: SymbolPath.CIRCLE,
      fillColor,
      fillOpacity: 0.5,
      strokeWeight: 0,
      scale: 13,
      anchor,
    }
  }

  const markerArr = placeArr.map((place: { nameJa: string, latLng: string, shindo: string }, idx: number) => {
    const { latLng } = place
    const [lat, lng] = latLng.split(',').map(str => parseFloat(str))

    const position = new LatLng(lat, lng)

    const icon = getIcon(idx, map.getZoom())

    const marker = new Marker({
      title: place.nameJa,
      position,
      map,
      icon,
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

  map.addListener('zoom_changed', function() {
    markerArr.forEach((marker, idx) => {
      const icon = getIcon(idx, map.getZoom())

      marker.setIcon(icon)
    })
  });

  map.addListener('click', () => {
    infoWindow.close()
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
                v-for="(item, srcIdx) in sourceArr.filter((s: any) => s.place.match(place.shortNameJa) || (s.url.endsWith('.pdf') && (s.ttl.match(place.shortNameJa) || s.ttl.match(place.pref))))"
                :key="srcIdx"
              >
                <li
                  class="mb-3"
                  :style="{ 'list-style-type': 'none' }"
                >
                  <h2 class="text-h6">
                    <v-icon
                      v-if="item.url.endsWith('.pdf')"
                      color="red"
                    >
                      mdi-file-pdf-box
                    </v-icon>
                    <v-icon
                      v-else
                      color="grey"
                    >
                      mdi-web-box
                    </v-icon>
                    <a :href="item.url">{{ item.ttl }}</a>
                  </h2>
                  <p class="text-grey-darken-1">
                    <span
                      v-for="(txt, txtIdx) in item.desc.split(place.shortNameJa)"
                      :key="txtIdx"
                    >
                      <b
                        v-if="txtIdx > 0"
                        class="font-weight-bold"
                      > {{ place.shortNameJa }}</b>{{ txt }}
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