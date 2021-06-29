<template>
  <v-container>
    <v-row>
      <v-col>
        <time-line-header />
      </v-col>
    </v-row>
    <v-row v-for="post in posts" v-bind:key="post.id">
      <v-col>
        <post :value="post" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import TimeLineHeader from '@/components/organisms/contents/TimeLineHeader.vue';
import Post from '@/components/organisms/contents/Post.vue';

export default defineComponent({
  components: {
    'time-line-header': TimeLineHeader,
    Post,
  },
  setup: () => {
    const posts = [
      {
        id: 10, user_id: 1, user_name: 'hato-poppo', title: 'テスト投稿10', content: 'これはテスト投稿10です',
      },
      {
        id: 9, user_id: 1, user_name: 'hato-poppo', title: 'テスト投稿9', content: 'これはテスト投稿9です',
      },
      {
        id: 8, user_id: 1, user_name: 'hato-poppo', title: 'テスト投稿8', content: 'これはテスト投稿8です',
      },
      {
        id: 7, user_id: 1, user_name: 'hato-poppo', title: 'テスト投稿7', content: 'これはテスト投稿7です',
      },
      {
        id: 6, user_id: 1, user_name: 'hato-poppo', title: 'テスト投稿6', content: 'これはテスト投稿6です',
      },
      {
        id: 5, user_id: 1, user_name: 'hato-poppo', title: 'テスト投稿5', content: 'これはテスト投稿5です',
      },
      {
        id: 4, user_id: 1, user_name: 'hato-poppo', title: 'テスト投稿4', content: 'これはテスト投稿4です',
      },
      {
        id: 3, user_id: 1, user_name: 'hato-poppo', title: 'テスト投稿3', content: 'これはテスト投稿3です',
      },
      {
        id: 2, user_id: 1, user_name: 'hato-poppo', title: 'テスト投稿2', content: 'これはテスト投稿2です',
      },
      {
        id: 1, user_id: 1, user_name: 'hato-poppo', title: 'テスト投稿1', content: 'これはテスト投稿1です',
      },
    ];

    return {
      posts,
    };
  },
});
</script>
