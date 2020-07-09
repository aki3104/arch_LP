<template>
  <v-container pa-0 ma-0 fluid>
    <MyTitle title="業務内容" />
    <v-row align="center" justify="center">
      <MyCard v-for="(option, i) in options" :key="i" width="350" height="400">
        <template #cardImage>
          <v-img height="250" :src="option.src || ''" />
        </template>
        <template #cardTitle>
          {{ option.title }}
        </template>
        <template #cardText>
          {{ option.text }}
        </template>
      </MyCard>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    MyCard: () => import('@/components/Atom/TheCard'),
    MyTitle: () => import('@/components/Molucules/Title'),
  },
  data() {
    return {
      options: [
        {
          name: 'コミニュティの運営事業',
          src: 'images/community.jpg',
          title: 'コミニュティの運営事業',
          text:
            '間質性膀胱炎友の会は、間質性膀胱炎に関わる方々のためのコミュニティです。病気における悩みや思い、質問や相談などを行うことができます。同じ悩みを持っている方との交流を通して、身体的、精神的負担を少しでも減らし、より健全に病気と付き合っていける環境の構築を目指していきます。',
        },
        {
          name: 'システム開発事業',
          src: 'images/develop.jpg',
          title: 'システム開発事業',
          text:
            'システム、ホームページの作成、開発支援などを行います。見積もりは無料ですので、お問い合わせください。また、コンサルタント契約をされているお客様にはお得な価格設定となっており、システム運用方法、設計から携わります。新規システムの開発を行われる方はコンサルタント業務との併用がおすすめです。',
        },
        {
          name: 'IT導入コンサルタント事業',
          src: 'images/consul.jpg',
          title: 'IT導入ンサルタント事業',
          text:
            '中小企業向けにIT導入のコンサルタントを行います。特に地方では、コスト面、人員面からIT機器の導入に踏み切れてない企業も多いのではないでしょうか。新規企画の相談、ITの活用、事業運営の相談などお客様にあった提案をさせていただきます。初回相談は無料でできますのでお気軽にご相談ください。',
        },
      ],
    }
  },
}
</script>
