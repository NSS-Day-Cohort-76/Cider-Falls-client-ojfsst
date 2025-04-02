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

export const servicesEventListener = (parks, services) => {
  const container = document.getElementById("container")
  container.addEventListener("click", (clickedItem) => {

    const itemClicked = clickedItem.target
    if (itemClicked.dataset.type === "services"){
        for (const park of parks){
          if (park.id === parseInt(itemClicked.dataset.id)){
            window.alert(`${itemClicked.dataset.name} is offered at ${park.name}`)
          } 
        }
      }
    }
  )
}