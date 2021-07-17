<template>
  <v-container>
    <v-row>
      <v-col>
        <v-toolbar
          class="mx-auto"
          flat
          color="rgba(0, 0, 0, 0)"
        >
          <div class="text-h4">User</div>
        </v-toolbar>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" class="px-6">
        <v-card
          width="250"
          height="200"
          class="py-2"
          color="secondary"
        >
          <div class="mx-auto text-center justify-center">
            <v-avatar
              size="72"
              class="my-2"
            >
              <v-img :src="require('@/assets/avatars/2220812101741.jpg')" />
            </v-avatar>
            <h3 class="white--text">hato-poppo</h3>
            <p class="text-caption white--text">hato-poppo@gmail.com</p>
            <v-divider class="my-1"></v-divider>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import LoginUser from '@/components/molecules/list-items/LoginUser.vue';

export default defineComponent({
  components: {
    'login-user': LoginUser,
  },
});
</script>
