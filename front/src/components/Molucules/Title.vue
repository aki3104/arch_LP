<template>
  <v-row no-gutters class="fixed-bg">
    <v-img
      class="fixed-bg"
      width="100vw"
      :min-height="100"
      :src="require('@/static/images/title.jpg')"
    >
      <v-theme-provider dark>
        <v-container fill-height fluid pa-0 class="fixed-bg">
          <v-row
            align="center"
            class="font-weight-bold mx-auto"
            justify="center"
          >
            <v-col class="white--text text-center" cols="12" tag="h1">
              <span
                class="font-weight-bold"
                :class="[
                  $vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2',
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
  },
}
</script>
