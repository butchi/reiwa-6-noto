<script setup lang="ts">
import { useState } from "nuxt/app"

import logoXImg from "@/assets/logo-x-black.svg"

const drawerArr = [
    {
        to: "/",
        icon: "mdi-home",
        title: "Home",
    },
    {
        // to: "/about/",
        icon: "mdi-information",
        title: "このサイトについて",
    },
    {
        // to: "/credit/",
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
      <v-toolbar-title>🏠 Home</v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        flat
      >
        <v-img
          contain
          width="25"
          height="25"
          :src="logoXImg"
        />
      </v-btn>
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
    </v-app-bar>
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
    <v-main>
      <slot />
    </v-main>
    <v-footer class="bg-grey-darken-4">
      &copy; IWABUCHI Yu(u)ki butchi
    </v-footer>
  </v-app>
</template>
