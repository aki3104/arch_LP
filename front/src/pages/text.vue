<template>
  <v-continer>
    <MyIntroduction />
  </v-continer>
</template>

<script>
export default {
  components: {
    MyIntroduction: () => import('@/components/Organicism/Introduction'),
  },
}
</script>
