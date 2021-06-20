<template>
  <v-navigation-drawer
    app
    permanent
    expand-on-hover
    dark
    clipped
    color="#757575"
    class="elevation-6"
  >
    <login-user
      class="px-2 py-1"
      @click="alert('toProfile')"
      :avatar="require('@/assets/avatars/2220812101741.jpg')"
      :name="loginUser.name"
    />

    <v-divider></v-divider>

    <v-list
      nav
      dense
    >
      <time-line :badgeCount="6" @click="alert('toTimeLine')" />
      <group @click="alert('toGroup')" />
      <user @click="alert('toUser')" />
    </v-list>

    <v-divider></v-divider>

    <template v-slot:append>
      <v-list
        nav
        dense
      >
        <setting @click="alert('toSetting')" />
      </v-list>
    </template>

  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
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

    return {
      loginUser,
    };
  },
});
</script>
