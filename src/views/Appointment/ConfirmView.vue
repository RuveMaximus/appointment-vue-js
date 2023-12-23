<script setup>
import { useRoute } from 'vue-router';
import Header from '@/components/Header.vue';
import Button from '@/components/UI/Button.vue';
import { inject } from 'vue';


const consultations = inject('consultations');
let consultation = {};
const route = useRoute();
const cID = +route.params.id;

for (const specialist of Object.keys(consultations)) {
    for (const date of Object.keys(consultations[specialist])) {
        for (const {id, time} of consultations[specialist][date]) {
            if (id === cID) {
                consultation = { id, specialist, date, time}
            }
        }
    }
}

const confirmAppointment = () => { 
    alert('Вы подтвердили запись')
    const appointments = JSON.parse(localStorage.getItem('appointments')) ?? [];
    localStorage.setItem('appointments', JSON.stringify([...appointments, consultation]));
}
</script>


<template>
    <Header> Подтверждение </Header>

    <div class="block">
        <h2>Вы записываетесь на Консультацию</h2>
        <table>
            <tr>
                <td><box-icon name='calendar' color='#cccccc'></box-icon></td>
                <td>{{ consultation.date }}</td>
            </tr>
            <tr>
                <td><box-icon name='time-five' color='#ccc'></box-icon></td>
                <td>{{ consultation.time }}</td>
            </tr>
            <tr>
                <td><box-icon name='user' color='#cccccc'></box-icon></td>
                <td>{{ consultation.specialist }}</td>
            </tr>
        </table>
        <Button class="primary" @click="confirmAppointment">Подтвердить</Button>
        <Button><a href="/">Отменить</a></Button>
    </div>
</template>

<style scoped>
</style>