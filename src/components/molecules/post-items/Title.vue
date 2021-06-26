<template>
  <v-card-title>
    <v-icon
      large
      left
    >
      mdi-message-text
    </v-icon>
    <span class="title font-weight-light">{{ text }}</span>
  </v-card-title>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    text: String,
  },
});
</script>
