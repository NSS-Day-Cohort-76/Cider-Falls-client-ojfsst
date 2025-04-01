
// Event Listener for Clicking on location shows number of guests at current area
export const addParkAreaEventListener = (guests) => {
    const container = document.getElementById("container")

container.addEventListener("click", ClkEvent => {
    if (ClkEvent.target.classList.contains("park-area")) {
      const areaId = parseInt(ClkEvent.target.dataset.id, 10);
      const visitorCount = guests.filter(guest => guest.parkAreaId === areaId).length;
      alert(`there are ${visitorCount} visitors in this area.`);
    }
  });
};



