<template>
  <v-list-item-avatar>
    <v-img :src="src" />
  </v-list-item-avatar>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    src: String,
  },
});
</script>
