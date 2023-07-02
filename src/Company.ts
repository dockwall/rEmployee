import { faker } from "@faker-js/faker";
import type { Mappable } from "./CustomMap";

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  getMarkerContent(): string {
    return `
    <p>Company <b>"${this.name}"</b></p>
    <p><i>${this.catchPhrase}</i></p>
    `;
  }
}
