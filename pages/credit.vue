<script setup lang="ts">
import { useRuntimeConfig, useHead } from "nuxt/app"

import logoXImg from "@/assets/logo-x-black.svg"
import butchiYThumbImg from "@/assets/butchi-y-thumb.jpg"
import shikiThumbImg from "@/assets/shiki-thumb.jpg"
import bigbenThumbImg from "@/assets/bigben-thumb.jpg"

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
        <h2 class="text-h5 mt-5 mb-3">
          クレジット
        </h2>

        <v-card
          class="mb-5"
          max-width="800"
        >
          <v-list lines="two">
            <v-list-item
              subtitle="代表・開発"
              title="岩淵夕希物智"
            >
              <template #prepend>
                <v-avatar>
                  <v-img :src="butchiYThumbImg" />
                </v-avatar>
              </template>

              <template #append>
                <v-btn
                  icon
                  flat
                  href="https://x.com/butchi_y"
                >
                  <v-img
                    contain
                    width="25"
                    height="25"
                    :src="logoXImg"
                  />
                </v-btn>
              </template>
            </v-list-item>
            <v-list-item
              subtitle="サポートメンバー"
              title="Shiki"
            >
              <template #prepend>
                <v-avatar>
                  <v-img :src="shikiThumbImg" />
                </v-avatar>
              </template>

              <template #append>
                <v-btn
                  icon
                  flat
                  href="https://x.com/sciencecafe_mc2"
                >
                  <v-img
                    contain
                    width="25"
                    height="25"
                    :src="logoXImg"
                  />
                </v-btn>
              </template>
            </v-list-item>

            <v-list-item
              subtitle="サポートメンバー"
              title="bigben"
            >
              <template #prepend>
                <v-avatar>
                  <v-img :src="bigbenThumbImg" />
                </v-avatar>
              </template>

              <template #append>
                <v-btn
                  icon
                  flat
                  href="https://x.com/bigbenbigben"
                >
                  <v-img
                    contain
                    width="25"
                    height="25"
                    :src="logoXImg"
                  />
                </v-btn>
              </template>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
