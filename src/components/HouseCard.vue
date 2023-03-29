<template>
  <router-link :to="{ name: 'HouseDetails', params: { houseId: House.id } }">

    <div v-if="route.name == 'HouseDetails'" class="large-house-card text-center text-dark">
      <img :src="House.imgUrl" :alt="House.description" class="large-img">
      <h5>${{ (House.price).toLocaleString() }}</h5>
      <h5 class="mt-2">
        {{ House.bedrooms }} Bedroom{{ House.bedrooms > 1 ? 's' : '' }} |
        {{ House.bathrooms }} Bathroom{{ House.bathrooms > 1 ? 's' : '' }} |
        {{ House.levels }} Level{{ House.levels > 1 ? 's' : '' }}
      </h5>
      <h6>{{ House.description }}</h6>
    </div>

    <div v-if="route.name == 'Houses'" class="house-card text-center text-dark">
      <img :src="House.imgUrl" :alt="House.description" class="img">
      <h4 class="mt-2">{{ House.bedrooms }} Bedroom{{ House.bedrooms > 1 ? 's' : '' }} | {{ House.bathrooms }} Bathroom{{
        House.bathrooms > 1 ? 's' : '' }}
      </h4>
    </div>
  </router-link>
</template>


<script>
import { useRoute } from "vue-router";
import { House } from "../models/House.js";

export default {
  props: {
    House: {
      type: House,
      required: true
    },
  },
  setup() {
    const route = useRoute()
    return {
      route
    }
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
}

.large-house-card {
  background-color: #e9ecef;
  border-radius: 5px;
  filter: drop-shadow(0px 0px 2px black);
  min-height: 78vh;
  margin-bottom: 1em;
  margin-top: 3em;
  cursor: pointer;
}

.house-card:hover {
  transform: scale(1.02);
}

.img {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 25vh;
  object-position: center;
  object-fit: cover;
  width: 100%
}

.large-img {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 65vh;
  object-position: center;
  object-fit: cover;
  width: 100%;
  margin-bottom: .5em;
}
</style>