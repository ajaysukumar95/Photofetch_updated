<template>
  <button type="button" class="btn-color" @click="randomGenerator()">Fetch New Photos</button>
</template>
<script>
export default {
  name: "fetchBtn",
  data() {
    return {
        count:4
    };
  },
  methods: {
    //   Emit event to parent component
    randomGenerator() {
      this.$emit("GeneratorImage",this.count);
    }
  }
};
</script>
<style scoped>
.btn-color {
  cursor: pointer;
  background-color: blueviolet;
  border: blueviolet;
  padding: 8px 12px;
  color: #fff;
  border: none;
  font-size: 12px;
  border-radius: 2px;
}
.btn-color:active {
  cursor: pointer;
  background-color: blueviolet;
  border: blueviolet;
  padding: 8px 12px;
  color: #fff;
  border: none;
  font-size: 12px;
  border-radius: 2px;
}
</style>