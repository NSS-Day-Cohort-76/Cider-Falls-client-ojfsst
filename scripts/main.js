import { parkAreaHTML } from './ParkArea.js'


const mainContainer = document.querySelector("#container")

const applicationHTML = `
<header> 
<h1>Cider Falls</h1>
<img src="" alt="Cider Logo">
</header>
<div class="">
    <section class="">
        <h2>Park Areas</h2>
        ${parkAreaHTML()}
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
`

mainContainer.innerHTML = applicationHTML