<template>
  <v-container pa-0 ma-0 fluid>
    <v-row align="center" justify="center" class="ma-0">
      <MyCard
        v-for="(option, i) in options"
        :key="i"
        width="100vw"
        height="auto"
        flat
      >
        <template #cardImage>
          <v-row align="center" justify="center" class="ma-0 gery lighten-5">
            <v-col cols="12" md="12" class="pa-0">
              <nuxt-link v-if="$route.path !== option.to" :to="option.to">
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
        </template>
      </MyCard>
      <v-row align="center" justify="center" class="ma-0">
        <a :href="href">
          <MyImg
            max-height="200px"
            width="100vw"
            text-class="white--text"
            :title="title"
            :img-src="src || ''"
            class="clickable"
          />
        </a>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    MyCard: () => import('@/components/Atom/TheCard'),
    MyImg: () => import('@/components/Atom/TheImg'),
  },
  data() {
    return {
      overpy: false,

      options: [
        {
          name: 'HOME',
          src: 'images/community.jpg',
          title: 'HOME',
          to: '/',
        },
        {
          name: 'About',
          src: 'images/develop.jpg',
          title: 'About',
          to: 'about',
        },
        {
          name: 'お問い合わせ',
          src: 'images/consul.jpg',
          title: 'お問い合わせ',
          to: 'from',
        },
      ],
      name: '間質性膀胱炎友の会',
      src: 'images/consul.jpg',
      title: '間質性膀胱炎友の会',
      href: 'https://ichl.jp',
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
