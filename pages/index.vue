<script setup lang="ts">
import { useHead } from "nuxt/app"
import { useAsyncData } from 'nuxt/app'
import { ref } from 'vue'

const runtimeConfig = useRuntimeConfig()
const baseUrl = runtimeConfig.public?.baseUrl

const { data } = await useAsyncData('sheet', () =>
    queryContent('sheet').findOne()
)

const body = data.value?.body as Array ?? []

const linkArr = body.filter(item => item['source-idx'] === '')

linkArr.forEach(linkItem => {
  linkItem.childArr = body.filter(item => item['site'] === linkItem['site'] && parseInt(item['source-idx']) > 0).reverse()
})

const dialog = ref(false)

const title = "SPW防災サイト"
const siteName = "SPW防災サイト"
const description = "主に防災に関する一次情報をポストしていきます。"
const ogImg = "ogp.png"

useHead({
    title: title + " | " + siteName,
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
          <p class="text-h6 mb-3">
            情報随時更新中
          </p>

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
              v-for="linkItem in linkArr"
              :key="linkItem['source-idx']"
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
                      <a
                        v-if="linkItem.url"
                        :href="linkItem.url"
                        target="_blank"
                      >{{ linkItem.ttl }}</a>
                      <span v-else>{{ linkItem.ttl }}</span>
                    </template>
                  </v-list-item>
                </v-list>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-list
                  class="pa-0"
                  lines="three"
                >
                  <v-list-item
                    v-for="childItem in linkItem.childArr"
                    :key="childItem['source-idx']"
                    :title="childItem.ttl"
                    :subtitle="childItem.desc"
                    class="pa-0"
                  >
                    <template #prepend>
                      <v-avatar :color="childItem['avatar-bg']">
                        <v-icon :color="childItem['avatar-color']">
                          {{ childItem['avatar-icon'] }}
                        </v-icon>
                      </v-avatar>
                    </template>
                    <template #title>
                      <a
                        v-if="childItem.url"
                        :href="childItem.url"
                        target="_blank"
                      >{{ childItem.ttl }}</a>
                      <span v-else>{{ childItem.ttl }}</span>
                    </template>
                  </v-list-item>
                </v-list>
              </v-expansion-panel-text>
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
