<script setup lang="ts">
import { useRuntimeConfig, useState } from 'nuxt/app'
import { ref } from 'vue'

import logoImg from "@/assets/logo.png"
import logoXImg from "@/assets/logo-x-black.svg"

const runtimeConfig = useRuntimeConfig()
const baseUrl = runtimeConfig.public?.baseUrl

const dialog = ref(false)

const drawerArr = [
  {
    to: "/",
    icon: "mdi-home",
    title: "Home",
  },
  {
    to: "/about/",
    icon: "mdi-information",
    title: "このサイトについて",
  },
  {
    to: "/credit/",
    icon: "mdi-account",
    title: "制作メンバー",
  },
  {
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdYFLmBW40iJdHh1SrjWzB0Ys9sQp1Q0qwUO3IJDkABSPUp7g/viewform?usp=sf_link",
    icon: "mdi-mail",
    title: "お問い合わせ",
  },
]

const drawer = useState("drawer", () => false)

const title = 'SPW防災サイト'
</script>

<template>
  <v-app>
    <v-app-bar
      color="warning"
      fixed
      app
    >
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title>
        <nuxt-link
          to="/"
          :style="{'text-decoration': 'inherit', 'color': 'inherit'}"
        >
          <v-avatar size="small">
            <v-img :src="logoImg" />
          </v-avatar>
          SPW防災サイト
        </nuxt-link>
      </v-toolbar-title>
      <template #append>
        <v-btn
          icon
          flat
          href="https://x.com/spw_bousai"
        >
          <v-img
            contain
            width="25"
            height="25"
            :src="logoXImg"
          />
        </v-btn>
        <v-btn
          icon
          flat
          @click="dialog = true"
        >
          <v-avatar
            rounded="0"
          >
            <v-img
              contain
              src="/hp-qr-code.png"
            />
          </v-avatar>
        </v-btn>
      </template>
    </v-app-bar>
    <client-only>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        :style="{ 'position': 'fixed' }"
      >
        <v-list>
          <v-list-item
            v-for="item in drawerArr"
            :key="item.title"
            :to="item.to"
            :href="item.href"
            :prepend-icon="item.icon"
            :title="item.title"
            :disabled="!item.to && !item.href"
          />
        </v-list>
      </v-navigation-drawer>
    </client-only>
    <v-main>
      <slot />
    </v-main>
    <v-footer
      class="bg-grey-darken-4"
      :style="{ 'max-height': '45px' }"
    >
      &copy; SPW
    </v-footer>

    <v-dialog v-model="dialog">
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

        <p>
          <a
            class="twitter-share-button"
            :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(baseUrl)}&hashtags=${encodeURIComponent('SPW防災')}`"
          >
            Xでシェア
          </a>
        </p>
      </v-sheet>
    </v-dialog>
  </v-app>
</template>
