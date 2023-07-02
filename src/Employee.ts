import { faker } from "@faker-js/faker";
import type { Mappable } from "./CustomMap";

export class Employee implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  getMarkerContent(): string {
    return `${this.name} (employee)`;
  }
}
