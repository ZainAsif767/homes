import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  url = 'https://localhost:3000/locations';

  async getAllHousingLocations():
    Promise<HousingLocation[]> {
    try {
      const data = await fetch(this.url);
      return await data.json() ?? [];
    } catch (error) {
      console.log('Error fetching Data:', error);
      throw error;
    }
  }

  async getHousingLocationById(id: number):
    Promise<HousingLocation | undefined> {
    try {
      const data = await fetch(`${this.url}/${id}`);
      return await data.json() ?? {};
    } catch (error) {
      console.log('Error fetching data by ID:', error);
      throw error;
    }
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Home Applications received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`)
  }
}

