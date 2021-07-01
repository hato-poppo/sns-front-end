<template>
  <v-list-item link @click="toTimeLine()">
    <v-list-item-icon>
      <v-icon>mdi-account-multiple</v-icon>
    </v-list-item-icon>
    <v-list-item-title>Users</v-list-item-title>
  </v-list-item>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup: (_, context) => {
    const toTimeLine = () => context.root.$router.push({ name: 'User' });

    return {
      toTimeLine,
    };
  },
});
</script>
