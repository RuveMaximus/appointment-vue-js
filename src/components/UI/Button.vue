<template>
    <button><slot/></button>
</template>

<style scoped> 
    button {
        outline: none; 
        border: none;
        padding: 10px 20px;
        border-radius: 10px;
        width: min(140px, 100%);
        font-size: 16px;
        margin: 2px auto;
    }
    button:hover {
        cursor: pointer;
    }
    button.primary {
        background-color: var(--primary-color);
        color: white;
        font-weight: bold;
    }
    button.danger {
        background-color: var(--danger-color);
        color: white;
    }

    button.secondary {
        background-color: var(--secondary-color);
        color: #212121;
    }
</style>

<style>
button a {
    text-decoration: none;
    color: #212121;
}
</style>