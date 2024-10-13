<template>
    <div>
        <v-file-input counter show-size truncate-length="15" accept=".pdf" label="Upload PDF"
            @change="handleFileUpload">
        </v-file-input>
        <center> <v-btn color="primary" @click="upload">Upload</v-btn> </center>
        <!-- {{ selectedFile }} -->
<!-- <DisplayPdf/> -->
    </div>
</template>
<script>
import axios from 'axios';
// import DisplayPdf from './DisplayPdf.vue';
export default {
    name: 'UploadPdf',
    props:{
        reportId:Number,
    },
    components: {
        // DisplayPdf,
    },
    data: () => ({
        //
        selectedFile: null,
    }),
    methods: {
        handleFileUpload(file) {
            this.selectedFile = file;
            console.log(this.selectedFile)
            console.log(this.selectedFile.name)
        },
        async upload() {
            const formData = new FormData();
            formData.append('file', this.selectedFile);
            formData.append('reportId', this.reportId);
            try {
                const response = await axios.post('http://localhost:8020/lab_reports/pdf/uploadPdf', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('File uploaded successfully', response.data);
            } catch (error) {
                console.error('Error uploading file', error);
            }
        },

    }
};
</script>