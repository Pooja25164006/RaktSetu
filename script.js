let bloodBanks = [
    {
        name: "City Blood Bank",
        city: "Delhi",
        group: "A+",
        units: 5,
        distance: "2 km",
        phone: "Demo Contact",
        address: "Demo Address, Delhi"
    },
    {
        name: "Red Cross Blood Centre",
        city: "Delhi",
        group: "B+",
        units: 3,
        distance: "4 km",
        phone: "Demo Contact",
        address: "Demo Address, Delhi"
    },
    {
        name: "Life Care Blood Bank",
        city: "Mumbai",
        group: "O+",
        units: 4,
        distance: "3 km",
        phone: "Demo Contact",
        address: "Demo Address, Mumbai"
    },
    {
        name: "Hope Blood Centre",
        city: "Jaipur",
        group: "AB+",
        units: 2,
        distance: "5 km",
        phone: "Demo Contact",
        address: "Demo Address, Jaipur"
    }
];
// Load blood bank data from backend API
fetch("/api/blood-banks")
  .then(response => response.json())
  .then(data => {
    bloodBanks = data.map(bank => ({
      ...bank,
      distance: "Not available",
      phone: "Confirm with blood bank",
      address: bank.city
    }));
  })
  .catch(error => {
    console.error("Could not load blood bank data:", error);
  });

const searchBtn = document.getElementById("searchBtn");
const locationInput = document.getElementById("location");

locationInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    searchBtn.click();
  }
});

searchBtn.addEventListener("click", function () {

    const bloodGroup = document.getElementById("bloodGroup").value;
    const location = document.getElementById("location").value.trim();
    const results = document.getElementById("results");

    if (bloodGroup === "" || location === "") {
        results.innerHTML = "<p>Please select blood group and enter location.</p>";
        return;
    }

    const matchedBanks = bloodBanks.filter(function (bank) {
        return bank.group === bloodGroup &&
            bank.city.toLowerCase().includes(location.toLowerCase());
    });

    if (matchedBanks.length === 0) {
        results.innerHTML = "<h3>No matching demo results found.</h3>";
        return;
    }

    results.innerHTML = "<h2>Search Results</h2>" ;

    matchedBanks.forEach(function (bank) {
        results.innerHTML += `
            <div class="bank-card">
                <h3>🩸 ${bank.name}</h3>
                <p>📍 Location: ${bank.city}</p>
                <p>🏥 Address: ${bank.address}</p>
                <p>Blood Group: ${bank.group}</p>
                <p>Demo Units: ${bank.units}</p>
                <p>Distance: ${bank.distance}</p>
                <p>Contact: ${bank.phone}</p>
                <span class="available">Demo Availability</span>
            </div>
        `;
    });

});
document.getElementById("clearBtn").addEventListener("click", function () {
  document.getElementById("bloodGroup").value = "";
  document.getElementById("location").value = "";
  document.getElementById("results").innerHTML =
    "<p>Your search results will appear here.</p>";
});