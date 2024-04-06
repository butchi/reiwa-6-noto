<script setup lang="ts">
import { useRuntimeConfig, useHead } from 'nuxt/app'
import { ref, computed, onMounted } from 'vue'
import * as GMaps from '@googlemaps/js-api-loader'

import placeJson from '@/assets/place-list.json'

interface Source {
  url: string,
  place: string,
  ttl: string,
  desc: string,
  createdAt: string,
  updateAt: string,
}

interface Place {
  pref: string,
  nameJa: string,
  shortNameJa: string,
  latLng: string,
  shindo: string,
}

const runtimeConfig = useRuntimeConfig()
const baseUrl = runtimeConfig.public?.baseUrl
const gMapApiKey = runtimeConfig.public?.gMapApiKey
const sheetUrl = runtimeConfig.public?.sheetUrl as string

const gmap = ref<HTMLElement>()

const mapOptions = {
  zoom: 9,
  center: { lat: 37.256556, lng: 136.878639 },
}

const placeArr = Object.values(placeJson)

const loading = ref<boolean>(true)

const sourceArr = ref<Source[]>([])

const source = computed(() => {
  // const getDate = (item: { date: string, createdAt: string, updateAt: string }) => {
  //   const dateStr = item.date || item.updateAt || item.createdAt || ''
  //   const dateObj = new Date(dateStr || 0)

  //   return dateObj
  // }

  // sourceArr.sort((a: { date: string, createdAt: string, updateAt: string }, b: { date: string, createdAt: string, updateAt: string }) => getDate(b).valueOf() - getDate(a).valueOf())

  return sourceArr.value
})

const curPlaceIdx = ref<number>(-1)

onMounted(async () =>{
  fetch(sheetUrl).then(async res => {
    const json = await res.json()

    sourceArr.value = json["items"]

    loading.value = false
  })

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

  const setContent = () => {
    const place = placeArr[curPlaceIdx.value]

    const itemArr = sourceArr.value.filter((s: Source) => s.place.match(place.shortNameJa) || (s.url.endsWith('.pdf') && (s.ttl.match(place.shortNameJa) || s.ttl.match(place.pref))))

    infoWindow.setContent(`
    <article>
      <h2>${ placeArr[curPlaceIdx.value].nameJa }</h2>
      ${itemArr.map((item: Source) => `
        <ul>
          <li
            class="mb-3"
            style="list-style-type: none;"
          >
            <h2 class="text-h6">
              ${item.url.endsWith('.pdf') ? '<span>[PDF]</span>' : ''}
              <a href="${item.url}">${item.ttl}</a>
            </h2>
            <p class="text-grey-darken-1">${
              item.desc.split(place.shortNameJa).join(`<b
                class="font-weight-bold"
              >${place.shortNameJa}</b>`) || item.desc
            }</p>
          </li>
        </ul>
        `).join('')}
    </article>
    `.trim())
  }

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

  const markerArr = placeArr.map((place: Place, idx: number) => {
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
      curPlaceIdx.value = idx

      setContent()

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

// const hiddenStyle = { overflow: 'visible' }
const hiddenStyle = { width: 0, height: 0, overflow: 'hidden' }

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

    <v-dialog
      v-model:model-value="loading"
      class="text-center"
      width="128"
      height="32"
      persistent
    >
      <v-row>
        <v-col>
          <v-progress-circular
            color="primary"
            indeterminate
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <span class="text-caption">ロード中</span>
        </v-col>
      </v-row>
    </v-dialog>
  </v-container>
</template>