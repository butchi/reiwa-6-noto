<script setup lang="ts">
import { useState } from "nuxt/app"

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
      <v-toolbar-title>令和6年能登半島地震 一次情報まとめサイト</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
    <v-footer />
  </v-app>
</template>