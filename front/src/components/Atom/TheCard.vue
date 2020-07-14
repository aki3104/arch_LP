<template>
  <v-card :max-width="width" :min-height="height" :flat="flat">
    <slot name="cardImage" />
    <v-card-title class="pa-0" :class="titleClass">
      <slot name="cardTitle" />
    </v-card-title>
    <v-card-text class="pa-0" :class="textClass">
      <slot name="cardText" />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    width: String,
    height: String,
    flat: Boolean,
    titleClass: String,
    textClass: String,
  },
}
</script>
