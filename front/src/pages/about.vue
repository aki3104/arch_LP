<template>
  <v-container pa-0 ma-0 fluid fill-height>
    <MyTitle title="会社について" />
    <MyCompany />
    <MyProfile />
  </v-container>
</template>

<script>
export default {
  components: {
    MyProfile: () => import('@/components/Organicism/Profile'),
    MyCompany: () => import('@/components/Organicism/Company'),
    MyTitle: () => import('@/components/Molucules/Title'),
  },
}
</script>
