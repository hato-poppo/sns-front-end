<template>
  <v-container>
    <v-row>
      <v-col>
        <v-toolbar
          class="mx-auto"
          flat
          color="rgba(0, 0, 0, 0)"
        >
          <div class="text-h4">TimeLine</div>
        </v-toolbar>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <!-- <v-row>
          <v-col>
            <time-line-header />
          </v-col>
        </v-row> -->
        <v-row v-for="post in posts" v-bind:key="post.id">
          <v-col>
            <post :value="post" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <v-row>
          <v-col cols="12">
            <v-card
              color="primary"
              style="position: fixed"
              width="250"
            >
              <v-card-title class="text-h5 pa-3 white--text">
                Menu
              </v-card-title>

              <v-list
                nav
                dense
              >
                <v-list-item link @click="dialog.open()">
                  <v-list-item-icon>
                    <v-icon>mdi-pencil-plus</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>New post</v-list-item-title>
                </v-list-item>
                <v-dialog
                  v-model="dialog.show"
                  width="500"
                >
                  <v-card>
                    <v-card-title
                      class="white--text"
                      :style="{ background: $vuetify.theme.themes.light.primary }"
                    >
                      New post
                    </v-card-title>
                    <v-card-text class="pa-5">
                      <v-textarea
                        label="Please input content."
                        hide-details
                      ></v-textarea>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="secondary"
                        text
                        @click="dialog.close()"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        color="secondary"
                        elevation="0"
                      >
                        Post
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-list-item link>
                  <v-list-item-icon>
                    <v-icon>mdi-magnify</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Search</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';
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
        id: 10, user_id: 1, user_name: 'hato-poppo', title: 'テスト投稿10', content: 'これはテスト投稿10です', created_at: '2021-07-05 06:00:00',
      },
      {
        id: 9, user_id: 1, user_name: 'hato-poppo', title: 'テスト投稿9', content: 'これはテスト投稿9です', created_at: '2021-07-05 05:30:00',
      },
      {
        id: 8, user_id: 1, user_name: 'hato-poppo', title: 'テスト投稿8', content: 'これはテスト投稿8です', created_at: '2021-07-05 05:00:00',
      },
      {
        id: 7, user_id: 1, user_name: 'hato-poppo', title: 'テスト投稿7', content: 'これはテスト投稿7です', created_at: '2021-07-05 04:30:00',
      },
      {
        id: 6, user_id: 1, user_name: 'hato-poppo', title: 'テスト投稿6', content: 'これはテスト投稿6です', created_at: '2021-07-05 04:00:00',
      },
      {
        id: 5, user_id: 1, user_name: 'hato-poppo', title: 'テスト投稿5', content: 'これはテスト投稿5です', created_at: '2021-07-05 03:30:00',
      },
      {
        id: 4, user_id: 1, user_name: 'hato-poppo', title: 'テスト投稿4', content: 'これはテスト投稿4です', created_at: '2021-07-05 03:00:00',
      },
      {
        id: 3, user_id: 1, user_name: 'hato-poppo', title: 'テスト投稿3', content: 'これはテスト投稿3です', created_at: '2021-07-05 02:30:00',
      },
      {
        id: 2, user_id: 1, user_name: 'hato-poppo', title: 'テスト投稿2', content: 'これはテスト投稿2です', created_at: '2021-07-05 02:00:00',
      },
      {
        id: 1, user_id: 1, user_name: 'hato-poppo', title: 'テスト投稿1', content: 'これはテスト投稿1です', created_at: '2021-07-05 01:30:00',
      },
    ];

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
      posts,
      dialog,
    };
  },
});
</script>
