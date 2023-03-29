<template>
  <div class="house-card text-center">
    <img :src="House.imgUrl" :alt="House.description">
    <h4 class="mt-2">{{ House.bedrooms }} Bedrooms | {{ House.bathrooms }} Bathrooms</h4>
  </div>
</template>


<script>
import { House } from "../models/House.js";

export default {
  props: {
    House: {
      type: House,
      required: true
    },
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.house-card {
  background-color: #e9ecef;
  border-radius: 5px;
  filter: drop-shadow(0px 0px 2px black);
  min-height: 35vh;
  margin-bottom: 1em;
  margin-top: 1em;
  cursor: pointer;
}

.house-card:hover {
  transform: scale(1.02);
}

img {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 25vh;
  object-position: center;
  object-fit: cover;
  width: 100%
}
</style>