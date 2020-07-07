import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import MyCard from './../components/Molucules/Card'

storiesOf('Molucules.Card', module).add(
  'default',
  () => ({
    components: { MyCard },
    data() {
      return {
        options: [
          {
            name: 'test1',
            src: 'images/community.jpg',
            title: 'test1',
            text:
              'こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。',
          },
          {
            name: 'test2',
            src: 'images/develop.jpg',
            title: 'test2',
            text:
              'こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。',
          },
          {
            name: 'test3',
            src: 'images/consul.jpg',
            title: 'test3',
            text:
              'こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。',
          },
        ],
      }
    },
    methods: { action: action('変更されました') },
    template: '<MyCard :card-items="options" width="350" height="400" />',
  }),
  {
    notes: 'some documentation here',
  }
)
