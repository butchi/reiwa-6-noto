<script setup lang="ts">
import { useRuntimeConfig, useHead } from "nuxt/app"

const runtimeConfig = useRuntimeConfig()
const baseUrl = runtimeConfig.public?.baseUrl

const title = "サイトについて"
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
        <h2 class="text-h5 mb-3">
          SPW防災サイトについて
        </h2>

        <p>このサイトは主に防災に関する公式発表へのリンクを掲載する一次情報まとめサイトです。</p>

        <p>個人の有志によって運営されています。</p>

        <p>本プロジェクトはオープンソースです。</p>

        <p class="mt-3">
          <v-btn
            href="https://github.com/butchi/reiwa-6-noto"
            color="primary"
          >
            <v-icon
              size="x-large"
              class="mr-3"
            >
              mdi-github
            </v-icon>
            本サイトのリポジトリ
          </v-btn>
        </p>
        <p class="mt-3">
          <v-btn
            href="https://github.com/butchi/reiwa-6-noto-crawler"
            color="primary"
          >
            <v-icon
              size="x-large"
              class="mr-3"
            >
              mdi-github
            </v-icon>
            クローラーのリポジトリ
          </v-btn>
        </p>


        <h3 class="mt-5">
          連絡先
        </h3>

        <p>
          お問い合わせ・要望等はXの
          <a :href="`https://twitter.com/intent/tweet?hashtags=${encodeURIComponent('SPW防災')}`">#SPW防災</a>
          ハッシュタグ、
          <a href="https://x.com/spw_bousai">公式Xアカウント</a>
          へのDM、または
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdYFLmBW40iJdHh1SrjWzB0Ys9sQp1Q0qwUO3IJDkABSPUp7g/viewform?usp=sf_link">お問い合わせフォーム</a>
          までお願いします。
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>
