<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { provide } from 'vue';
provide('consultations', {
    'Петр Сидоров': {
        '2023-11-12': [
            { id: 1, time: '15:00-16:00' },
            { id: 2, time: '16:00-17:00' },
        ]
    }
})
</script>

<template>
  <nav>
    <RouterLink to="/appoint">
      <box-icon name='add-to-queue' size="md"></box-icon>
    </RouterLink>
    <RouterLink to="/">
      <box-icon name='home-alt' size="md"></box-icon>
    </RouterLink>
    <RouterLink to="/profile">
      <box-icon name='user' size="md"></box-icon>
    </RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped>
body {
  height: 100vh;
}
nav {
  position: fixed;
  display: flex;
  justify-content: space-around;
  bottom: 10px;
  padding-block: 20px;
  background-color: #fff;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
