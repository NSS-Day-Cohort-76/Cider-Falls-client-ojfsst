import { getParkAreas, getParkGuests } from "./database.js";
import { addParkAreaEventListener } from "./EventListener.js";

export const GuestList = () => {
  const parkAreas = getParkAreas();
  const guests = getParkGuests();
  const container = document.getElementById("park-areas-container");

  let parkAreaHTML = "";
  for (const area of parkAreas) {
    parkAreaHTML += `
      <div class="park-area" data-id="${area.id}">
        ${area.name}
      </div>
    `;
  }
  container.innerHTML = parkAreaHTML;



addParkAreaEventListener(guests)
}