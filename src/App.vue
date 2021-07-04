<template>
  <v-app>
    <!-- header -->
    <site-header />

    <!-- side bar -->
    <site-sidebar />

    <!-- main contents -->
    <v-main :style="{ background: $vuetify.theme.themes.light.background }">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Header from '@/components/organisms/commons/Header.vue';
import Sidebar from '@/components/organisms/commons/Sidebar.vue';

export default defineComponent({
  components: {
    'site-header': Header,
    'site-sidebar': Sidebar,
  },
});
</script>
