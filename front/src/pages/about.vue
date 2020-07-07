<template>
  <v-container pa-0 ma-0 fluid fill-height>
    <MyCompany />
    <MyProfile />
  </v-container>
</template>

<script>
export default {
  components: {
    MyProfile: () => import('@/components/Organicism/Profile'),
    MyCompany: () => import('@/components/Organicism/Company'),
  },
}
</script>
