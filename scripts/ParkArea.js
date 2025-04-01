import { getParkAreas } from "./database.js"

const parks = getParkAreas()

export const parkAreaHTML = () => {
    let html = "<ul>"

    for (const park of parks) {
        html += `<li
                data-type="parks"
                data-id=${park.id}>
                ${park.name}</li>`
    }
    html += "</ul>"
    return html
}