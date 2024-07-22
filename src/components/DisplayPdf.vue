<template>
    <div>
        <v-btn @click="getPdf">Get PDF</v-btn>
        <iframe :src="pdfUrl" width="100%" height="600px" frameborder="1"></iframe>
    </div>
</template>
<script>
import axios from '@/service/axiosConfig';
export default {
    name: 'UploadPdf',
    data: () => ({
        pdfUrl: "Doc1.pdf"
    }),
    methods: {
        async getPdf() {
            await axios.get('/lab_reports/pdf/getPdf/3').then((response) => {
                console.log(response.data);
                
                const byteCharacters = atob(response.data.file);
                const byteNumbers = new Array(byteCharacters.length);
                for (let i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                const byteArray = new Uint8Array(byteNumbers);
                const blob = new Blob([byteArray], { type: 'application/pdf' });
                this.pdfUrl = URL.createObjectURL(blob);
            }).catch((error) => {
                console.error('Error getting pdf', error);
            });
        }
    }
};
</script>