<template>
    <button><slot/></button>
</template>

<style scoped> 
    button {
        outline: none; 
        border: none;
        padding: 10px 20px;
        border-radius: 10px;
        width: 100%;
    }
    button:hover {
        cursor: pointer;
    }
    button.primary {
        background-color: #FE640B;
        color: white;
    }
</style>