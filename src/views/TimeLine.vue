<template>
  <v-container>
    <v-row>
      <v-col>
        <post />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Post from '@/components/organisms/contents/Post.vue';

export default defineComponent({
  components: {
    Post,
  },
});
</script>
