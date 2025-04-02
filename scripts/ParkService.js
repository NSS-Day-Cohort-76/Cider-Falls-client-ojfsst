import { getParkAreas, getParkServices } from "./database.js";

const parkServices = getParkServices();
const parkAreas = getParkAreas();
export const ServiceList = () => {
  let servicesListHTML = `<ul>`;

  parkServices.forEach((servicesObj) => {
    servicesListHTML += `
              <li 
              data-type="services"
              data-name="${servicesObj.name}" 
              data-id="${servicesObj.id}"
              class="services-strip">
              <h2 class="service-strip">
              ${servicesObj.name}</h2>
    </li>
    `;
  });
  servicesListHTML += `</ul>`;
  return servicesListHTML;
};


// export const servicesEventListener = () => {
//   document.addEventListener("click", function (clickedItem) {
//     const itemClicked = clickedItem.target;

//     if (itemClicked.dataset.type === "services") {
//       const servicesId = parseInt(itemClicked.dataset.id);

//       // Find all areas where the service is available
//       const matchingAreas = parkAreas.filter(
//         (area) => area.serviceId === servicesId
//       );

//       if (matchingAreas.length > 0) {
//         // Collect the names of all matching areas
//         const areaNames = matchingAreas.map((area) => area.name).join(", ");
//         window.alert(`This service is offered on these trails: ${areaNames}`);
//       } else {
//         window.alert("No trails offer this service.");
//       }
//     }
//   });
// };
