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
    <v-row>
      <v-col cols="12" class="pa-6">
        <v-card
          width="250"
          height="200"
        >
          <login-user
            class="px-2 py-1"
            :avatar="require('@/assets/avatars/2220812101741.jpg')"
            :name="'hato-poppo'"
          />
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
