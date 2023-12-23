<script setup>
import { RouterLink } from 'vue-router';
import { defineProps } from 'vue';
import router from '@/router';
const props = defineProps(['url', 'icon']);

const isActive = (url) => {
  return router.currentRoute.value.path === url
}
</script>

<template>
    <RouterLink :to=props.url>
      <box-icon :name=props.icon size="md"></box-icon>
      <div class="active-indicator" v-if="isActive(props.url)"></div>
    </RouterLink>
</template>


<style scoped>
.active-indicator {
  background-color: var(--primary-color);
  height: 6px;
  border-radius: 4px;
}
</style>