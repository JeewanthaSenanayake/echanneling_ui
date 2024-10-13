<template>
    <div>
        <v-app-bar app fixed>
            <template>
                <v-tabs align-with-title>

                    <v-tab @click="tabId = 1">Schedules</v-tab>

                    <v-tab @click="tabId = 0">Appointments</v-tab>

                    <v-tab @click="tabId = 2">Lab Reports</v-tab>

                    <v-btn class="mt-3 ml-3" @click="logout">Logout</v-btn>
                </v-tabs>
            </template>
        </v-app-bar>
        <v-main>
            <LabReportsComponents v-if="tabId == 2" class="ma-6" />
            <ShedulesComponent v-if="tabId == 1" class="ma-6" />
            <div v-if="tabId == 0" class="ma-6">
                <center>
                    <h1 class="mb-3">All Appointments</h1>
                </center>
                <v-data-table :headers="headers" :items="desserts" :items-per-page="5" class="elevation-1">
                    <template v-slot:[`item.action`]="{ item }">
                        <v-btn color="orange" small @click="setPdfData(item.file)">Request Lab Report</v-btn>
                    </template>
                </v-data-table>
            </div>
        </v-main>
    </div>
</template>

<script>
import LabReportsComponents from '@/components/LabReportsComponents.vue';
import ShedulesComponent from '@/components/ShedulesComponent.vue';
export default {
    name: 'DoctorView',
    components: {
        LabReportsComponents,
        ShedulesComponent
    },
    data: () => ({
        //
        tabId: 1,
        headers: [
            {
                text: 'No',
                align: 'start',
                sortable: false,
                value: 'no',
            },
            { text: 'Date', value: 'date' },
            { text: 'Time', value: 'time' },
            { text: 'Patient Name', value: 'patient' },
            { text: 'Location', value: 'location' },
            { text: 'Patient Id', value: 'patient_id' },
            { text: 'Action', value: 'action' },
        ],
        desserts: [
            {
                no: 1,
                date: "28-07-2024",
                time: "18:00",
                patient: "Nadun",
                patient_id: "p_005",
                location: "Kurunagala"

            },
            {
                no: 2,
                date: "01-08-2024",
                time: "8:00",
                patient: "Kasul",
                patient_id: "p_105",
                location: "Kandy"

            },
            {
                no: 3,
                date: "01-08-2024",
                time: "8:30",
                patient: "Pathum",
                patient_id: "p_106",
                location: "Kandy"

            },

        ],
    }),
    methods: {
        logout() {
            this.$router.push({ name: 'LoginView' })
        }
    },
    mounted() {
        // const storedUser = JSON.parse(sessionStorage.getItem('user'));
        // console.log(storedUser);

    }
};
</script>