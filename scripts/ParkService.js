import { getParkServices } from "./database.js";

const parkServices = getParkServices();

export const ServiceList = () => {
  let servicesListHTML = `<section>`;

  parkServices.forEach((servicesObj) => {
    servicesListHTML += `
    <section data-type="services" class="services-strip">
            <h2 class="service-strip" 
                data-type="${servicesObj.id}">
                ${servicesObj.name}</h2>
    </section>
    `;
  });
  servicesListHTML += `</section>`;
  return servicesListHTML;
};
