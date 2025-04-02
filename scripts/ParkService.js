import { getParkServices } from "./database.js";

const parkServices = getParkServices();
export const ServiceList = () => {
  let servicesListHTML = `<ul>`;

  parkServices.forEach((servicesObj) => {
    servicesListHTML += `
    
    <li         data-type="services" 
                class="service-tags" 
                data-id="${servicesObj.id}">
                ${servicesObj.name}
    </li>
    
    `;
  });
  servicesListHTML += `</ul>`;
  return servicesListHTML;
};
