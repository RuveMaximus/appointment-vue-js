<script setup>
import Header from '@/components/Header.vue';
import Block from '@/components/UI/Block.vue';
import Input from '@/components/UI/Input.vue';
</script>

<template>
    <Header>Чат со специалистом</Header>

    <div class="chat-app">
        <Block class="message incoming-message ">
            Входящее сообщение
        </Block>

        <Block class="message outcoming-message ">
            Ваше сообщение 
        </Block>
    </div>

    <Input id="message-input" placeholder="Введите сообщение"/>
</template>

<style scoped>
    .chat-app {
        display: flex;
        flex-direction: column;
    }
    .message { width: 50%; }
    #message-input {
        width: 100%;
        bottom: 100px;
        position: fixed;
    }

    .incoming-message { align-self: flex-start; }

    .outcoming-message { align-self: flex-end; }
</style>