<script setup lang="ts">
import { useRuntimeConfig, useHead } from "nuxt/app"
import { useAsyncData } from 'nuxt/app'
import { ref } from 'vue'

const runtimeConfig = useRuntimeConfig()
const baseUrl = runtimeConfig.public?.baseUrl

const title = "サイトについて"
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
          SPW防災サイトについて
        </h2>

        <p>このサイトは主に防災に関する公式発表へのリンクを掲載する一次情報まとめサイトです。</p>

        <p>個人の有志によって運営されています。</p>

        <v-btn
          class="mr-5"
          icon
          flat
          href="https://github.com/butchi/reiwa-6-noto"
          target="_blank"
        >
          <v-avatar>
            <v-icon size="x-large">
              mdi-github
            </v-icon>
          </v-avatar>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
