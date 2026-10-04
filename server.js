const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.get("/api/health", (req, res) => {
  res.json({
    status: "success",
    message: "RaktSetu backend is running!"
  });
});

app.get("/api/blood-banks", (req, res) => {
  const bloodBanks = [
    { name: "City Blood Bank", city: "Delhi", group: "A+", units: 5 },
    { name: "Red Cross Blood Centre", city: "Delhi", group: "B+", units: 3 },
    { name: "Life Care Blood Bank", city: "Delhi", group: "O+", units: 6 },
    { name: "Hope Blood Centre", city: "Delhi", group: "AB+", units: 2 },

    { name: "Pink City Blood Bank", city: "Jaipur", group: "A+", units: 7 },
    { name: "Hope Blood Centre", city: "Jaipur", group: "AB+", units: 4 },
    { name: "Jaipur Life Care", city: "Jaipur", group: "O+", units: 5 },
    { name: "Sawai Blood Centre", city: "Jaipur", group: "B+", units: 3 },
    { name: "Pink City Blood Bank", city: "Jaipur", group: "O-", units: 2 },

    { name: "Life Care Blood Bank", city: "Mumbai", group: "O+", units: 4 },
    { name: "Mumbai Blood Centre", city: "Mumbai", group: "A-", units: 3 },
    { name: "City Care Blood Bank", city: "Mumbai", group: "B+", units: 6 },
    { name: "Hope Blood Bank", city: "Mumbai", group: "AB+", units: 2 },

    { name: "Ahmedabad Blood Centre", city: "Ahmedabad", group: "A+", units: 5 },
    { name: "Gujarat Life Blood Bank", city: "Ahmedabad", group: "O+", units: 4 },
    { name: "Care Blood Centre", city: "Ahmedabad", group: "B-", units: 2 },

    { name: "Lucknow Blood Bank", city: "Lucknow", group: "A+", units: 4 },
    { name: "Hope Blood Centre", city: "Lucknow", group: "O+", units: 5 },
    { name: "City Care Blood Bank", city: "Lucknow", group: "AB-", units: 2 },

    { name: "Bangalore Blood Centre", city: "Bangalore", group: "B+", units: 5 },
    { name: "Life Saver Blood Bank", city: "Bangalore", group: "O+", units: 6 },

    { name: "Kolkata Blood Centre", city: "Kolkata", group: "A+", units: 3 },
    { name: "City Life Blood Bank", city: "Kolkata", group: "O-", units: 2 }
  ];

  res.json(bloodBanks);
});

app.listen(PORT, () => {
  console.log(`RaktSetu server running at http://localhost:${PORT}`);
});