<script setup lang="ts">
import { ref } from 'vue';

const dialog = ref(true)
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <h2>一次情報まとめサイト</h2>
          </v-card-title>
          <v-card-actions>
            <v-btn
              color="accent"
              variant="elevated"
              href="/"
            >
              More
            </v-btn>
          </v-card-actions>
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
                  size="x-large"
                  color="error"
                >
                  被災者
                </v-btn>
              </v-col>
              <v-col md="4">
                <v-btn
                  size="x-large"
                  color="accent"
                >
                  対策中
                </v-btn>
              </v-col>
              <v-col md="4">
                <v-btn
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
