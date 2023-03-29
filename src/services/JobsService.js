import { AppState } from "../AppState.js"
import { Job } from "../models/Job.js"
import { api } from "./AxiosService.js"

class JobsService {
  async getAllJobs() {
    const res = await api.get('/auth/api/jobs')
    AppState.jobs = res.data.map(j => new Job(j))
  }

  async createJob(jobData) {
    const res = await api.post('/auth/api/jobs', jobData)
    AppState.jobs.push(new Job(res.data))
  }
}

export const jobsService = new JobsService()