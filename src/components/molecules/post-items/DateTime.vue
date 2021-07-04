<template>
  <v-card-subtitle>{{ value }}</v-card-subtitle>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    value: String,
  },
});
</script>
