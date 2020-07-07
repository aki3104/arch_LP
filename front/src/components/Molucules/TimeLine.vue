<template>
  <v-timeline :dense="dense">
    <v-timeline-item
      v-for="(item, index) in lineItems"
      :key="index"
      :icon="item.icon || 'mdi-star'"
    >
      <v-card max-width="600" min-height="200">
        <v-card-title>
          {{ item.title }}
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="9">
              {{ item.text }}
            </v-col>
            <v-col md="3">
              <v-img :src="item.src" />
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  props: {
    lineItems: { type: Array, required: true },
    dense: Boolean,
  },
}
</script>
