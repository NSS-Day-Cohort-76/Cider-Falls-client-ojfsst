
import { GuestList } from "./GuestList.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<header> 
  <h1>Cider Falls</h1>
  <img src="" alt="Cider Logo">
</header>

<div class="">
  <section class="">
    <h2>Park Areas</h2>
    <div class="park-area" data-id="1">Chamfort River</div> 
    <div class="park-area" data-id="2">Lost Wolf Hiking Trail</div>
    <div class="park-area" data-id="3">Lodge Area</div>
    <div class="park-area" data-id="4">Gander River</div>
    <div class="park-area" data-id="5">Campgrounds</div>
    <div class="park-area" data-id="6">Pine Bluff Trails</div>
  </section>

  <section class="">
    <h2>Services</h2>
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