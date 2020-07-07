<template>
  <v-timeline :dense="dense">
    <v-timeline-item
      v-for="(item, index) in lineItems"
      :key="index"
      :icon="item.icon || 'mdi-star'"
    >
      <slot />
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  MyCard: () => import('@/components/Molucules/Card'),
  props: {
    lineItems: { type: Array, required: true },
    dense: Boolean,
  },
}
</script>
