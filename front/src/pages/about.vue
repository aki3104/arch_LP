<template>
  <v-container pa-0 ma-0 fluid fill-height>
    <MyImg
      :img-src="require('@/static/images/title.jpg')"
      widht="100vw"
      height="100px"
      title="会社について"
    />
    <MyCompany />
    <MyProfile />
    <MyLink />
  </v-container>
</template>

<script>
export default {
  components: {
    MyProfile: () => import('@/components/Organicism/Profile'),
    MyCompany: () => import('@/components/Organicism/Company'),
    MyImg: () => import('@/components/Atom/TheImg'),
    MyLink: () => import('@/components/Organicism/Link'),
  },
}
</script>
