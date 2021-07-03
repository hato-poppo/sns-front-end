<template>
  <v-navigation-drawer
    v-model="sidebar.show"
    :mini-variant.sync="sidebar.min"
    app
    permanent
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
        <v-list-item link @click="sidebar.toggle()">
          <v-list-item-icon>
            <v-icon v-if="sidebar.min">mdi-chevron-right</v-icon>
            <v-icon v-else>mdi-chevron-left</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Close</v-list-item-title>
        </v-list-item>
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

    const sidebar = reactive({
      show: true,
      min: false,
      toggle: () => {
        sidebar.min = !sidebar.min;
      },
    });

    return {
      loginUser,
      dialog,
      sidebar,
    };
  },
});
</script>
