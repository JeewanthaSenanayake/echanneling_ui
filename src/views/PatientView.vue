<template>
    <div>
        <v-app-bar app fixed>
            <template>
                <v-tabs align-with-title>

                    <v-tab @click="tabId = 0">Appointments</v-tab>

                    <v-tab @click="tabId = 1">My Appointments</v-tab>

                    <v-btn class="mt-3 ml-3" @click="logout">Logout</v-btn>
                </v-tabs>
            </template>
        </v-app-bar>
        <v-main>
            <div class="mx-5 my-3" v-if="tabId == 0">
                <center>
                    <h1 class="mb-3">Book A Doctor</h1>
                </center>
                <v-data-table :headers="headers" :items="desserts" :items-per-page="5" class="elevation-1">
                    <template v-slot:[`item.action`]="{ item }">
                        <v-btn color="orange" small @click="setPdfData(item.file)">Book</v-btn>
                    </template>
                </v-data-table>
            </div>
            <div class="mx-5 my-3" v-if="tabId == 1">
                <center>
                    <h1 class="mb-3">My Appointments</h1>
                </center>
                <v-data-table :headers="headers1" :items="desserts1" :items-per-page="5" class="elevation-1">
                    <template v-slot:[`item.action`]="{ item }">
                        <v-btn color="orange" small @click="setPdfData(item.file)">Book</v-btn>
                    </template>
                </v-data-table>
            </div>
        </v-main>
    </div>
</template>

<script>
// import DisplayShedules from '@/components/DisplayShedules.vue';
// import LabReportsRequest from '@/components/LabReportsRequest.vue';

export default {
    name: 'PatientView',
    components: {
        // DisplayShedules,
        // LabReportsRequest
    },
    data: () => ({
        //
        tabId: 0,
        headers: [
            {
                text: 'Doctor Name',
                align: 'start',
                sortable: false,
                value: 'dname',
            },
            { text: 'Location', value: 'location' },
            { text: 'Address', value: 'address' },
            { text: 'Date', value: 'date' },
            { text: 'Time', value: 'time' },
            { text: 'Action', value: 'action' },
        ],
        headers1: [
            {
                text: 'Doctor Name',
                align: 'start',
                sortable: false,
                value: 'dname',
            },
            { text: 'Location', value: 'location' },
            { text: 'Address', value: 'address' },
            { text: 'Date', value: 'date' },
            { text: 'Time', value: 'time' },
            // { text: 'Action', value: 'action' },
        ],
        desserts: [
            {
                dname: "Dr. Anil",
                date: "28-07-2024",
                time: "18:00",
                patient: "Nadun",
                address: "24/1, Rathkarawwa, Kurunagala",
                location: "Kurunagala"

            },
            {
                dname: "Dr. Kasun",
                date: "01-08-2024",
                time: "8:00",
                patient: "Kasul",
                address: "78/9, Kandy Rd",
                location: "Kandy"

            },
            {
                dname: "Dr. Kasun",
                date: "01-08-2024",
                time: "8:30",
                patient: "Pathum",
                address: "11/1, Mada Mawatha, Kandy",
                location: "Kandy"

            },

        ],
        desserts1: [
            {
                dname: "Dr. Anil",
                date: "28-07-2024",
                time: "18:00",
                patient: "Nadun",
                address: "24/1, Rathkarawwa, Kurunagala",
                location: "Kurunagala"

            },
            // {
            //     dname: "Dr. Kasun",
            //     date: "01-08-2024",
            //     time: "8:00",
            //     patient: "Kasul",
            //     address: "78/9, Kandy Rd",
            //     location: "Kandy"

            // },
            {
                dname: "Dr. Kasun",
                date: "01-08-2024",
                time: "8:30",
                patient: "Pathum",
                address: "11/1, Mada Mawatha, Kandy",
                location: "Kandy"

            },

        ],
    }),
    methods:{
        logout(){
            this.$router.push({name:'LoginView'})
        }
    },
    mounted() {
        // const storedUser = JSON.parse(sessionStorage.getItem('user'));
        // console.log(storedUser);

    }
};
</script>