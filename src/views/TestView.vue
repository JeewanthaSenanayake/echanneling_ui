<template>
    <v-container>
        <UploadPdf/>
    </v-container>
</template>

<script>   
import UploadPdf from '@/components/UploadPdf.vue';
export default {
    name: 'TestView',
    components: {
        UploadPdf,
    },
    data: () => ({
        //
    }),
};
</script>