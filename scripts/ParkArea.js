import { getParkAreas, getParkServices } from "./database.js";

const parks = getParkAreas();
const services = getParkServices();

export const parkHTML = () => {
  let parkHTML = `<ul>`;

  parks.forEach((park) => {
    parkHTML += `
<li data-type="parks"
    class="park-area"
    data-id="${park.id}">
            <h2> In the ${park.location} section</h2>
            <p>there is the ${park.name}</p>
            </li>
`;
  });
  parkHTML += `</ul>`;
  return parkHTML;
};
