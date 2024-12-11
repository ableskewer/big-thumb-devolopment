//age of earth increasing
//age of earth increasing
//age of earth increasing
const counterElement = document.getElementById("yearsold");

// Function to initialize the counter from history or default value
function initializeCounter() {
  // If navigating back/forward, use the history state
  if (history.state && history.state.counter !== undefined) {
    return history.state.counter;
  }

  // On page refresh, reset to the default value
  return 4.543000000;
}

let counter = initializeCounter();

// Immediately update the UI with the current counter value
counterElement.innerText = counter.toFixed(9);

// Function to update the counter
function updateCounter() {
  counter += 0.000000001;
  counterElement.innerText = counter.toFixed(9);

  // Update the history state to reflect the latest counter value
  history.replaceState({ counter: counter }, "");
}

// Event listener for back/forward navigation (popstate event)
window.addEventListener("popstate", (event) => {
  if (event.state && event.state.counter !== undefined) {
    counter = event.state.counter; // Restore the counter from history state
    counterElement.innerText = counter.toFixed(9); // Instantly update the UI
  }
});

// Push the initial state when the page first loads
if (!history.state) {
  history.replaceState({ counter: counter }, ""); // Store the initial state
}

// Update the counter every 500 milliseconds
setInterval(updateCounter, 500);