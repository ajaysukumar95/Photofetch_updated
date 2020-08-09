<template>
  <v-btn medium color="purple" @click="randomGenerator()" dark>Fetch New Photo</v-btn>
</template>
<script>
export default {
  name: "vfetchBtn",
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
