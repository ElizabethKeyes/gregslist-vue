import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "./AxiosService.js"


class HousesService {
  async getHouses() {
    const res = await api.get('auth/api/houses')
    AppState.houses = res.data.map(h => new House(h))
    console.log('[CLASSED HOUSES]', AppState.houses)
  }

  async createHouse(houseData) {
    const res = await api.post('auth/api/houses', houseData)
    AppState.houses.unshift(new House(res.data))
  }
}

export const housesService = new HousesService()