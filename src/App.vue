<script setup>
import { RouterView } from 'vue-router';
import { provide } from 'vue';
import NavbarItem from '@/components/UI/NavbarItem.vue';

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
    <NavbarItem 
      :url="'/appoint'" 
      :icon="'add-to-queue'"/>
    <NavbarItem 
      :url="'/'" 
      :icon="'home-alt'"/>
    <NavbarItem 
      :url="'/profile'" 
      :icon="'user'"/>
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
  width: 95%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
