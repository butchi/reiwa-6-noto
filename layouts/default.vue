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
      <v-toolbar-title>災害一次情報まとめサイト</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
    <v-footer class="bg-grey-darken-4">
      &copy; IWABUCHI Yu(u)ki butchi
    </v-footer>
  </v-app>
</template>
