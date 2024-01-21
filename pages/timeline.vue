<script setup lang="ts">
import { useAsyncData, useRuntimeConfig, useHead } from 'nuxt/app'
import { ref } from 'vue'

const runtimeConfig = useRuntimeConfig()
const baseUrl = runtimeConfig.public?.baseUrl

const { data: sourceData } = await useAsyncData('sheet', () =>
  queryContent('sheet').findOne()
)

const sourceBody = sourceData.value?.body as Array ?? []

const dispatchArr = sourceBody.map(item => {
  const { url, ttl, desc, time } = item
  const date = item.date || item['update-date']

  const eventType = "dispatch"

  const fileType = url.endsWith(".pdf") ? "pdf" : "web"

  return ({
    eventType,
    url,
    ttl,
    desc,
    date,
    time,
    fileType,
  })
}).filter(item => new Date(item.date).valueOf() >= new Date("2024-01-01").valueOf())

const firstMilliSec = Math.min(...dispatchArr.map(item => new Date(item.date + " " + item.time).valueOf()))

const latestMilliSec = Math.max(...dispatchArr.map(item => new Date(item.date + " " + item.time).valueOf()))

const totalMilliSec = latestMilliSec - firstMilliSec

const totalDayLen = Math.ceil(totalMilliSec / 1000 / 60 / 60 / 24)

const dateEventArr = (new Array(totalDayLen)).fill(0).map((_, i) => {
  const eventType = "pass"

  const date = new Date(new Date("2024-01-01").valueOf() + i * 24 * 60 * 60 * 1000).toISOString().replaceAll(/T.+/g, "")

  const time = "00:00"

  return {
    eventType,
    date,
    time,
  }
})

const itemArr = dateEventArr.concat(dispatchArr)

itemArr.sort((a, b) => {
  const getDateTime = (d: string, t) => new Date(d + " " + (t || "23:59")).valueOf()

  return getDateTime(a.date, a.time) - getDateTime(b.date, b.time)
}).reverse()

const title = "SPW防災サイト"
const siteName = "SPW防災サイト"
const description = "主に防災に関する公式発表へのリンクを掲載する一次情報まとめサイトです。"
const ogImg = "ogp.png"

useHead({
    title,
    meta: [
        { property: "title", content: title },
        { property: "description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: siteName },
        { property: "og:image", content: `${baseUrl}${ogImg}` },
        { property: "og:url", content: baseUrl },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@spw_bousai" },
        { name: "twitter:creator", content: "@spw_bousai" },
    ],
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col class="pt-8">
        <h2>タイムライン</h2>
        <v-timeline side="end">
          <v-timeline-item
            v-for="(item, idx) in itemArr"
            :key="idx"
            :size="item.eventType === 'pass' ? 11 : 31"
            :dot-color="item.eventType === 'pass' ? 'red' : 'grey'"
          >
            <template #opposite>
              <div
                v-if="item.eventType === 'pass'"
                class="d-flex align-center"
              >
                {{ item.date.split("-").map((numStr: string, i: number) => parseInt(numStr) + "年月日"[i]).join("").replaceAll("2024年", "") }}
              </div>

              <div
                v-if="item.eventType === 'dispatch'"
                class="d-flex align-center"
              >
                <span
                  v-if="item.time"
                >{{ item.time }}</span>
              </div>
            </template>

            <div
              v-if="item.eventType === 'dispatch'"
            >
              <v-row>
                <v-col>
                  <a :href="item.url">{{ item.ttl }}
                    <v-icon
                      v-if="item.fileType === 'pdf'"
                      color="red"
                    >mdi-file-pdf-box</v-icon>
                    <v-icon
                      v-else
                      color="grey"
                    >mdi-web-box</v-icon>
                  </a>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  {{ item.desc.slice(0, 150) }}{{ item.desc.length > 150 ? "…" : "" }}
                </v-col>
              </v-row>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>