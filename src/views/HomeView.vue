<script setup>
import Header from '@/components/Header.vue';
import LinkBlock from '@/components/LinkBlock.vue';

const appointments = JSON.parse(localStorage.getItem('appointments')) ?? [];

</script>


<template>
  <Header>Главная</Header>
  
  <LinkBlock v-for="c in appointments" 
    :title="'Консультация'"
    :subtitle="`${c.date} ${c.time}`"
    :link="`/appoint/info/${c.id}`" 
  />
</template>