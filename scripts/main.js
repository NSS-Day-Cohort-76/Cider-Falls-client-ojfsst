
import { GuestList } from "./GuestList.js";
import { ServiceList } from "./ServiceList.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<header> 
  <h1>Cider Falls</h1>
  <img src="" alt="Cider Logo">
</header>

<div class="">
  <section class="">
    <h2>Park Areas</h2>
    <div id="park-areas-container"></div>
  </section>

  <section class="">
    <h2>Services</h2>
    <div id="services-container"></div>
  </section>

  <section class=""> 
    <h2>Guests</h2>
  </section>    
</div>

<footer>
  <h2></h2>
</footer>
`;
mainContainer.innerHTML = applicationHTML


GuestList()
ServiceList();