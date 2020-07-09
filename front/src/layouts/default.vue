<template>
  <v-app>
    <Header />
    <!-- メイン -->
    <v-content>
      <v-container id="default" fluid fill-height pa-0>
        <nuxt />
      </v-container>
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
export default {
  components: {
    Header: () => import('@/components/Organicism/Header'),
    Footer: () => import('@/components/Organicism/Footer'),
  },
}
</script>
