import { getParkAreas, getParkServices } from "./database.js"

const parks = getParkAreas()
const services = getParkServices()

export const parkAreaHTML = () => {
    let html = ""

    for (const park of parks) {
        const serviceNames = park.serviceId.map(id => services.find(service => service.id === id)?.name).join(", ")

        html += `<section
                data-type="parks"
                data-id=${park.id}>
                    <h2> In the ${park.location} section, there is the ${park.name}</h2>
                    <p>It supports ${serviceNames}</p>
                </section>
                `
    }
    return html
}