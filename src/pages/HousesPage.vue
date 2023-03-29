<template>
  <div class="container-fluid">
    <section class="row">
      <div v-for="h in houses" :key="h.id" class="col-md-4 col-12">
        <HouseCard :House="h" />
      </div>
    </section>
  </div>
</template>


<script>
import { onMounted, computed } from "vue";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { housesService } from "../services/HousesService.js"
import { AppState } from '../AppState.js'
import HouseCard from "../components/HouseCard.vue";

export default {
  setup() {
    async function getHouses() {
      try {
        await housesService.getHouses();
      }
      catch (error) {
        logger.log(error);
        Pop.error(error.message);
      }
    }
    onMounted(() => {
      getHouses();
    });
    return {
      houses: computed(() => AppState.houses)
    };
  },
  components: { HouseCard }
}
</script>


<style lang="scss" scoped></style>