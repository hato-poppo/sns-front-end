<template>
  <v-list-item>
    <list-avatar :src="avatar" />
    <list-text :content="name" />
  </v-list-item>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Avatar from '@/components/atoms/list-items/Avatar.vue';
import Text from '@/components/atoms/list-items/Text.vue';

export default defineComponent({
  components: {
    'list-avatar': Avatar,
    'list-text': Text,
  },
  props: {
    avatar: String,
    name: String,
  },
});
</script>
