<template>
  <v-row align="center" justify="center">
    <v-simple-table height="300px">
      <template v-slot:default>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.name }}</td>
            <td>
              {{ item.calories }}
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: '事業所名',
          calories: '株式会社ARCH',
        },
        {
          name: '所在地',
          calories: '岐阜県下呂市萩原町桜洞1611番地5',
        },
        {
          name: '設立',
          calories: '2020年6月',
        },
        {
          name: '代表者',
          calories: '佐藤 章皓',
        },
        {
          name: '事業内容',
          calories: 'コミュニティ運営, システム開発事業, コンサルタント事業',
        },
      ],
    }
  },
}
</script>
