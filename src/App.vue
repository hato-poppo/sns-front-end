<template>
  <v-app>
    <!-- header -->
    <site-header />

    <!-- main contents -->
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Header from '@/components/organisms/commons/Header.vue';

export default defineComponent({
  components: {
    'site-header': Header,
  },
});
</script>
