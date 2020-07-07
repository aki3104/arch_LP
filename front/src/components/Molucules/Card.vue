<template>
  <v-continer ma-0 pa-0>
    <v-row align="center" justify="center">
      <v-card
        v-for="(cardItem, i) in cardItems"
        :key="i"
        max-width="344"
        min-height="400"
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
  </v-continer>
</template>

<script>
export default {
  props: {
    cardItems: { type: Array, required: true },
  },
}
</script>
