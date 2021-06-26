<template>
  <v-card-text class="headline font-weight-bold">
    {{ text }}
  </v-card-text>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    text: String,
  },
});
</script>

<style lang="scss" scoped>
.v-card__text {
  white-space: pre-line;
}
</style>
