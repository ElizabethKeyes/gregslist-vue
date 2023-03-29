<template>
  <div class="container-fluid">
    <section class="row">
      <div v-for="j in jobs" :key="j.id" class="col-12 ">
        <JobCard :Job="j" />
      </div>
    </section>
  </div>
  <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-light rounded-pill job-button"><i
      class="mdi mdi-plus"></i> Create Listing</button>
  <ModalComponent>
    <JobForm />
  </ModalComponent>
</template>


<script>
import { onMounted, computed } from "vue"
import { jobsService } from '../services/JobsService.js'
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js"
import { AppState } from "../AppState.js"
import JobCard from "../components/JobCard.vue"
import ModalComponent from "../components/ModalComponent.vue"
import JobForm from "../components/JobForm.vue"


export default {
  setup() {
    async function getAllJobs() {
      try {
        await jobsService.getAllJobs();
      }
      catch (error) {
        logger.log(error);
        Pop.error(error.message);
      }
    }
    onMounted(() => {
      getAllJobs();
    });
    return {
      jobs: computed(() => AppState.jobs),
    };
  },
  components: { JobCard, ModalComponent, JobForm }
}
</script>


<style lang="scss" scoped>
.job-button {
  position: fixed;
  bottom: 50px;
  right: 25px;
  border: black solid 1px
}
</style>