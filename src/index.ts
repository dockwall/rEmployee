import { Employee } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const customMap = new CustomMap("map");

const employee = new Employee();
const company = new Company();

console.log(employee);
console.log(company);
console.log(customMap);

customMap.addMarker(employee);
customMap.addMarker(company);
