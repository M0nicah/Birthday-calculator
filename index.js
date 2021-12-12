//Male akan names
const maleAkanNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];
//female akan names
const femaleAkanNames = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua",
  "Ama",
];

// submit button click event listener-
document.getElementById("button").addEventListener(onclick, () => {
  const date = document.getElementById("date").value;
  const dateParts = date.split("-");
  const year = dateParts[0];
  const month = dateParts[1];
  const day = dateParts[2];
  const gender = document.getElementById("select").value;

  if (day <= 0 || day > 31) alert("Day is invalid! Please enter a valid one.");
  else if (month <= 0 || month > 12)
    alert("Month is invalid! Please enter a valid one.");
  else {
      
  }
});
