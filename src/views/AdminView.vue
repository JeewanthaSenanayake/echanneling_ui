<template>
    <div>
        <v-app-bar app fixed>
            <template>
                <v-tabs align-with-title>
                    <v-tab @click="tabId = 0">Register a User</v-tab>

                    <!-- <v-tab @click="tabId = 1">Appointments</v-tab> -->

                    <v-tab @click="tabId = 2">Schedules</v-tab>

                    <v-tab @click="tabId = 3">Lab Reports</v-tab>

                    <v-btn class="mt-3 ml-3" @click="logout">Logout</v-btn>
                </v-tabs>
            </template>
        </v-app-bar>
        <v-main>
            <RegistrationComponent v-if="tabId == 0" />
            <LabReportsComponents v-if="tabId == 3" class="ma-6" />
            <DisplayShedules v-if="tabId == 2" :isAdmin="true"/>
        </v-main>
    </div>
</template>

<script>
import RegistrationComponent from '@/components/RegistrationComponent.vue';
import LabReportsComponents from '@/components/LabReportsComponents.vue';
import DisplayShedules from '@/components/DisplayShedules.vue';
export default {
    name: 'AdminView',
    components: {
        RegistrationComponent,
        LabReportsComponents,
        DisplayShedules
    },
    data: () => ({
        //
        tabId: 0,
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