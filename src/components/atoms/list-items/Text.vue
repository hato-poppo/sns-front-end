<template>
  <v-list-item-content>
    <v-list-item-title>{{ content }}</v-list-item-title>
  </v-list-item-content>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    content: String,
  },
});
</script>
