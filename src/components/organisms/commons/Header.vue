<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <site-title />

    <v-spacer></v-spacer>

    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
      text
    >
      <span class="mr-2">Latest Release</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Title from '@/components/molecules/commons/Title.vue';

export default defineComponent({
  components: {
    'site-title': Title,
  },
});
</script>
