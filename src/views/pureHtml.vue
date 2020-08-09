<template>
  <!-- Page Container -->
  <div class="container-html">
    <div class="row-html">
      <h2 class="ml-sm-html mb-md-html f-weight-light">Photo Fetcher</h2>
    </div>
    <div class="row-html">
      <!-- Toggle button -->
      <div class="col-html">
        <toggleBtn></toggleBtn>
        <span class="font-size-sm f-weight-light ml-sm-html">Make photos grayscale</span>
      </div>
      <!-- Toggle button -->
      <!-- Fetch buttom -->
      <div class="col-html align-right">
        <fetchBtn @GeneratorImage="imageGenerator($event)"></fetchBtn>
      </div>
      <!-- Fetch buttom -->
    </div>
    <div class="row-html">
      <!-- Image grid -->
      <div class="col-html" v-for="(link,index) in imageLink" :key="index">
        <imageGrid :image="link"></imageGrid>
      </div>
      <!-- Image grid -->
    </div>
  </div>
  <!-- Page Container -->
</template>
<script>
import axiosService from "../service/axiosCall";

// Dynamic import of components
const toggleBtn = () => ({
  component: import("@/components/html/toggleBtn")
});
const fetchBtn = () => ({
  component: import("@/components/html/fetchBtn")
});
const imageGrid = () => ({
  component: import("@/components/html/imageGrid")
});

export default {
  name: "pureHtml",
  components: {
    toggleBtn,
    fetchBtn,
    imageGrid
  },
  data() {
    return {
      imageDetails: [],
      imageDataSet: [],
      oldValue: "",
      newValue: "",
      dataSetLength:0
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
    imageGenerator(e) {
      this.imageDetails = [];
      if (e) {
        this.oldValue = this.newValue;
        this.newValue += e;
      } else {
        this.oldValue = 0;
        this.newValue = 4;
      }
      if (this.newValue > this.dataSetLength - 1) {
        this.oldValue = 0;
        this.newValue = 4;
      }
      this.imageDetails = this.imageDataSet.slice(this.oldValue, this.newValue);
    }
  }
};

</script>


