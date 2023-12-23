<script setup>
import Header from '@/components/Header.vue';
import Block from '@/components/UI/Block.vue';
import { useRoute } from 'vue-router';
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
</script>

<template>
    <Header>Информация о Консультации</Header>
    <Block>
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
    </Block>
</template>