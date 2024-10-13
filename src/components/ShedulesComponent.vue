<template>
    <div class="mx-5 my-3">
        <v-tabs align-with-title>

            <v-tab @click="tabId = 0">Current Schedules</v-tab>

            <v-tab @click="tabId = 1">Create New Schedules</v-tab>
        </v-tabs>
        <v-divider></v-divider>
        <div>
            <DisplayShedules v-if="tabId == 0" class="ma-6" />
            <CreateNewShedules v-if="tabId == 1" class="ma-6" />
        </div>
    </div>
</template>

<script>
import DisplayShedules from '@/components/DisplayShedules.vue';
import CreateNewShedules from '@/components/CreateNewShedules.vue';
export default {
    name: 'ShedulesComponent',
    components: {
        DisplayShedules,
        CreateNewShedules
    },
    data: () => ({
        tabId: 0,
    }),
    mounted() {
        // const storedUser = JSON.parse(sessionStorage.getItem('user'));
        // console.log(storedUser);

    }
};
</script>