 <template>
   <v-switch label="Make photos grayscale" @click="toggleGreyScale()" inset value="John" color="green" class="ma-0"></v-switch>
</template>
<script>
// Import event bus for sibiling communication
import { EventBus } from "@/eventBus";
export default {
  name: "vtoggleBtn",
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

