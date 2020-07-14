<template>
  <v-row align="center" justify="center" class="my-12">
    <v-card max-width="600" min-height="200" flat>
      <v-card-title>
        <h2>
          {{ title }}
        </h2>
      </v-card-title>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" md="8">
            {{ text }}
          </v-col>
          <v-col cols="6" md="4">
            <v-img :src="src" />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      name: 'profile',
      src: 'images/profile.jpeg',
      title: 'お客様の架け橋になれるように',
      text:
        '私たちの使命は「あらゆるモノの橋渡しをすること」です。人と人、田舎と都会、事業者様とそのお客様、様々なものの橋渡しをすることで、お客様の課題を解決し、お客様の暮らしがより良いものになるよう全力で取り組んでいます。',
    }
  },
}
</script>
