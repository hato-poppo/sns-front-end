<template>
  <v-toolbar
    class="mx-auto"
    :max-width="width"
    elevation="1"
  >
    <v-btn color="primary" icon dark>
      <v-icon>mdi-pencil-plus</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    width: {
      type: Number,
      default: 500,
    },
  },
});
</script>
