import { Profile } from "./Account.js"

export class Job {
  constructor(data) {
    this.id = data.id
    this.company = data.company
    this.creatorId = data.creatorId
    this.description = data.description
    this.hours = data.hours
    this.jobTitle = data.jobTitle
    this.rate = data.rate
    this.seller = new Profile(data.seller)
    this.createdAt = new Date(data.createdAt)
  }
}