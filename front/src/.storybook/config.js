import Vue from 'vue'
import { configure, addDecorator } from '@storybook/vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import 'vuetify/dist/vuetify.min.css';

const vuetifyOptions = { }

Vue.use(Vuetify, {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
});

addDecorator(() => ({
  vuetify: new Vuetify(vuetifyOptions),
  template: `<v-app><story slot="story" /></v-app>`
}));

configure(require.context('../stories', true, /\.stories\.js$/), module);