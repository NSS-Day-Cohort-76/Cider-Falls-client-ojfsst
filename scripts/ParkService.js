import {
  getParkAreas,
  getParkAreaService,
  getParkServices,
} from "./database.js";

const parkServices = getParkServices();
// const parkAreas = getParkAreas();
// const parkAreaServices = getParkAreaService();
export const ServiceList = () => {
  let servicesListHTML = `<section>`;

  parkServices.forEach((servicesObj) => {
    servicesListHTML += `
    <li         data-type="services" 
                class="service-strip" 
                data-id="${servicesObj.id}">
                ${servicesObj.name}
    </li>
    `;
  });
  servicesListHTML += `</section>`;
  return servicesListHTML;
};
