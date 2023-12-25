<script setup>
import Header from '@/components/Header.vue';
import LinkBlock from '@/components/LinkBlock.vue';

const appointments = JSON.parse(localStorage.getItem('appointments')) ?? [];

</script>

<template>
  <Header>Главное</Header>
    <LinkBlock :title="'О нас'" :link="'https://telegra.ph/O-nas-08-11-9'"/>
    <LinkBlock :title="'Правила приёма'" :link="'https://telegra.ph/Pravila-priyoma-08-11'"/>
    <LinkBlock :title="'Стоимость платных услуг'" :link="'https://telegra.ph/Stoimost-platnyh-uslug-08-11'"/>
    <LinkBlock :title="'Коучинг'" :link="'https://telegra.ph/Kouching-11-05'"/>

  <Header>Мои записи</Header>

  <LinkBlock v-if="appointments.length === 0" 
    :title="'Записаться на консультацию'"
    :subtitle="'Вы не записаны ни на одну консультацию'"
    :link="`/appoint/`"/>
  
  <LinkBlock v-else v-for="c in appointments" 
    :title="'Консультация'"
    :subtitle="`${c.date} ${c.time}`"
    :link="`/appoint/${c.id}/info`" 
  />
</template>