<template>
    <div class="mx-5 my-3">

        <center>

            <v-card class="pa-6 mt-3 " elevation="5" max-width="450">
                <h1 class="text-center mb-3">Register a User</h1>
                <v-form ref="form" lazy-validation>
                    <!-- :counter="10" -->
                    <v-text-field v-model="regiForm.name" :rules="[v => !!v || 'Name is required']" label="Name"
                        required></v-text-field>
                    <v-text-field v-model="regiForm.nicNumber" :rules="[v => !!v || 'NIC is required']" label="NIC"
                        required></v-text-field>
                    <v-text-field v-model="regiForm.emailAddress"
                        :rules="[v => !!v || 'Email is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid']"
                        label="Email" required></v-text-field>
                    <v-text-field v-model="regiForm.username" :rules="[v => !!v || 'Username is required']"
                        label="Username" required></v-text-field>
                    <v-text-field v-model="regiForm.password" type="password"
                        :rules="[v => !!v || 'Password is required']" label="Password" required></v-text-field>
                    <v-text-field v-model="regiForm.cpassword" type="password"
                        :rules="[v => !!v || 'Conform Password is required']" label="Conform Password"
                        required></v-text-field>
                    <v-select v-model="regiForm.role" :rules="[v => !!v || 'Role is required']" :items="items"
                        label="Select a Role" data-vv-name="select" required></v-select>
                    <center><v-btn color="primary" @click="submit">Register</v-btn></center>
                </v-form>
            </v-card>
        </center>
        <!-- {{ regiForm }} -->
    </div>
</template>
<script>
import axios from 'axios';


export default {
    name: 'RegistrationComponent',
    components: {

    },
    data: () => ({
        //
        regiForm: {
            name: '',
            nicNumber: '',
            emailAddress: '',
            username: '',
            password: '',
            cpassword: '',
            role: '',
        },
        items: ['Admin', 'Doctor', 'Patient', 'Lab Assistant'],
    }),
    methods: {
        async submit() {

            if (this.$refs.form.validate()) {
                console.log(this.regiForm);
                if (this.regiForm.password != this.regiForm.cpassword) {
                    alert('Password and Conform Password are not same');
                    return;
                } else {
                    if (this.regiForm.role == 'Admin') {
                        this.regiForm.role = 'admin';
                    } else if (this.regiForm.role == 'Doctor') {
                        this.regiForm.role = 'doctor';
                    } else if (this.regiForm.role == 'Patient') {
                        this.regiForm.role = 'patient';
                    } else if (this.regiForm.role == 'Lab Assistant') {
                        this.regiForm.role = 'lab_assistant';
                    }

                    await axios.post('http://localhost:8010/register', this.regiForm).then((response) => {
                        if (response.status === 200) {
                            console.log(response.data);
                            this.$refs.form.reset()
                            this.regiForm=null
                        } else {
                            console.log(response.data);
                        }
                    }).catch((error) => {
                        console.log(error);
                    });
                }


            }
        }
    }
};
</script>