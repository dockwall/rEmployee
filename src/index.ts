import { Employee } from "./User";
import { Company } from "./Company";

const employee = new Employee();
const company = new Company();

console.log(employee);
console.log(company);

const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});

// let i = 1;
// setInterval(() => map.setZoom(i++), 1000);
