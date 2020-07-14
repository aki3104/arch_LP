<template>
  <v-container pa-0 ma-0 fluid>
    <v-row align="center" justify="center" class="ma-0">
      <v-col
        v-for="(option, i) in options"
        v-show="$router.currentRoute.path !== option.to"
        :key="i"
        cols="12"
        md="6"
        class="pa-0"
      >
        <nuxt-link :to="option.to">
          <MyImg
            height="350"
            text-class="white--text"
            :title="option.title"
            :img-src="option.src || ''"
            class="clickable"
          />
        </nuxt-link>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" class="ma-0">
      <a :href="href">
        <MyImg
          :title="title"
          height="450"
          width="100vw"
          text-class="white--text"
          :img-src="src || ''"
          class="clickable"
        />
      </a>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    MyImg: () => import('@/components/Atom/TheImg'),
  },
  data() {
    return {
      overpy: false,
      src: 'images/ichl.jpg',
      title: '間質性膀胱炎友の会',
      href: 'https://ichl.jp/about',
      options: [
        {
          name: 'HOME',
          src: 'images/top.jpg',
          title: 'HOME',
          to: '/',
        },
        {
          name: 'About',
          src: 'images/about.jpg',
          title: 'About',
          to: '/about',
        },
        {
          name: 'お問い合わせ',
          src: 'images/contact.jpg',
          title: 'お問い合わせ',
          to: '/form',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.clickable {
  border: none;
  outline: none;
  cursor: pointer;
  font-family: inherit;
  padding: 0;
  transition: 0.5s;

  &:hover {
    opacity: 0.5;
  }

  &:focus {
    opacity: 1;
  }

  &:active {
    transform: scale(0.95);
  }
}
</style>
