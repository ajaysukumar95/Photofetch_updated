<template>
  <label class="switch">
    <input type="checkbox" @click="toggleGreyScale()" />
    <div class="slider round">
      <span class="close">x</span>
    </div>
  </label>
</template>
<script>
// Import event bus for sibiling communication
import { EventBus } from "@/eventBus";
export default {
  name: "toggleBtn",
  data() {
    return {
      greyScale: "",
      isGreyScale: false
    };
  },
  methods: {
    //   Pass greyScale value to imageGrid component on toggle
    toggleGreyScale() {
      this.isGreyScale = !this.isGreyScale;
      if (this.isGreyScale) {
        this.greyScale = "grayscale(100%)";
        EventBus.$emit("greyScaleValue", this.greyScale);
      } else {
        this.greyScale = "none";
        EventBus.$emit("greyScaleValue", this.greyScale);
      }
    }
  }
};
</script>

<style  scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 46px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #808080;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
height: 18px;
    width: 18px;
  left: 1px;
  bottom: 1px;
  background-color: white;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #00cc44;
}

input:focus + .slider {
  box-shadow: 0 0 1px #00cc44;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.close {
  float: right;
  margin-right: 8px;
  color: #cccbcb;
}
</style>