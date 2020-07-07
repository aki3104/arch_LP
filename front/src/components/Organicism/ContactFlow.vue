<template>
  <v-container>
    <MyTimeLine :line-items="options" dense />
  </v-container>
</template>

<script>
export default {
  components: {
    MyTimeLine: () => import('@/components/Molucules/TimeLine'),
  },
  data() {
    return {
      options: [
        {
          name: 'Step1',
          src: 'images/step1.jpg',
          title: 'お問い合わせ',
          text:
            'お見積まで無料ですので、まずはお気軽にお問い合わせください。初回お問い合わせはお問い合わせフォームからお願いいたします。',
        },
        {
          name: 'Step2',
          src: 'images/step2.jpg',
          title: 'ご面談',
          text:
            'オンラインのご面談にて、ご相談内容の詳細をお伺いします（無料）。Zoomを使っての面談になりますのでご不明な点はお問い合わせください。',
        },
        {
          name: 'Step3',
          src: 'images/step3.jpg',
          title: 'ご提案・お見積り',
          text:
            'お客様に合わせたサービスをご提案します。もちろんお見積り内容の他に請求はございません。',
        },
        {
          name: 'Step4',
          src: 'images/step4.jpg',
          title: 'ご契約',
          text:
            'ご提案内容にご満足いただけましたらご契約となります。全力で業務に取り組みます。',
        },
      ],
    }
  },
}
</script>
