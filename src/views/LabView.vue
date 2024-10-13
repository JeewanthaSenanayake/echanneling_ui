<template>
    <div>
        <v-app-bar app fixed>
            <template>
                <v-tabs align-with-title>

                    <v-tab @click="tabId = 0">Lab Report requests</v-tab>

                    <v-tab @click="tabId = 1">All Lab Reports</v-tab>

                    <v-btn class="mt-3 ml-3" @click="logout">Logout</v-btn>
                </v-tabs>
            </template>
        </v-app-bar>
        <v-main>
            <LabReportsComponents v-if="tabId == 1" class="ma-6" />
            <LabReportsRequest v-if="tabId == 0" class="ma-6" />
        </v-main>
    </div>
</template>

<script>
import LabReportsComponents from '@/components/LabReportsComponents.vue';
import LabReportsRequest from '@/components/LabReportsRequest.vue';

export default {
    name: 'LabView',
    components: {
        LabReportsComponents,
        LabReportsRequest
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