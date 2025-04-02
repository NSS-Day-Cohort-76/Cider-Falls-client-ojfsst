import { getParkGuests } from "./database.js";

const guests = getParkGuests();

export const guestList = () => {
  let guestHTML = `<ul>`;

  guests.forEach((guest) => {
    guestHTML += ` 
<li        data-type="guest"
            class="guest"
            data-id="${guest.id}">
            ${guest.firstName}
</li>
               `;
  });
  guestHTML += `</ul>`;
  return guestHTML;
};
