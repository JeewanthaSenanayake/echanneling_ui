<template>
    <div>
        <center>
            <h1 v-if="isUpdate">Create New Shedules</h1>
            <v-form ref="form" lazy-validation>
                <v-text-field v-model="sdata.location" label="Location" required prepend-icon="mdi-map-marker"
                    :rules="[v => !!v || 'Location is required']"></v-text-field>
                <v-text-field v-model="sdata.address" label="Address" required prepend-icon="mdi-office-building-marker"
                    :rules="[v => !!v || 'Address is required']"></v-text-field>
                <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                    offset-y min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="sdata.practiceDate" label="Date"
                            :rules="[v => !!v || 'Date is required']" prepend-icon="mdi-calendar" readonly
                            v-bind="attrs" v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="sdata.practiceDate" @input="menu2 = false"></v-date-picker>
                </v-menu>
                <v-menu ref="menu" v-model="menu3" :close-on-content-click="false" :nudge-right="40"
                    :return-value.sync="time" transition="scale-transition" offset-y max-width="290px"
                    min-width="290px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="sdata.practiceTime" label="Time"
                            prepend-icon="mdi-clock-time-four-outline" :rules="[v => !!v || 'Time is required']"
                            readonly v-bind="attrs" v-on="on"></v-text-field>
                    </template>
                    <v-time-picker v-if="menu3" v-model="sdata.practiceTime" full-width
                        @click:minute="$refs.menu.save(time)"></v-time-picker>
                </v-menu>

                <v-btn v-if="isUpdate" @click="createShedule" color="primary">Create</v-btn>
                <v-btn v-else @click="updateShedule" color="primary">Update</v-btn>
            </v-form>
        </center>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    props: {
        sheduleId: Number,
        isUpdate:{
            type: Boolean,
            default: true
        }
    },
    data: () => ({
        menu2: false,
        menu3: false,
        sdata: {
            location: '',
            address: '',
            practiceDate: '',
            practiceTime: '',
            doctorId: ''
        }
    }),
    methods: {
        async createShedule() {
            const storedUser = JSON.parse(sessionStorage.getItem('user'));
            console.log(storedUser);

            if (this.$refs.form.validate()) {
                this.sdata.doctorId = storedUser.id;

                await axios.post('http://localhost:8030/doctor/add', this.sdata)
                    .then((response) => {
                        console.log(response)
                        this.$refs.form.reset()
                            this.sdata = {
                                location: null,
                                address: null,
                                practiceDate: null,
                                practiceTime: null,
                                doctorId: null
                            }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }

        },
        async getShedule() {
            await axios.get('http://localhost:8030/doctor/DocById/' + this.sheduleId)
                .then((response) => {
                    console.log(response.data);
                    this.sdata = response.data
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async updateShedule() {
            if (this.$refs.form.validate()) {
                console.log(this.sdata);
                await axios.put('http://localhost:8030/doctor/update/' + this.sheduleId, this.sdata)
                    .then((response) => {
                        console.log(response)
                        this.sdata=null
                        this.getShedule();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }
    },
    mounted() {
        if (!this.isUpdate) {
            this.getShedule();
        }
    },
    watch:{
        sheduleId(){
            this.getShedule();
        }
    }
};
</script>