<template>
  <v-row align="center" justify="center">
    <v-card
      v-for="(cardItem, i) in cardItems"
      :key="i"
      :max-width="width"
      :min-height="height"
      class="ma-5"
    >
      <v-img height="250" :src="cardItem.src" />
      <v-card-title>
        {{ cardItem.title }}
      </v-card-title>
      <v-card-text>
        {{ cardItem.text }}
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script>
export default {
  props: {
    cardItems: { type: Array, required: true },
    width: String,
    height: String,
  },
}
</script>
