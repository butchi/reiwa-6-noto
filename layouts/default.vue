<script setup lang="ts">
import { useState } from "nuxt/app"

import logoImg from "@/assets/logo.png"
import logoXImg from "@/assets/logo-x-black.svg"

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
]

const drawer = useState("drawer", () => false)
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
          SPW防災
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        flat
        href="https://x.com/spw_bousai"
        target="_blank"
      >
        <v-img
          contain
          width="25"
          height="25"
          :src="logoXImg"
        />
      </v-btn>
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
            :prepend-icon="item.icon"
            :title="item.title"
            :disabled="!item.to"
          />
        </v-list>
      </v-navigation-drawer>
    </client-only>
    <v-main>
      <slot />
    </v-main>
    <v-footer class="bg-grey-darken-4">
      &copy; SPW
    </v-footer>
  </v-app>
</template>
