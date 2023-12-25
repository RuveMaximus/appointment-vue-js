<script setup>
import Header from '@/components/Header.vue';
import Block from '@/components/UI/Block.vue';
import Button from '@/components/UI/Button.vue';
import { useRoute } from 'vue-router';
import { inject } from 'vue';
import router from '@/router';

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

const cancelAppointment = () => {
    const appointments = JSON.parse(localStorage.getItem('appointments'));
    const updated = appointments.filter(( {id} ) => id !== cID);

    localStorage.setItem('appointments', JSON.stringify(updated));
    alert('Вы успешно отменили запись');
    router.push('/');
}

</script>

<template>
    <Header>Информация о консультации</Header>
    <Block>
        <table>
            <tr>
                <td><box-icon name='calendar' color='#ccc'></box-icon></td>
                <td>{{ consultation.date }}</td>
            </tr>
            <tr>
                <td><box-icon name='time-five' color='#ccc'></box-icon></td>
                <td>{{ consultation.time }}</td>
            </tr>
            <tr>
                <td><box-icon name='user' color='#ccc'></box-icon></td>
                <td>{{ consultation.specialist }}</td>
            </tr>
        </table>

        <Button class="danger" @click="cancelAppointment">Отменить запись</Button>
        <Button class="primary">Добавить в календарь</Button>
        <Button class="secondary"><a :href="`/appoint/${cID}/chat/`">Чат со специалистом</a></Button>
    </Block>
</template>