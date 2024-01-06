<script setup lang="ts">
import { useRuntimeConfig, useHead } from "nuxt/app"
import { useAsyncData } from 'nuxt/app'
import { ref } from 'vue'

import logoImg from "@/assets/logo.png"

const runtimeConfig = useRuntimeConfig()
const baseUrl = runtimeConfig.public?.baseUrl

const { data: channelData } = await useAsyncData('channel-list', () =>
    queryContent('channel-list').findOne()
)

const { data: sourceData } = await useAsyncData('sheet', () =>
    queryContent('sheet').findOne()
)

const { data: avatarData } = await useAsyncData('avatar-list', () =>
    queryContent('avatar-list').findOne()
)

const avatarBody = avatarData.value?.body as Array ?? []
const channelBody = channelData.value?.body as Array ?? []
const sourceBody = sourceData.value?.body as Array ?? []

const avatarLi = Object.fromEntries(avatarBody.map(item => [item.avatar, item]))

const linkArr = channelBody

linkArr.forEach(linkItem => {
  linkItem.childArr = sourceBody.filter(item => item['site'] === linkItem['site']).reverse()

  linkItem.childArr.forEach(child => {
    const type = child.url.endsWith(".pdf") ? 'pdf' : 'web'
    const slug = child.avatar || type

    child.type = type
    child.avatarObj = avatarLi[slug]
  })
})

const dialog = ref(false)

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
        <v-sheet
          elevation="12"
          max-width="600"
          rounded="lg"
          width="100%"
          class="pa-3 text-center mx-auto"
        >
          <h2 class="text-h5 mb-1">
            SPW防災サイト
          </h2>
          <p class="text-h6 mb-1">
            情報随時更新中
          </p>

          <v-row class="mb-1">
            <v-col>
              <v-avatar
                size="x-large"
                class="mr-5"
              >
                <v-img :src="logoImg" />
              </v-avatar>

              <v-btn
                icon
                flat
                size="xlarge"
                rounded="0"
                href="/hp-qr-code.png"
                target="_blank"
              >
                <v-avatar
                  size="x-large"
                  rounded="0"
                >
                  <v-img src="/hp-qr-code.png" />
                </v-avatar>
              </v-btn>
            </v-col>
          </v-row>

          <p class="mb-1 text-medium-emphasis text-body-2">
            令和6年能登半島地震に関する一次情報（主に政府発表資料）をまとめたサイトです。リアルタイム更新中なので今後大幅に内容が変わる可能性があります。
          </p>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mb-15">
        <v-card>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="(linkItem, idx) in linkArr"
              :key="idx"
            >
              <v-expansion-panel-title>
                <v-list
                  class="bg-transparent"
                  lines="three"
                >
                  <v-list-item
                    class="pa-0"
                    :title="linkItem.ttl"
                    :subtitle="linkItem.desc"
                  >
                    <template #prepend>
                      <v-avatar
                        class="mt-3"
                        :color="linkItem['avatar-bg']"
                      >
                        <v-icon :color="linkItem['avatar-color']">
                          {{ linkItem['avatar-icon'] }}
                        </v-icon>
                      </v-avatar>
                    </template>
                    <template #title>
                      <h3 class="text-h6 mb-1">
                        {{ linkItem.ttl }}
                      </h3>
                    </template>
                  </v-list-item>
                </v-list>
              </v-expansion-panel-title>
              <client-only>
                <v-expansion-panel-text>
                  <v-list
                    class="px-0"
                    lines="three"
                  >
                    <v-list-item
                      class="px-0"
                    >
                      <template #title>
                        <v-icon
                          size="small"
                          color="grey"
                          class="mr-1"
                        >
                          {{ linkItem['avatar-icon'] }}
                        </v-icon>
                        <a
                          v-if="linkItem.url"
                          :href="linkItem.url"
                          :style="{ 'white-space': 'normal' }"
                        >{{ linkItem.ttl }}</a>
                        <span
                          v-else
                          :style="{ 'white-space': 'normal' }"
                        >{{ linkItem.ttl }}</span>
                      </template>
                      <template #default>
                        <p class="mt-3">
                          {{ linkItem.desc }}
                        </p>
                      </template>
                    </v-list-item>
                    <v-list-item
                      v-for="(childItem, childIdx) in linkItem.childArr"
                      :key="childIdx"
                      class="px-0"
                    >
                      <template #prepend>
                        <v-avatar :color="childItem.avatarObj.bg">
                          <v-icon :color="childItem.avatarObj.color">
                            {{ childItem.avatarObj.icon }}
                          </v-icon>
                        </v-avatar>
                      </template>
                      <template #title>
                        <a
                          v-if="childItem.url"
                          :href="childItem.url"
                          :style="{ 'white-space': 'normal' }"
                        >{{ childItem.ttl }}</a>
                        <span
                          v-else
                          :style="{ 'white-space': 'normal' }"
                        >{{ childItem.ttl }}</span>
                      </template>
                      <template #subtitle>
                        <p class="mt-3">
                          {{ childItem.desc }}
                        </p>
                      </template>
                    </v-list-item>
                  </v-list>
                </v-expansion-panel-text>
              </client-only>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
    </v-row>
    <client-only>
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <v-card title="あなたは…">
          <v-card-text>
            <v-row>
              <v-col md="4">
                <v-btn
                  class="w-100"
                  size="x-large"
                  color="error"
                >
                  被災者
                </v-btn>
              </v-col>
              <v-col md="4">
                <v-btn
                  class="w-100"
                  size="x-large"
                  color="accent"
                >
                  対策中
                </v-btn>
              </v-col>
              <v-col md="4">
                <v-btn
                  class="w-100"
                  size="x-large"
                  color="primary"
                >
                  支援者
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="text-center">
                状況に合わせて遷移します
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-spacer />

            <v-btn
              text="閉じる"
              color="primary"
              @click="dialog = false"
            />
          </v-card-actions>
        </v-card>
      </v-dialog>
    </client-only>
  </v-container>
</template>
