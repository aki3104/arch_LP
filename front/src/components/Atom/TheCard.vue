<template>
  <v-card :max-width="width" :min-height="height" class="ma-5">
    <slot name="cardImage" />
    <v-card-title>
      <slot name="cardTitle" />
    </v-card-title>
    <v-card-text>
      <slot name="cardText" />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    width: String,
    height: String,
  },
}
</script>
