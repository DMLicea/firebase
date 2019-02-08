# firebase

* "In this assignment, you'll create a train schedule application that incorporates Firebase to host arrival and departure data. Your app will retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station."

* Setup html, css, and js pages.

* Need a link to Firebase and the Moment.js library, alongside jQuery, as well as storing the Firebase data as a variable.

* Create a table for the times and a form to submit new information.
* * The table includes name of train, destination, frequency in minutes, next arrival, and minutes till arrival.

* Create a click function for the button to add new schedules.
* * Train name, destination, first arrival time, and frequency of arrivals are all stored as variables.
* * In turn, all of those are stored as one variable to push to Firebase.

* Create a "child_added" function to turn that stored data into new variables to use with an .append function so as to add the new information to the table.

* For "Next Arrival" and "Minutes Away," calculations must be done using the moment() function allowed by the moment.js library.

* "Minutes Away" is based on current time and Next Arrival.
* * Convert first arrival time into minutes, create variable
* * Calculate difference in time, create variable
* * Calculate remaining time by dividing difference by frequency of arrivals, create variable
* * Subtract remaining time from frequency of arrivials
* * That variable will be the amount of minutes away

* "Next Arrival" is based on first arrival time and frequency of arrivals.
* * Add "Minutes away" to the current time, create variable
* * Convert that variable to the hh:mm format.