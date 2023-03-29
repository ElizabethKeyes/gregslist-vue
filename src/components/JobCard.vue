<template>
  <div class="job-card text-dark d-flex flex-column justify-content-evenly">
    <h2>{{ Job.jobTitle }} for {{ Job.company }}</h2>
    <p>{{ Job.description }}</p>
    <p>${{ Job.rate }} per Hour, {{ Job.hours }} hours per Week</p>
  </div>
</template>


<script>
import { Job } from "../models/Job.js";

export default {
  props: {
    Job: {
      type: Job,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.job-card {
  background-color: #e9ecef;
  border-radius: 5px;
  filter: drop-shadow(0px 0px 2px black);
  min-height: 20vh;
  margin-bottom: 1em;
  margin-top: 1em;
  padding: .5em;
}
</style>