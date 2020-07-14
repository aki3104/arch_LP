<template>
  <section>
    <!-- ヘッダー -->
    <v-app-bar :clipped-left="clipped" :fixed="true" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <v-img width="80px" height="40px" src="/images/ARCH.png" />
      </v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <!-- ナビゲーションバー中身 -->
    <v-navigation-drawer v-model="drawer" temporary app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </section>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      clipped: true,
      items: [
        {
          icon: 'fa-home',
          title: 'HOME',
          to: '/',
        },
        {
          icon: 'fa-user-circle',
          title: '会社について',
          to: '/about',
        },
        {
          icon: 'fa-calendar-alt',
          title: 'お問い合わせ',
          to: '/form',
        },
      ],
      right: true,
      title: '株式会社ARCH',
    }
  },
}
</script>
