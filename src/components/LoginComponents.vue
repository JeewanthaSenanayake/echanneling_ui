<template>
    <div>
        <v-card class="pa-3 mx-auto mt-12" elevation="24" max-width="400">

            <h1 class="text-center mt-2">eChanneling</h1>

            <v-card-text>
                <v-form ref="form" lazy-validation>
                    <v-text-field v-model="username" :rules="[v => !!v || 'Username is required']" label="Username"
                        required></v-text-field>
                    <v-text-field v-model="password" :rules="[v => !!v || 'Password is required']" label="Password"
                        required type="password"></v-text-field>

                    <center> <v-btn @click="login" color="primary">
                            Login
                        </v-btn></center>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'LoginComponents',
    data: () => ({
        username: '',
        password: '',
    }),
    methods: {
        async login() {
            console.log('username:', this.username);
            console.log('Password:', this.password);
            if (this.$refs.form.validate()) {
                await axios.post('http://localhost:8010/authenticate_user', {
                    username: this.username,
                    password: this.password
                }).then((response) => {
                    console.log(response.data);
                    sessionStorage.setItem('user', JSON.stringify(response.data));
                    if (response.data.role == 'admin') {
                        this.$router.push({ name: 'AdminView' });
                    } else if (response.data.role == 'doctor') {
                        this.$router.push({ name: 'DoctorView' });
                    } else if (response.data.role == 'patient') {
                        this.$router.push({ name: 'PatientView' });
                    } else if (response.data.role == 'lab_assistant') {
                        this.$router.push({ name: 'LabAssistantView' });
                    } else {
                        alert('Invalid Username or Password');
                    }
                }).catch((error) => {
                    console.log(error);
                    alert('Invalid Username or Password');
                });
            }
        }
    }
}
</script>