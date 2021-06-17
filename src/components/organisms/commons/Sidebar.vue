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
    <v-list-item class="px-2 py-1" @click="alert('toProfile')">
      <v-list-item-avatar>
        <v-img src=""></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>{{ '' }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <!-- <v-list-item link @click="dialog = true">
      <v-list-item-icon>
        <v-icon>mdi-pencil-plus</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Post</v-list-item-title>
      <template>
        <v-dialog
          v-model="dialog"
          max-width="600px"
        >
          <v-card>
            <v-card-title>
              <span class="headline">Post Message</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      prepend-icon="mdi-pencil"
                      label="Title"
                      required
                      background-color="grey lighten-4"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      prepend-icon="mdi-message-processing-outline"
                      auto-grow
                      label="Text"
                      required
                      rows="6"
                      background-color="grey lighten-4"
                    ></v-textarea>
                  </v-col>
                  <v-col
                  >
                    <v-file-input
                      chips
                      label="input upload file"
                      background-color="grey lighten-4"
                    ></v-file-input>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
              >
                Close
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="dialog = false; snackbar = true;"
              >
                Post
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
    </v-list-item>
    <v-divider></v-divider> -->

    <v-list
      nav
      dense
    >
      <v-list-item link @click="toTimeLine">
        <v-list-item-icon>
          <v-badge
            color="red"
            content="6"
            overlap
          >
            <v-icon>mdi-message-text </v-icon>
          </v-badge>
        </v-list-item-icon>
        <v-list-item-title>Time Lines</v-list-item-title>
      </v-list-item>
      <v-list-item link @click="alert('toGroup')">
        <v-list-item-icon>
          <v-icon>mdi-account-supervisor-circle</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Groups</v-list-item-title>
      </v-list-item>
      <v-list-item link @click="alert('toUser')">
        <v-list-item-icon>
          <v-icon>mdi-account-multiple</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Users</v-list-item-title>
      </v-list-item>
      <!-- <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-star</v-icon>
        </v-list-item-icon>
        <v-list-item-title>My Posts</v-list-item-title>
      </v-list-item> -->
      <!-- <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-account-multiple</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Shared with me</v-list-item-title>
      </v-list-item> -->
    </v-list>

    <v-divider></v-divider>

    <template v-slot:append>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-cog</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Settings</v-list-item-title>
      </v-list-item>
    </template>

  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
//   components: {
//     'site-header': Header,
//   },
});
</script>
