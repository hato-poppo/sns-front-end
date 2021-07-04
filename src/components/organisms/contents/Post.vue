<template>
  <v-card
    class="mx-auto"
    color="secondary"
    dark
    :max-width="width"
  >
    <post-title :text="value.title" />
    <post-date :value="value.created_at" />
    <post-content :text="value.content" />

    <v-card-actions>
      <login-user
        class="px-2 py-1"
        :avatar="require('@/assets/avatars/2220812101741.jpg')"
        :name="value.user_name"
      />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import LoginUser from '@/components/molecules/list-items/LoginUser.vue';
import Title from '@/components/molecules/post-items/Title.vue';
import DateTime from '@/components/molecules/post-items/DateTime.vue';
import Content from '@/components/molecules/post-items/Content.vue';

export default defineComponent({
  components: {
    'login-user': LoginUser,
    'post-title': Title,
    'post-date': DateTime,
    'post-content': Content,
  },
  props: {
    value: Object,
    width: {
      type: Number,
      default: 500,
    },
  },
});
</script>
