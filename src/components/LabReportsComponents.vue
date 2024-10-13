<template>
    <div>
        <v-data-table :headers="headers" :items="desserts" :items-per-page="10" class="elevation-1">
            <template v-slot:[`item.file`]="{ item }">
                <v-btn color="orange" small @click="setPdfData(item.file)">View</v-btn>
            </template>
        </v-data-table>
        <v-row justify="center">
            <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                <v-card>
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="pdfData=null;dialog = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-toolbar>
                    <v-card-text>
                        <DisplayPdf :msg="pdfData" />
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>
<script>
import axios from 'axios';
import DisplayPdf from '@/components/DisplayPdf.vue';
export default {
    components: {
        DisplayPdf
    },
    data() {
        return {
            dialog: false,
            headers: [
                { text: 'Report', value: 'fileName', align: 'start' },
                { text: 'View', value: 'file', align: 'end' }
            ],
            desserts: []
        }
    },
    methods: {
        setPdfData(item) {
            this.dialog=true
            this.pdfData = item;
        },
        async getAllReports() {
            await axios.get('http://localhost:8020/lab_reports/pdf/get_all_reports').then((response) => {
                if (response.status === 200) {
                    this.desserts = response.data;
                    console.log(response.data);
                } else {
                    this.desserts = null;
                }
            }).catch((error) => {
                this.desserts = null;
                console.log(error);
            });
        }
    },
    mounted() {
        this.getAllReports();
    }
}
</script>