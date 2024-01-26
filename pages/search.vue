<script setup lang="ts">
import { useAsyncData, useRuntimeConfig, useHead } from 'nuxt/app'
import { ref } from 'vue'

const runtimeConfig = useRuntimeConfig()
const baseUrl = runtimeConfig.public?.baseUrl

const { data: sourceData } = await useAsyncData('sheet', () =>
  // eslint-disable-next-line no-undef
  queryContent('sheet').findOne()
)

const sourceBody = sourceData.value?.body ?? []

const sourceArr = sourceBody as { url: string, ttl: string, desc: string, date: string, 'update-date': string }[]

const itemArr = sourceArr.map(item => {
  const { url, ttl, desc } = item
  const dateStr = item.date || item['update-date']
  const date = dateStr == null ? '' : new Date(dateStr).toLocaleDateString()

  return {
    url,
    ttl,
    desc,
    date,
  }
})

const search = ref("")

const itemsPerPage = ref(15)

const sortBy = [{
  key: "date",
  order: "desc",
}]

const headerArr = [{
  title: "記事名",
  key: "ttl",
}, {
  title: "日付",
  key: "date",
}, {
  title: "概要",
  key: "desc",
}]


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
      <v-col>
        <v-card>
          <v-card-title>情報検索</v-card-title>
          <v-spacer />
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          />
          <v-card-text>
            <v-data-table
              v-model:items-per-page="itemsPerPage"
              :headers="headerArr"
              :items="itemArr"
              :search="search"
              :sort-by.sync="sortBy"
              items-per-page-text="表示件数"
              class="elevation-1"
            >
              <template #item.ttl="{ item }">
                <a :href="item.url">{{ item.ttl }}</a>
              </template>
              <template #item.date="{ item }">
                {{ item.date }}
              </template>
              <template #item.desc="{ item }">
                {{ item.desc.slice(0, 150) }}
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>