document.getElementById('mobile-menu-btn').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.addEventListener("DOMContentLoaded", function () {
    // Get elements from the DOM
    const truckRadios = document.querySelectorAll('input[name="truck"]');
    const pickupPointSelect = document.getElementById("pickup-point");
    const destinationSelect = document.getElementById("destination");
    const weightInput = document.getElementById("weight");
    const countInput = document.getElementById("count");
    const totalPriceElem = document.getElementById("total-price");
    const truckTypeElem = document.getElementById("truck-type");
    const pickupElem = document.getElementById("pickup");
    const destinationElem = document.getElementById("destination-selected");
    const weightElem = document.getElementById("weight-selected");
    const countElem = document.getElementById("count-selected");

    // Prices for truck types
    const truckPrices = {
        small: 500,
        medium: 1000,
        large: 1500
    };

    // Event listener to update the total when inputs change
    function updateTotal() {
        let truckType = document.querySelector('input[name="truck"]:checked');
        let truckPrice = truckType ? truckPrices[truckType.value] : 0;

        let weight = parseInt(weightInput.value) || 0;
        let count = parseInt(countInput.value) || 0;

        let total = truckPrice + (weight * 10) + (count * 20); // Example price calculation based on weight and count

        // Update the pricing summary
        truckTypeElem.textContent = truckType ? truckType.nextElementSibling.textContent : "N/A";
        pickupElem.textContent = pickupPointSelect.value || "N/A";
        destinationElem.textContent = destinationSelect.value || "N/A";
        weightElem.textContent = weight;
        countElem.textContent = count;
        totalPriceElem.textContent = total;
    }

    // Add event listeners to all relevant fields
    truckRadios.forEach(radio => radio.addEventListener("change", updateTotal));
    pickupPointSelect.addEventListener("change", updateTotal);
    destinationSelect.addEventListener("change", updateTotal);
    weightInput.addEventListener("input", updateTotal);
    countInput.addEventListener("input", updateTotal);

    // Initial update
    updateTotal();

    // JavaScript to handle button click and redirect to contact page
    document.getElementById('confirm-order').addEventListener('click', function () {
        window.location.href = "/contact"; // Replace with your actual contact page URL
    });
});