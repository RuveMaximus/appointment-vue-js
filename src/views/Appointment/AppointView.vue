<script setup>
import Header from '@/components/Header.vue';
import LinkBlock from '@/components/LinkBlock.vue';
import Block from '@/components/UI/Block.vue';
import { inject } from 'vue';

const consultations = inject('consultations');

</script>
<template>
  <Header>Запись</Header>
  <Block>
    <div v-for="specialist in Object.keys(consultations)">
      <details>
        <summary><h2>{{ specialist }}</h2></summary>
        <details v-for="date in Object.keys(consultations[specialist])">
          <summary><h3>{{ date }}</h3></summary>
          <div>
            <div v-for="{id, time} in consultations[specialist][date]">
              <LinkBlock :title="time" :link="`/appoint/${id}/`"/>
            </div>
          </div>
        </details>
      </details>
    </div>
  </Block>
</template>

<style scoped>
details {
  background-color: white;
  padding: 10px;
}

summary {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #4c4f69;
  padding: 0 10px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  transition: all .1s;
}

details > :is(details, div) {
  border: 2px solid #4c4f69;
}

summary::-webkit-details-marker {
  display: none
}

summary::after {
  content: '+';
  font-size: 32px;
  transition: all .1s;
}

details[open] > summary:after {
  transform: rotate(45deg);
}

details[open] > summary {
  background-color: var(--primary-color);
  color: white;
  border-bottom: none;
}

</style>