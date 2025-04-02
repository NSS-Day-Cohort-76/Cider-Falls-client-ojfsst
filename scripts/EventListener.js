import { getParkGuests } from "./database.js";

// Event Listener for Clicking on location shows number of guests at current area
export const addParkAreaEventListener = (guests) => {
  const container = document.getElementById("container");

  container.addEventListener("click", (ClkEvent) => {
    const clickEvent = ClkEvent.target.closest("[data-type='parks']");

    if (clickEvent) {
      const areaId = parseInt(clickEvent.dataset.id, 10);
      const visitorCount = guests.filter(
        (guest) => guest.parkAreaId === areaId
      ).length;
      alert(`there are ${visitorCount} visitors in this area.`);
    }
  });
};

export const servicesEventListener = (parkService, parkAreas) => {
  document.addEventListener("click", function (clickedItem) {
    const itemClicked = clickedItem.target;

    if (itemClicked.dataset.type === "services") {
      const servicesId = parseInt(itemClicked.dataset.id);

      // Collect matching park area names
      const matchingParkNames = [];

      for (const service of parkService) {
        if (service.serviceId === servicesId) {
          const parkNames = parkAreas
            .filter((item) => item.id === service.parkAreaId)
            .map((item) => item.name);
          matchingParkNames.push(...parkNames);
        }
      }

      // Display the alert after the loop
      if (matchingParkNames.length > 0) {
        const parkNamesString = matchingParkNames.join(", ");
        window.alert(
          `This service is offered on these trails: ${parkNamesString}`
        );
      } else {
        window.alert("No park areas offer this service.");
      }
    }
  });
};
