<script setup>
import Block from './UI/Block.vue';

const props = defineProps(['link', 'title', 'subtitle']);
</script>

<template>
    <a :href="props.link">
        <Block>
            <div class="card-header">
                <h2>{{ props.title }}</h2>
                <box-icon name='right-arrow-alt' size="md"></box-icon>
            </div>
            <h4 v-if="props.subtitle">{{ props.subtitle }}</h4>
            <slot/>
        </Block>
    </a>
</template>

<style scoped>
.card-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
h2 {
    margin: 0;
}
h4 {
    margin-top: 0;
    margin-bottom: 20px;
    color: #ccc;
}
a {
    text-decoration: none;
    color: #212121;
}
</style>
