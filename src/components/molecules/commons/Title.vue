<template>
  <div class="d-flex align-center">
    <title-logo />
    <title-name />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import TitleLogo from '@/components/atoms/commons/TitleLogo.vue';
import TitleName from '@/components/atoms/commons/TitleName.vue';

export default defineComponent({
  components: {
    'title-logo': TitleLogo,
    'title-name': TitleName,
  },
});
</script>
