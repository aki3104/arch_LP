<template>
  <v-container pa-0 ma-0 fluid fill-height>
    <MyImg
      :img-src="require('@/static/images/title.jpg')"
      widht="100vw"
      height="100px"
      title="お問い合わせ"
    />
    <MyForm />
    <MyLink />
  </v-container>
</template>

<script>
export default {
  components: {
    MyForm: () => import('@/components/Organicism/Form'),
    MyImg: () => import('@/components/Atom/TheImg'),
    MyLink: () => import('@/components/Organicism/Link'),
  },
  head() {
    return {
      title: 'Form',
    }
  },
}
</script>
