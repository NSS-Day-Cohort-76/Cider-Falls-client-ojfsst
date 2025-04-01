
// dunno name of function to import yet
import { getParkGuests } from "./database.js"

const parkAreaElements = document.querySelectorAll(".park-area");

//const guestList = getParkGuests();

export const GuestList = () => {
const areaElements = document.querySelectorAll(".park-area")

    areaElements.forEach(areaElement => {
        areaElement.addEventListener("click", () => {
            const areaId = parseInt(areaElement.getAttribute("data-id"))

            const guestList = getParkGuests()
            const visitorCount = guestList.filter(guest => guest.parkAreaId === areaId).length
            alert(`There are ${visitorCount} guests in this area`)
        })
    })

}





/* old code..

parkAreaElements.forEach(areaElement => {
    areaElement.addEventListener("click", () => {
        const areaId = parseInt(areaElement.getAttribute("data-id"))
        const visitorCount = guestList.filter(guest => guest.parkAreaId === areaId).length
        alert(`There are ${visitorCount} in this area`)
    })
})



*/