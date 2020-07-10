<template>
  <v-row no-gutters class="fixed-bg">
    <v-img class="fixed-bg" :width="width" :min-height="height" :src="imgSrc">
      <v-theme-provider dark>
        <v-container fill-height fluid pa-0 class="fixed-bg">
          <v-row align="center" justify="center">
            <v-col class="text-center" :class="textClass" cols="10">
              <span
                :class="[
                  $vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2',
                  fontClass,
                ]"
              >
                {{ title }}
              </span>
            </v-col>
          </v-row>
        </v-container>
      </v-theme-provider>
    </v-img>
  </v-row>
</template>

<script>
export default {
  props: {
    title: String,
    width: String,
    height: String,
    imgSrc: String,
    textClass: String,
    fontClass: String,
  },
}
</script>
