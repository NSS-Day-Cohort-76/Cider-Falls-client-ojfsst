import { getParkAreas } from "./database.js";
import { servicesEventListener } from "./EventListener.js";
import { parkAreaHTML } from "./ParkArea.js";
import { ServiceList } from "./ParkService.js";
import { getParkGuests } from "./database.js";
import { addParkAreaEventListener } from "./EventListener.js";


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
        ${parkAreaHTML()}
        </div>
    </section>
    <section class="services">
        <h2>Services</h2>
            <div id="services-strip">
            ${ServiceList()}
            </div>
        </section>
    </section>    
</div>
<footer>
<h2></h2>
</footer>
`;

mainContainer.innerHTML = applicationHTML;

addParkAreaEventListener(getParkGuests());
servicesEventListener(getParkAreas())