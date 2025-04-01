import { getParkServices, getParkAreas } from "./database.js";

export const ServiceList = () => {

    const services = getParkServices()
    const parkAreas = getParkAreas()
    const container = document.getElementById("services-container")    
    
    let serviceHTML = ""
    for (const service of services) {
        serviceHTML += `
        <div class="service" data-id="${service.id}"
        >${service.name}
        </div>
        `
    }
}

container.innerHTML = serviceHTML;