<template>
<div class="image-container">
  <div :style="imageStyle"></div>
  <div class="image-details">
      <p class="ma-0-html f-weight-light">{{image.author}}</p>
      <p class="ma-0-html sub-title" :title="image.url">{{image.url}}</p>
  </div>
</div>
</template>

<script>
// Import event bus for sibiling communication
import { EventBus } from "@/eventBus";

export default {
  name: "imageGrid",
  props: ["image"],
  data() {
    return {
      filterData: "",
      heightData: "260px",
      widthData: "367px",
    };
  },

  created() {
    // Receive greyscale value from toggle btn
    EventBus.$on("greyScaleValue", data => {
      this.filterData = data;
    });
  },
  computed: {
    // Compute the image and greyscale value
    imageStyle() {
      return {
        background: `url(${this.image.download_url}) 0% 0% /cover`,
        filter: this.filterData,
        height: this.heightData,
        width: this.widthData 
      };
    }
  }
};
</script>
<style scoped>
.image-container{
    position: relative;
    display: block;
}
.image-details{
    position: absolute;
    padding: 15px 20px;
    height: 66px;
    width: 100%;
    bottom: 0;
    background: #333333b8;
    color: #fff;
}
.sub-title{
    white-space: nowrap;
    width: 300px;
    font-weight: 300;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #ffffffbf;
    margin-top: 2px;
}
</style>