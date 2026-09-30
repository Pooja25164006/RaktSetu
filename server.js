const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Website ki HTML, CSS aur JavaScript files serve karega
app.use(express.static(__dirname));

// Backend test route
app.get("/api/health", (req, res) => {
  res.json({
    status: "success",
    message: "RaktSetu backend is running!"
  });
});
// Demo blood bank data API
app.get("/api/blood-banks", (req, res) => {
  const bloodBanks = [
    {
      name: "City Blood Bank",
      city: "Delhi",
      group: "A+",
      units: 5
    },
    {
      name: "Red Cross Blood Centre",
      city: "Delhi",
      group: "B+",
      units: 3
    },
    {
      name: "Life Care Blood Bank",
      city: "Mumbai",
      group: "O+",
      units: 4
    },
    {
      name: "Hope Blood Centre",
      city: "Jaipur",
      group: "AB+",
      units: 2
    }
  ];

  res.json(bloodBanks);
});

app.listen(PORT, () => {
  console.log(`RaktSetu server running at http://localhost:${PORT}`);
});