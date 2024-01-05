<script setup lang="ts">
import { useRuntimeConfig, useHead } from "nuxt/app"
import { useAsyncData } from 'nuxt/app'
import { ref } from 'vue'

const runtimeConfig = useRuntimeConfig()
const baseUrl = runtimeConfig.public?.baseUrl

const title = "クレジット"
const siteName = "SPW防災サイト"
const description = "主に防災に関する公式発表へのリンクを掲載する一次情報まとめサイトです。"
const ogImg = "ogp.png"

useHead({
    title: title + " | " + siteName,
    meta: [
        { property: "title", content: title + " | " + siteName },
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
        <h2 class="text-h5 mb-3">
          クレジット
        </h2>

        <p>
          企画・制作: 岩淵夕希物智
          <a
            href="https://x.com/butchi_y"
            target="_blank"
          >@butchi_y</a>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>
