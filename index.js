//Days
const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
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
document.getElementById("btn").addEventListener("click", () => {
  const date = document.getElementById("date").value;
  const dateParts = date.split("-");
  const year = dateParts[0];
  const month = dateParts[1];
  const day = dateParts[2];
  const gender = document.getElementById("select").value;
  console.log(gender);
  //checking valid and invalid dates. (input from the forms)
  if (day <= 0 || day > 31) alert("Day is invalid! Please enter a valid one.");
  else if (month <= 0 || month > 12)
    alert("Month is invalid! Please enter a valid one.");
  else if (gender == "")
    alert("Gender is invalid! Please enter a valid gender");
  else {
    const cc = +(year.substring(0, 2));
    const yy = +(year.substring(2, 4));
    const mm = +month;
    const dd = +day;
    // calculation of the day of the week
    const d = Math.floor(
      (cc / 4 - 2 * cc - 1 + (5 * yy) / 4 + (26 * (mm + 1)) / 10 + dd) % 7
    );
    if (gender == "female") {
      document.getElementById("output").innerHTML = `You were born on ${
        daysOfTheWeek[d - 1]
      }, your Akan name is ${femaleAkanNames[d - 1]}`;
    } else {
      document.getElementById("output").innerHTML = `You were born on ${
        daysOfTheWeek[d - 1]
      }, your Akan name is ${maleAkanNames[d - 1]}!`;
    }
  }
});
