<template>
  <v-navigation-drawer
    app
    permanent
    expand-on-hover
    dark
    clipped
    color="accent"
    flat
  >
    <login-user
      class="px-2 py-1"
      @click="dialog.open()"
      :avatar="require('@/assets/avatars/2220812101741.jpg')"
      :name="loginUser.name"
    />

    <v-divider></v-divider>

    <v-list
      nav
      dense
    >
      <time-line :badgeCount="6" />
      <group @click="alert('toGroup')" />
      <user />
    </v-list>

    <v-divider></v-divider>

    <template v-slot:append>
      <v-list
        nav
        dense
      >
        <setting @click="alert('toetting')" />
      </v-list>
    </template>

    <v-dialog
      v-model="dialog.show"
    >
      aaaaa
    </v-dialog>

  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';
import LoginUser from '@/components/molecules/list-items/LoginUser.vue';
import TimeLine from '@/components/molecules/list-items/TimeLine.vue';
import Group from '@/components/molecules/list-items/Group.vue';
import User from '@/components/molecules/list-items/User.vue';
import Setting from '@/components/molecules/list-items/Setting.vue';

export default defineComponent({
  components: {
    'login-user': LoginUser,
    'time-line': TimeLine,
    Group,
    User,
    Setting,
  },
  setup: () => {
    const loginUser = {
      avatar: '@/assets/avatars/2220812101741.jpg',
      name: 'hato-poppo',
    };

    const dialog = reactive({
      show: false,
      open: () => {
        dialog.show = true;
      },
      close: () => {
        dialog.show = false;
      },
    });

    return {
      loginUser,
      dialog,
    };
  },
});
</script>
