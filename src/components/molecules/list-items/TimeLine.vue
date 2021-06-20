<template>
  <v-list-item link @click="toTimeLine()">
    <v-list-item-icon>
      <v-badge
        color="red"
        :content="badgeCount"
        overlap
      >
        <v-icon>mdi-message-text</v-icon>
      </v-badge>
    </v-list-item-icon>
    <v-list-item-title>Time Lines</v-list-item-title>
  </v-list-item>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    badgeCount: Number,
  },
  setup: (_, context) => {
    const toTimeLine = () => context.root.$router.push({ name: 'TimeLine' });

    return {
      toTimeLine,
    };
  },
});
</script>
