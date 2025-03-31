# Algorithmic Thinking Reminder

This project is more complex than either DeShawn's Dog Walking or Brewed Awakenings, and you are not provided with any initial, boilerplate code.

It is crucial, therefore, that you work on designing the algorithm before you write **any** code.

1. What are the main resources (i.e. tables)? Design your ERD first.
1. What are the properties of each resource?
1. What is the relationship between the resources? If it's many-to-many, what additional data must you design in your ERD?
1. Which modules should you create?
1. What is the responsibility of each module?
1. What functions should be in which modules?
1. What is the responsibility of each function?
1. What should each function return?
1. What is the specific algorithm for each function? Does the function need parameters? Should it return something?

Do all of this before you write a single line of code, or you could end up wasting hours of time writing code only to find that you need to throw it all away because you didn't design the algorithm first.

1. ParkAreas, Services, Guests, ParkService 
2.  ParkAreas:
        id int
        name varchar
        location varchar
        serviceId int
        guestId int
    ParkService:
        id int 
        parkareasId int 
        parkserviceId int 
    Services:
        id int 
        name varchar
    Guests:
         id int
        firstName varchar
        lastName varchar
        parkareaId int

3. Guests has a many-to-one relationship with ParkAreas, Services has a many-to-many relationship with ParkAreas, so there is a join table between them labeled ParkService.

4. index.html, main.css, styles.css, main.js, database.js, ParkAreas.js, ParkServices.js, EventListener.js, GuestList.js

5.  - main.js: main html and function calls 
    - ParkAreas: generates park area HTML to be used dynamically in DOM 
    - ParkServices: generates services HTML to be used dynamically in DOM
    - EventListener: holds event listener functions to be used called in main.js
    - index.html: main html structure / dom 
    - main.css: basic CSS layout
    - styles.css: flex / detailed css
    - database.js: holds main database, exports structuredClones of specific arrays
    -GuestList.js: generates guest list HTML to be used dynamically in DOM

6. - main.js: invoke -> parkAreaHTML(), parkServiceHTML(), guestListHTML(), guestCount(), trailServices()
    - ParkAreas: parkAreaHTML(),
    - ParkServices: parkServiceHTML(),
    - EventListener: trailServices(), guestCount(),
    - GuestList: guestListHTML()
    - database: getParkAreas(), getServices(), getGuestList()

7/8.  - parkAreaHTML() -> returns dynamically generated HTML string of all park areas
    - parkServiceHTML() -> returns dynamically generated HTML string of all services 
    - guestListHTML() -> returns dynamically generated HTML string of all guests
    - guestCount() -> EL function to count how many guests are in clicked on area
    - trailServices() -> EL function to see which services are offered in clicked on area
    - getParkAreas(), getServices(), getGuestList(), -> return unique copies of each database array 

9.  - parkAreaHTML() - needs getParkAreas() to iterate through
    - parkServiceHTML() -> needs getServices() to iterate through 
    - guestListHTML() -> needs getGuestList() to iterate through
    - guestCount() -> must be able to access a guestId attribute
    - trailServices() -> must be able to access a trailId attribute
    - getParkAreas(), getServices(), getGuestList() -> need to be able to access database