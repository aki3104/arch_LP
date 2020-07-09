<template>
  <v-row align="center" justify="center">
    <v-timeline :dense="dense">
      <v-timeline-item
        v-for="(item, index) in lineItems"
        :key="index"
        :icon="item.icon || 'mdi-star'"
      >
        <v-card max-width="600" min-height="200">
          <v-card-title class="blue lighten-2">
            <h2 class="white--text font-weight-light">
              {{ item.title }}
            </h2>
          </v-card-title>
          <v-container>
            <v-row align="center" justify="center">
              <v-col cols="12" md="9">
                {{ item.text }}
              </v-col>
              <v-col cols="6" md="3">
                <v-img :src="item.src" />
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-row>
</template>

<script>
export default {
  props: {
    lineItems: { type: Array, required: true },
    dense: Boolean,
  },
}
</script>

<style scoped>
.center {
  text-align: center;
}
.timeline {
  display: inline-block;
}
</style>
