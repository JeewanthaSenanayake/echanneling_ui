<template>
    <div>
        <center>
            <H1 v-if="isAdmin==false">Current Shedules</H1>
            <H1 v-else>All Shedules</H1>
            <v-data-table :headers="headers" :items="desserts" :items-per-page="10" class="elevation-1">
                <template v-slot:[`item.edit`]="{ item }">
                    <v-btn color="orange" small @click="edit_shedule(item.scheduleId)">Edit</v-btn>
                </template>
                <template v-slot:[`item.delete`]="{ item }">
                    <v-btn color="red" small @click="delete_shedule(item.scheduleId)">Delete</v-btn>
                </template>
            </v-data-table>
        </center>
        <v-dialog v-model="dialog" persistent max-width="350">
            <v-card>
                <v-toolbar dark color="primary">
                    <v-btn icon dark @click="dialog = false;getShedules();">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-card-text>
                    <CreateNewShedules :isUpdate="false" :sheduleId="updateSheduleId" />
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
import axios from 'axios';

import CreateNewShedules from '@/components/CreateNewShedules.vue';
export default {
    name: 'ShedulesComponent',
    props:{
        isAdmin:{
            default:false,
        },
    },
    components: {
        CreateNewShedules
    },
    data: () => ({
        headers: [
            { text: 'Location', value: 'location', align: 'start' },
            { text: 'Address', value: 'address', align: 'start' },
            { text: 'Date', value: 'practiceDate', align: 'start' },
            { text: 'Time', value: 'practiceTime', align: 'start' },
            { text: 'Edit', value: 'edit', align: 'start' },
            { text: 'Delete', value: 'delete', align: 'start' },
        ],
        desserts: [],
        dialog: false,
        updateSheduleId:null,
    }),

    methods: {
        //
        async getShedules() {
            const storedUser = JSON.parse(sessionStorage.getItem('user'));
            if(this.isAdmin){
                await axios.get('http://localhost:8030/doctor/AllSchedules')
                .then((response) => {
                    console.log(response.data);
                    this.desserts = response.data
                })
                .catch((error) => {
                    console.log(error);
                });
            }else{
            await axios.get('http://localhost:8030/doctor/doctorId/' + storedUser.id)
                .then((response) => {
                    console.log(response.data);
                    this.desserts = response.data
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        },
        delete_shedule(id) {
            axios.delete('http://localhost:8030/doctor/delete/' + id)
                .then((response) => {
                    console.log(response.data);
                    this.getShedules();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        edit_shedule(id) {
            console.log(id);
            this.updateSheduleId = id;
            this.dialog = true;
        }
    },

    mounted() {
        this.getShedules();
        // const storedUser = JSON.parse(sessionStorage.getItem('user'));
        // console.log(storedUser);

    }
};
</script>