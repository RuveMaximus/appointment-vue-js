<template>
    <div class="block">
        <slot/>
    </div>
</template>

<style scoped>
.block {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 20px;
    background-color: white;
    border: 1px solid #EEE;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 20px;
}
</style>