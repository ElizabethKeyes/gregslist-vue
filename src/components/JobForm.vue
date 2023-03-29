<template>
  <div class="modal-header">
    <h1 class="modal-title fs-5" id="exampleModalLabel">Create House Listing</h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <form class="modal-body row p-2" @submit.prevent="createJob()">
    <div class="col-6 mb-2">
      <label for="company">Company</label>
      <input type="text" required class="form-control" v-model="editable.company">
    </div>
    <div class="col-6 mb-2">
      <label for="jobTitle">Job Title</label>
      <input type="number" required class="form-control" v-model="editable.jobTitle">
    </div>
    <div class="col-6 mb-2">
      <label for="rate">Hourly Rate</label>
      <input type="number" required class="form-control" v-model="editable.rate">
    </div>
    <div class="col-6 mb-2">
      <label for="hours">Hours</label>
      <input type="number" required class="form-control" v-model="editable.hours">
    </div>
    <div class="col-12 mb-2">
      <label for="description">Description</label>
      <input type="number" required class="form-control" v-model="editable.description">
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="Submit" class="btn btn-primary" data-bs-dismiss="modal">
        Create Job
      </button>
    </div>

  </form>
</template>


<script>
import { ref } from "vue";

export default {
  setup() {
    const editable = ref({})
    return {
      editable
    }
  }
}
</script>


<style lang="scss" scoped></style>