// Get the button element and input elements with class "input"
const btn = document.getElementById("btn");
const inputEls = document.querySelectorAll(".input");

// Get individual input elements for day, month, and year
const dayInputElement = document.getElementById("day");
const monthInputElement = document.getElementById("month");
const yearInputElement = document.getElementById("year");

// Get user input elements for day, month, and year
const dayUserInput = document.getElementById("dayInput");
const monthUserInput = document.getElementById("monthInput");
const yearUserInput = document.getElementById("yearInput");

// Function to show an error message for an input element
function showErrorMessage(inp) {
  inp.classList.add("error-outline");
  inp.classList.remove("success-outline");
  inp.previousElementSibling.classList.add("error");
  inp.nextElementSibling.classList.add("error");
}

// Function to show a success message for an input element
function showSuccessMessage(inp) {
  inp.classList.add("success-outline");
  inp.classList.remove("error-outline");
  inp.previousElementSibling.classList.remove("error");
  inp.nextElementSibling.textContent = "";
}

// Function to validate a single input element
function validateInput(input) {
  const inputValue = input.value.trim();

  if (inputValue === "") {
    showErrorMessage(input);
    input.nextElementSibling.textContent = `Field required!`;
    return false;
  } else {
    showSuccessMessage(input);
    return true;
  }
}

// Function to validate all input elements and display error messages if necessary
function validateAllInputs() {
  let allInputsValid = true;

  // Loop through each input element
  inputEls.forEach(function (input) {
    if (!validateInput(input)) {
      allInputsValid = false; // Mark as invalid if any input is not valid
    }
  });

  return allInputsValid;
}

// Function to validate the day input element
function validateDay(day) {
  const dayValue = Number(day.value);
  if (dayValue >= 1 && dayValue <= 31) {
    showSuccessMessage(day);
    return dayValue;
  } else {
    showErrorMessage(day);
    const dayInputElName = day.name;
    day.nextElementSibling.textContent = `Use valid ${dayInputElName}!`;
  }
}

// Function to validate the month input element
function validateMonth(month) {
  const monthValue = Number(month.value);
  if (monthValue >= 0 && monthValue <= 12) {
    showSuccessMessage(month);
    return monthValue;
  } else {
    showErrorMessage(month);
    const monthInputElName = month.name;
    month.nextElementSibling.textContent = `Use valid ${monthInputElName}!`;
  }
}

// Function to validate the year input element
function validateYear(year) {
  const yearValue = Number(year.value);
  if (yearValue >= 1950 && yearValue <= 2023) {
    showSuccessMessage(year);
    return yearValue;
  } else {
    showErrorMessage(year);
    const yearInputElName = year.name;
    year.nextElementSibling.textContent = `Use valid ${yearInputElName}!`;
  }
}

// Add a click event listener to the button
btn.addEventListener("click", function () {
  // Validate all input elements before proceeding
  if (!validateAllInputs()) {
    return; // Stop execution if any input is invalid
  }

  // Validate individual day, month, and year inputs
  const day = validateDay(dayInputElement);
  const month = validateMonth(monthInputElement);
  const year = validateYear(yearInputElement);

  // Get the current date
  const currentDate = new Date();

  // Get current day, month, and year
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1 + 12; // Corrected for 0-based index
  const currentYear = currentDate.getFullYear() - 1;

  // Calculate and display the differences in day, month, and year
  dayUserInput.textContent = currentDay - day;
  monthUserInput.textContent = currentMonth - month;
  yearUserInput.textContent = currentYear - year;
});
