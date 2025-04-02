import { servicesEventListener } from "./EventListener.js";
import { addParkAreaEventListener } from "./EventListener.js";
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
    <section class="parkArea">
        <h2>Park Areas</h2>
        <div id="park-areas-container">
        ${parkHTML()}
        </div>
    </section>
    <section class="services">
        <h2>Services</h2>
        <div id="services-strip"></div>
        ${ServiceList()}
        </section>
    </section>    
</div>
<footer>
<h2></h2>
</footer>
`;

mainContainer.innerHTML = applicationHTML;

addParkAreaEventListener(getParkGuests());
servicesEventListener(getParkAreaService(), getParkAreas());
