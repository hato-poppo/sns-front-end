<template>
  <v-card
    class="mx-auto"
    color="#8CD790"
    dark
    max-width="800"
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-message-text
      </v-icon>
      <span class="title font-weight-light">{{ value.title }}</span>
    </v-card-title>

    <v-card-text color="#77AF9C" class="headline font-weight-bold" style="white-space: pre-line;">
      {{ value.content }}
    </v-card-text>

    <v-card-actions>
      <!-- <v-list-item class="grow"></v-list-item> -->
      <login-user
        class="px-2 py-1"
        @click="alert('toProfile')"
        :avatar="require('@/assets/avatars/2220812101741.jpg')"
        :name="value.user_name"
      />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import LoginUser from '@/components/molecules/list-items/LoginUser.vue';

export default defineComponent({
  components: {
    'login-user': LoginUser,
  },
  props: {
    value: Object,
  },
});
</script>
