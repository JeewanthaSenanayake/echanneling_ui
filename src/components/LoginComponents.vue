<template>
    <div>
        <v-card class="pa-3 mx-auto mt-12" elevation="24" max-width="400">
            
                <h1 class="text-center mt-2" >eChanneling</h1>
           
            <v-card-text>
                <v-form>
                    <v-text-field v-model="email" label="Email" required></v-text-field>
                    <v-text-field v-model="password" label="Password" required type="password"></v-text-field>
                    
                   <center> <v-btn @click="login" color="primary">
                        Login
                    </v-btn></center>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'LoginComponents',
    data: () => ({
        email: '',
        password: '',
    }),
    methods: {
        login() {
            console.log('Email:', this.email);
            console.log('Password:', this.password);
        }
    }
}
</script>