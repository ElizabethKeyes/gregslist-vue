<template>
  <div class="container-fluid">
    <section class="row justify-content-center">
      <div v-if="house" class="col-10">
        <HouseCard :House="house" />
      </div>
    </section>
  </div>
</template>


<script>
import { computed, onMounted } from "vue";
import HouseCard from "../components/HouseCard.vue";
import { AppState } from "../AppState.js"
import { useRoute } from "vue-router";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { housesService } from "../services/HousesService.js";

export default {
  setup() {
    const route = useRoute()
    async function getHouseById() {
      try {
        await housesService.getHouseById(route.params.houseId)
      } catch (error) {
        logger.log(error)
        Pop.error(error.message)
      }
    }
    onMounted(() => {
      getHouseById();
    })
    return {
      house: computed(() => AppState.house),
    };
  },
  components: { HouseCard }
}
</script>


<style lang="scss" scoped></style>