<template>
  <div class="modal-header">
    <h1 class="modal-title fs-5" id="exampleModalLabel">Create House Listing</h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <form class="modal-body row p-2" @submit.prevent="createHouse()">
    <div class="col-6 mb-2">
      <label for="bedrooms">Bedrooms</label>
      <input type="number" required min="1" class="form-control" v-model="editable.bedrooms">
    </div>
    <div class="col-6 mb-2">
      <label for="bathrooms">Bathrooms</label>
      <input type="number" required min="1" class="form-control" v-model="editable.bathrooms">
    </div>
    <div class="col-6 mb-2">
      <label for="levels">Levels</label>
      <input type="number" required min="1" class="form-control" v-model="editable.levels">
    </div>
    <div class="col-6 mb-2">
      <label for="year">Year</label>
      <input type="number" required min="1800" class="form-control" v-model="editable.year">
    </div>
    <div class="col-12 mb-2">
      <label for="price">Price</label>
      <input type="number" required min="1000" class="form-control" v-model="editable.price">
    </div>
    <div class="col-12 mb-2">
      <label for="description">Description</label>
      <input type="text" required minlength="10" maxlength="150" class="form-control" v-model="editable.description">
    </div>
    <div class="col-12 mb-2">
      <label for="imgUrl">Image URL</label>
      <input type="url" required class="form-control" v-model="editable.imgUrl">
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="Submit" class="btn btn-primary" data-bs-dismiss="modal">
        Create House
      </button>
    </div>

  </form>
</template>


<script>
import { ref } from "vue";
import { housesService } from "../services/HousesService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      async createHouse() {
        try {
          const houseData = editable.value
          await housesService.createHouse(houseData)
        } catch (error) {
          logger.log(error)
          Pop.error(error.message)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped></style>