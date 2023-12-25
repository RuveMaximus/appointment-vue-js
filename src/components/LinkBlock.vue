<script setup>
import Block from './UI/Block.vue';

const props = defineProps(['link', 'title', 'subtitle']);
</script>

<template>
    <a :href="props.link" class="card">
        <Block>
            <div class="card-header">
                <h2 class="card-header__title">{{ props.title }}</h2>
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
a.card {
    text-decoration: none;
    color: #212121;
}
.card-header__title::after {
    display: block;
    content: "";
    height: 4px;
    width: 0;
    background-color: var(--primary-color);
    transition: width .1s;
}

.card:hover .card-header > .card-header__title::after {
    width: 100%;
}

.card:hover .block {
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
}


</style>
