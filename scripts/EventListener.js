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
