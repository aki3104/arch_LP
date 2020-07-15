<template>
  <v-container pa-12 fluid>
    <v-row align="center" justify="center" class="ma-0">
      <v-col cols="12" md="10">
        <MyCard flat widht="100vw" height="auto">
          <template #cardText>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row v-for="(item, i) in fieldItems" :key="i">
                <v-text-field
                  v-model="$data[item.model]"
                  :counter="item.counter"
                  :rules="item.rules"
                  :label="item.label"
                  :required="item.required"
                ></v-text-field>
              </v-row>
              <v-textarea
                v-model="text"
                counter
                label="本文を入力"
                :rules="contentRules"
              ></v-textarea>
              <v-checkbox
                v-model="checkbox"
                :rules="[(v) => !!v || '同意の上チェックをつけてください']"
                label="送信してよろしいですか？"
                required
              ></v-checkbox>
              <v-row align="center" justify="center" class="ma-0">
                <v-btn
                  :disabled="!valid"
                  color="info"
                  class="mr-4"
                  @click="send"
                >
                  送信する
                </v-btn>
              </v-row>
            </v-form>
          </template>
        </MyCard>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar" timeout="2000">
      送信が完了しました
    </v-snackbar>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  components: {
    MyCard: () => import('@/components/Atom/TheCard'),
  },
  data: () => ({
    snackbar: false,
    valid: false,
    checkbox: false,
    campany: '',
    name: '',
    email: '',
    tel: '',
    text: '',
    contentRules: [
      (v) => (v && v.length) <= 150 || '150文字以内で入力ください',
    ],
    fieldItems: [
      {
        model: 'campany',
        label: '会社名',
        counter: '20',
        required: 'false',
      },
      {
        model: 'name',
        label: '名前',
        counter: '20',
        required: 'true',
        rules: [
          (v) => !!v || '名前は必須項目です',
          (v) => (v && v.length <= 20) || '20文字以内で入力ください',
        ],
      },
      {
        model: 'email',
        label: 'メールアドレス',
        counter: '',
        required: 'true',
        rules: [
          (v) => !!v || 'メールアドレスは必須項目です',
          (v) =>
            /.+@.+\..+/.test(v) || '有効なメールアドレスな形式ではありません',
        ],
      },
      {
        model: 'tel',
        label: '電話番号',
        counter: '',
        required: 'false',
      },
    ],
  }),

  methods: {
    send() {
      const myHttpClient = axios.create({
        baseURL: process.env.infoApiURL,
        headers: {
          'X-WRITE-API-KEY': process.env.infoApiKey,
          'Content-Type': 'application/json',
        },
      })
      const req = myHttpClient
        .post('info', {
          campany: this.campany,
          name: this.name,
          mail: this.email,
          tel: this.tel,
          content: this.text,
        })
        .then(function (req) {
          alert('送信しました。')
        })
        .catch(function (error) {
          alert('送信が失敗しました')
          console.log(error)
        })
    },
  },
}
</script>
