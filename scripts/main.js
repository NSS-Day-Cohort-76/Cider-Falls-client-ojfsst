import { servicesEventListener } from "./EventListener.js";
import { addParkAreaEventListener } from "./EventListener.js";
import { guestList } from "./GuestList.js";
import { parkHTML } from "./ParkArea.js";
import { ServiceList } from "./ParkService.js";
import { getParkAreas, getParkAreaService, getParkGuests } from "./database.js";


const mainContainer = document.querySelector("#container");

const applicationHTML = `
<header> 
  <h1>Cider Falls</h1>
  <img src="" alt="Cider Logo">
</header>
<div class="park-areas-container">
        <section class="service-strip">
            <h2>Services</h2>
            ${ServiceList()}
            </section>
        </section>    
    <section class="park-area">
        <h2 class="park-area">Park Areas</h2>
        ${parkHTML()}
        </div>
    </section>
     <section class="guests">
     <h2>Guests</h2>
     ${guestList()}
     </section> 
     </div>
     <footer>
<h2></h2>
</footer>
`;

mainContainer.innerHTML = applicationHTML;

addParkAreaEventListener(getParkGuests());
servicesEventListener(getParkAreaService(), getParkAreas());
