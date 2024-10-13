<template>
    <div>
        <iframe :src="pdfUrl" width="100%" height="600px" frameborder="1"></iframe>
    </div>
</template>
<script>
export default {
    props: {
        msg: String
    },
    name: 'UploadPdf',
    data: () => ({
        pdfUrl: "Doc1.pdf"
    }),
    
    methods: {
        stringToPdf(data){
            const byteCharacters = atob(data);
                const byteNumbers = new Array(byteCharacters.length);
                for (let i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                const byteArray = new Uint8Array(byteNumbers);
                const blob = new Blob([byteArray], { type: 'application/pdf' });
                this.pdfUrl = URL.createObjectURL(blob);
                
        },
    },
    mounted() {
        this.stringToPdf( this.msg);
    },
    watch:{
        msg(){
            this.stringToPdf( this.msg);
           
        }
    
    }
};
</script>