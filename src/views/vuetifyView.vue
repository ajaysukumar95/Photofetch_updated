<template>
<v-app>
  <v-main>
    <v-container>
     <v-card max-width='766' class="mx-auto my-15 elevation-0">
       <v-row class="px-3">
         <v-col cols='12' class="px-1">
          <h2 class="font-weight-regular pb-5">Photo Fetcher</h2>
         </v-col>
       </v-row>
       <v-row class="px-3">
         <v-col cols='6' class="text-left py-0 px-2">
            <vtoggleBtn></vtoggleBtn>
         </v-col>
         <v-col cols='6' class="text-right py-0 px-2">
             <vfetchBtn @GeneratorImage="imageGenerator($event)"></vfetchBtn>
         </v-col>
       </v-row>
       <v-row class="px-3">
         <v-col cols='6' class="pa-2 ma-0" v-for="(link,index) in imageLink" :key="index">
           <vimageGrid :image="link"></vimageGrid>
         </v-col>
       </v-row>
     </v-card>
    </v-container>
  </v-main>
</v-app>
</template>

<script>
import axiosService from "../service/axiosCall";

// Dynamic import of components
const vtoggleBtn = () => ({
  component: import("@/components/vuetify/vtoggleBtn")
});
const vfetchBtn = () => ({
  component: import("@/components/vuetify/vfetchBtn")
});
const vimageGrid = () => ({
  component: import("@/components/vuetify/vimageGrid")
});
export default {
  name: "vuetifyView",
  components: {
    vtoggleBtn,
    vfetchBtn,
    vimageGrid
  },
  data() {
    return {
      imageLink: [],
      imageDataSet: [],
      oldValue: "",
      newValue: "",
      dataSetLength:''
    };
  },
  created() {
    this.fetchImageData();
  },
  methods: {
    //fetch images from the API
    fetchImageData() {
      axiosService.imageGridFetchcall().then(response => {
        this.imageDataSet = response.data;
        this.dataSetLength = this.imageDataSet.length;
        this.imageGenerator();
      });
    },
    //  generator image link with set values
    imageGenerator(data) {
      this.imageLink = [];
      if (data) {
        this.oldValue = this.newValue;
        this.newValue += data;
      } else {
        this.oldValue = 0;
        this.newValue = 4;
      }
      if (this.newValue > this.dataSetLength - 1) {
        this.oldValue = 0;
        this.newValue = 4;
      }
      this.imageLink = this.imageDataSet.slice(this.oldValue, this.newValue);
    }
  }
};
</script>

<style>

</style>
