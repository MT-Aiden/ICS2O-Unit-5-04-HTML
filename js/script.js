// Aiden McLeod
// ICS2O-Unit5-04-HTML
// May 2 2022

'use strict'
/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-04-HTML/sw.js", {
    scope: "/ICS2O-Unit5-04-HTML/",
  })
}

/**
 * Checks if the user is eligible for student pricing for a museum depending on their age and the current day of the week.
 */
function onButtonClick() {
  const age = document.getElementById("age").value
  const day = document.getElementById("days").value

  if (day == "tuesday" || day == "thursday" || age > 12 && age < 22) {
    document.getElementById("result").innerHTML = "<h5>You can pay with the museum's student pricing.</h5>"
  } else {
    document.getElementById("result").innerHTML = "<h5>You must pay with the museum's regular pricing.</h5>"
  }
}