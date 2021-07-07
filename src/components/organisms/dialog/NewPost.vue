<template>
  <v-dialog
    v-model="show"
    :width="500"
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
          @click="close()"
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
</template>

<script lang="ts">
import { defineComponent, ref, watch } from '@vue/composition-api';

type Props = {
  value: boolean,
}

export default defineComponent({
  props: {
    show: Boolean,
  },
  setup: (props: Props) => {
    const show = ref<boolean>(props.value);
    const close = () => {
      show.value = false;
    };

    watch(() => props.value, (value) => {
      show.value = value;
    });

    return {
      show,
      close,
    };
  },
});
</script>
