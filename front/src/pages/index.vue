<template>
  <v-container pa-0 ma-0 fluid fill-height>
    <MyTop />
    <MyIntroduct />
    <MyContactFlow />
  </v-container>
</template>

<script>
export default {
  components: {
    MyTop: () => import('@/components/Organicism/Top'),
    MyIntroduct: () => import('@/components/Organicism/Introduct'),
    MyContactFlow: () => import('@/components/Organicism/ContactFlow'),
  },
}
</script>
