import { Employee } from "./User";
import { Company } from "./Company";

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(htmlElementID: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(htmlElementID) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  addEmployeeMarker(employee: Employee): void {
    const employeeMarker = new google.maps.Marker({
      map: this.googleMap,
      position: { lat: employee.location.lat, lng: employee.location.lng },
    });
  }

  addCompanyMarker(company: Company): void {
    const companyMarker = new google.maps.Marker({
      map: this.googleMap,
      position: { lat: company.location.lat, lng: company.location.lng },
    });
  }
}
