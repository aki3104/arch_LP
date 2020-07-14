<template>
  <v-container id="top" pa-0 ma-0 fluid>
    <section id="hero">
      <v-row no-gutters class="fixed-bg">
        <v-img
          class="fixed-bg"
          width="100vw"
          :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
          :src="require('@/static/images/top.jpg')"
        >
          <v-theme-provider dark>
            <v-container id="image" fill-height fluid pa-0 class="fixed-bg">
              <v-row
                align="center"
                class="font-weight-light mx-auto"
                justify="center"
              >
                <v-col class="white--text text-center" cols="12" tag="h1">
                  <span class="font-weight-light">
                    WELCOME TO
                  </span>
                  <br />
                  <span
                    :class="[
                      $vuetify.breakpoint.smAndDown ? 'display-3' : 'display-4',
                    ]"
                    class="font-weight-bold"
                  >
                    ARCH
                  </span>
                </v-col>
                <v-btn
                  class="align-self-end"
                  fab
                  outlined
                  @click="$vuetify.goTo('#introduct')"
                >
                  <v-icon>mdi-chevron-double-down</v-icon>
                </v-btn>
              </v-row>
            </v-container>
          </v-theme-provider>
        </v-img>
      </v-row>
    </section>
  </v-container>
</template>

<style lang="css" scoped>
.fixed-bg {
  background-attachment: fixed;
  background-repeat: no-repeat;
}
</style>
