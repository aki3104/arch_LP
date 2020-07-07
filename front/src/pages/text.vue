<template>
  <v-continer>
    <MyCard :card-items="options" />
  </v-continer>
</template>

<script>
export default {
  components: {
    MyCard: () => import('@/components/Molucules/Card'),
  },
  data() {
    return {
      options: [
        {
          name: 'test1',
          src: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
          title: 'test1',
          text:
            'こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。',
        },
        {
          name: 'test2',
          src: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
          title: 'test2',
          text:
            'こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。',
        },
        {
          name: 'test3',
          src: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
          title: 'test3',
          text:
            'こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。',
        },
      ],
    }
  },
}
</script>
