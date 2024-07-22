<template>
    <v-container>
        <LoginComponents/>
    </v-container>
</template>

<script>
import LoginComponents from '@/components/LoginComponents.vue';
export default {
    name: 'LoginView',
    components: {
        LoginComponents,
    },
    data: () => ({
        //
    }),
};
</script>