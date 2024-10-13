<template>
    <div>
        <center>
            <H1>All Requests</H1>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                hide-details></v-text-field>
            <v-data-table :headers="headers" :search="search" :items="desserts" :items-per-page="10" class="elevation-1">
                <template v-slot:[`item.upload`]="{ item }">
                    <v-btn color="orange" small @click="upload(item.id)">Upload</v-btn>
                </template>
            </v-data-table>
        </center>
        <v-dialog v-model="dialog" persistent max-width="350">
            <v-card>
                <v-toolbar dark color="primary">
                    <v-btn icon dark @click="dialog = false;">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-card-text>
                    <UploadPdf  :reportId="reportId" />
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
import axios from 'axios';

import UploadPdf from '@/components/UploadPdf.vue';
export default {
    name: 'ShedulesComponent',
    components: {
        UploadPdf
    },
    data: () => ({
        search:'',
        headers: [
            { text: 'Patient Id', value: 'patientId', align: 'start' },
            { text: 'Report Description', value: 'testDiscript', align: 'start' },
            { text: 'Action', value: 'upload', align: 'start' },
        ],
        desserts: [],
        dialog: false,
        reportId: null,
    }),

    methods: {
        //
        upload(id) {
            console.log(id)
            this.dialog=true
            this.reportId= id;
        },
        async getShedules() {
            // const storedUser = JSON.parse(sessionStorage.getItem('user'));
            await axios.get('http://localhost:8020/lab_reports/get_request_by_status/0')
                .then((response) => {
                    console.log(response.data);
                    this.desserts = response.data
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },

    mounted() {
        this.getShedules();
        // const storedUser = JSON.parse(sessionStorage.getItem('user'));
        // console.log(storedUser);

    }
};
</script>