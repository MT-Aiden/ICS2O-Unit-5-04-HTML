// Aiden McLeod
// ICS2O-Unit5-04-HTML
// May 2 2022

"use strict";
/**
 * Check service worker.
 */
function myButtonClicked() {
  const age = document.getElementById("age").value
  const day = document.getElementById("days").value 

  /**
 * Checks if the user is eligible for student pricing for a museum depending on their age and the current day of the week.
 */
  if ((day == "tuesday") || (day == "thursday") || (age > 12 && age < 21)) {
    document.getElementById("answers").innerHTML = "You're eligible for student pricing!"
  }
  else {
    document.getElementById("answers").innerHTML = "You must pay regular price."
  }
}