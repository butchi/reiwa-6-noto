<script setup lang="ts">
import { ref } from 'vue';

const { data } = await useAsyncData('sheet', () =>
    queryContent('sheet').findOne()
)

const body = data.value?.body as Array ?? []

const linkArr = body.filter(item => item['source-idx'] === '')

linkArr.forEach(linkItem => {
  linkItem.childArr = body.filter(item => item['site'] === linkItem['site'] && parseInt(item['source-idx']) > 0).reverse()
})

const dialog = ref(false)
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
          <h2 class="text-h5 mb-6">
            情報随時更新中
          </h2>

          <p class="mb-1 text-medium-emphasis text-body-2">
            令和6年能登半島地震に関する一次情報（主に政府発表資料）をまとめたサイトです。リアルタイム更新中なので今後大幅に内容が変わる可能性があります。
          </p>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="linkItem in linkArr"
              :key="linkItem.slug"
            >
              <v-expansion-panel-title>
                <v-list
                  class="bg-transparent"
                  lines="three"
                >
                  <v-list-item
                    :title="linkItem.title"
                    :subtitle="linkItem.subtitle"
                  >
                    <template #prepend>
                      <v-avatar :color="linkItem.avatar.background">
                        <v-icon :color="linkItem.avatar.color">{{ linkItem.avatar.icon }}</v-icon>
                      </v-avatar>
                    </template>
                    <template #title>
                      <a :href="linkItem.href" target="_blank">{{ linkItem.title }}</a>
                    </template>
                  </v-list-item>
                </v-list>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-list
                  lines="three"
                >
                  <v-list-item
                    v-for="(childItem, idx) in linkItem.children"
                    :key="idx"
                    :title="childItem.title"
                    :subtitle="childItem.subtitle"
                  >
                    <template #prepend>
                      <v-avatar :color="childItem.avatar.background">
                        <v-icon :color="childItem.avatar.color">
                          {{ childItem.avatar.icon }}
                        </v-icon>
                      </v-avatar>
                    </template>
                    <template #title>
                      <a :href="childItem.href" target="_blank">{{ childItem.title }}</a>
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
