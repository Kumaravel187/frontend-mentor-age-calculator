const btn = document.getElementById("btn");
const inputEls = document.querySelectorAll(".input");

const dayInputElement = document.getElementById("day");
const monthInputElement = document.getElementById("month");
const yearInputElement = document.getElementById("year");

const dayUserInput = document.getElementById("dayInput");
const monthUserInput = document.getElementById("monthInput");
const yearUserInput = document.getElementById("yearInput");

function validateInput(input) {
  const inputValue = input.value.trim();

  if (inputValue === "") {
    input.classList.add("error-outline");
    input.classList.remove("success-outline");
    input.nextElementSibling.textContent = `This field is required.`;
    input.previousElementSibling.classList.add("error");
    return false;
  } else {
    input.classList.add("success-outline");
    input.classList.remove("error-outline");
    input.nextElementSibling.textContent = "";
    input.previousElementSibling.classList.remove("error");
    return true;
  }
}

function validateAllInputs() {
  let allInputsValid = true;

  inputEls.forEach(function (input) {
    if (!validateInput(input)) {
      allInputsValid = false;
    }
  });

  return allInputsValid;
}

function validateDay(day) {
  const dayValue = Number(day.value);
  if (dayValue >= 1 && dayValue <= 31) {
    day.classList.remove("error-outline");
    day.classList.add("success-outline");
    day.previousElementSibling.classList.remove("error");

    return dayValue;
  } else {
    let dayInputElName = day.name;
    day.classList.add("error-outline");
    day.classList.remove("success-outline");
    day.nextElementSibling.textContent = `Must be a valid ${dayInputElName}!`;
    day.previousElementSibling.classList.add("error");
  }
}

function validateMonth(month) {
  const monthValue = Number(month.value);
  if (monthValue >= 0 && monthValue <= 12) {
    month.classList.remove("error-outline");
    month.classList.add("success-outline");
    month.previousElementSibling.classList.remove("error");
    return monthValue;
  } else {
    let monthInputElName = month.name;
    month.classList.add("error-outline");
    month.classList.remove("success-outline");
    month.previousElementSibling.classList.add("error");
    month.nextElementSibling.textContent = `Must be a valid ${monthInputElName}!`;
  }
}

function validateYear(year) {
  const yearValue = Number(year.value);
  if (yearValue >= 1950 && yearValue <= 2023) {
    year.classList.remove("error-outline");
    year.classList.add("success-outline");
    year.previousElementSibling.classList.remove("error");
    return yearValue;
  } else {
    let yearInputElName = year.name;
    year.classList.add("error-outline");
    year.classList.remove("success-outline");
    year.previousElementSibling.classList.add("error");
    year.nextElementSibling.textContent = `Must be a valid ${yearInputElName}!`;
  }
}

btn.addEventListener("click", function () {
  if (!validateAllInputs()) {
    return;
  }

  const day = validateDay(dayInputElement);
  const month = validateMonth(monthInputElement);
  const year = validateYear(yearInputElement);

  const currentDate = new Date();

  const currentday = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1 + 12;
  const currentYear = currentDate.getFullYear();

  dayUserInput.textContent = currentday - day;
  monthUserInput.textContent = currentMonth - month;
  yearUserInput.textContent = currentYear - year;
});
