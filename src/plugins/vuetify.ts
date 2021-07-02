import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.brown.base,
        secondary: colors.orange.accent2,
        accent: colors.grey.base,
        transparent: colors.shades.transparent, // この指定で透明にしたかったけど効かず
      },
    },
  },
});
