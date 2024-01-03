<script setup lang="ts">
import { useState } from "nuxt/app"

const drawer = useState("drawer", () => false)
</script>

<template>
  <v-app>
    <v-app-bar
      fixed
      app
    >
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      />
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
    <v-footer />
  </v-app>
</template>
