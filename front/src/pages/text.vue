<template>
  <v-container pa-0 ma-0 fluid fill-height>
    <MyTop />
    <MyIntroduction />
  </v-container>
</template>

<script>
export default {
  components: {
    MyTop: () => import('@/components/Organicism/Top'),
    MyIntroduction: () => import('@/components/Organicism/Introduction'),
  },
}
</script>
