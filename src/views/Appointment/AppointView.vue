<script setup>
import Header from '@/components/Header.vue';
import LinkBlock from '@/components/LinkBlock.vue';
import Block from '@/components/UI/Block.vue';
import { inject } from 'vue';

const consultations = inject('consultations');

</script>
<template>
  <Header>Запись</Header>
  <div v-for="specialist in Object.keys(consultations)">
    <Block>
      <details>
        <summary>{{ specialist }}</summary>
        <div v-for="date in Object.keys(consultations[specialist])">
          <Block>
            <details>
              <summary>{{ date }}</summary>
              <div v-for="{id, time} in consultations[specialist][date]">
                <LinkBlock :title="time" :link="`/appoint/${id}/`"/>
              </div>
            </details>
          </Block>
        </div>
      </details>
    </Block>
  </div>
</template>

<style scoped>
details {
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
}

details > * {
  margin-top: 10px;
}

summary {
  font-size: 20px;
  font-weight: bold;
}

</style>