<template>
    <header>
        <slot/>
    </header>
</template>

<style scoped>
  header {
    max-width: 100%;
    position: sticky;
    top: 0;
    padding-left: 20px;
    padding-block: 16px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 18px;
    background-color: white;
  }
</style>