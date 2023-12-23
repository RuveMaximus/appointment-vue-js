<script setup>
import Header from '@/components/Header.vue';
import Block from '@/components/UI/Block.vue';

const user = {
  name: 'Иванов Иван Иванович',
  phone: '+79081231212',
  unionCard: '123456789'
}

</script>
<template>
  <Header>Профиль</Header>
  <Block>
    <h2>{{ user.name }}</h2>
    <table>
      <tr>
        <td><box-icon name='phone'></box-icon></td>
        <td>{{ user.phone }}</td>
      </tr>
      <tr>
        <td><box-icon name='id-card'></box-icon></td>
        <td>{{ user.unionCard }}</td>
      </tr>
    </table>
  </Block>
</template>

<style scoped>
</style>