const database = {
    parkAreas: [
      { id: 1, name: "Chamfort River", location: "Northeast", serviceId: [1, 2, 3] },
      { id: 2, name: "Lost Wolf Hiking Trail", location: "Northern", serviceId: [4, 5, 6] },
      { id: 3, name: "Lodge Area", location: "Northwest", serviceId: [7, 8, 9, 5] },
      { id: 4, name: "Gander River", location: "Southwest", serviceId: [3, 4] },
      { id: 5, name: "Campgrounds", location: "Southern", serviceId: [9, 7, 8] },
      { id: 6, name: "Pine Bluffs Trails", location: "Southeast", serviceId: [4, 5, 10] }
    ],
    
    services: [
      { id: 1, name: "Rafting" },
      { id: 2, name: "Canoeing" },
      { id: 3, name: "Fishing" },
      { id: 4, name: "Hiking" },
      { id: 5, name: "Picnicking" },
      { id: 6, name: "Rock Climbing" },
      { id: 7, name: "Lodging" },
      { id: 8, name: "Parking" },
      { id: 9, name: "Information" },
      { id: 10, name: "Zip Lines" }
    ],
    
    guests: [
      { id: 1, firstName: "John", lastName: "Doe", parkAreaId: 1 },
      { id: 2, firstName: "Jane", lastName: "Smith", parkAreaId: 2 },
      { id: 3, firstName: "Bob", lastName: "Johnson", parkAreaId: 3 },
      { id: 4, firstName: "Alice", lastName: "Williams", parkAreaId: 3},
      { id: 5, firstName: "Charlie", lastName: "Brown", parkAreaId: 3},
      { id: 6, firstName: "Emma", lastName: "Davis", parkAreaId: 6 },
      { id: 7, firstName: "Michael", lastName: "Clark", parkAreaId: 1 },
      { id: 8, firstName: "Sarah", lastName: "Lee", parkAreaId: 2 },
      { id: 9, firstName: "David", lastName: "White", parkAreaId: 3 },
      { id: 10, firstName: "Laura", lastName: "Hall", parkAreaId: 3},
      { id: 11, firstName: "Tom", lastName: "Miller", parkAreaId: 5 },
      { id: 12, firstName: "Rachel", lastName: "Wilson", parkAreaId: 6 },
      { id: 13, firstName: "James", lastName: "Taylor", parkAreaId: 3 },
      { id: 14, firstName: "Olivia", lastName: "Anderson", parkAreaId: 2 },
      { id: 15, firstName: "Ethan", lastName: "Thomas", parkAreaId: 3 },
      { id: 16, firstName: "Sophia", lastName: "Harris", parkAreaId: 4 },
      { id: 17, firstName: "Daniel", lastName: "Martin", parkAreaId: 5 },
      { id: 18, firstName: "Grace", lastName: "Thompson", parkAreaId: 6 },
      { id: 19, firstName: "Henry", lastName: "Garcia", parkAreaId: 1 },
      { id: 20, firstName: "Isabella", lastName: "Martinez", parkAreaId: 2 }
    ]
  };



  export const getGuests = () => structuredClone(database.guests);
  export const getParkAreas = () => structuredClone(database.parkAreas)
  export const getServices = () => structuredClone(database.services)

