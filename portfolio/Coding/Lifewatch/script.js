function calculateAgeDifference(currentAge, predictedDeathAge) {
  return predictedDeathAge - currentAge;
}

function convertYearsToDays(difference) {
  return difference * 365.25;
}

function convertYearsToMonths(difference) {
  return difference * 12;
}

function convertYearsToHours(difference) {
  return difference * 24 * 365.25;
}

function convertYearsToMinutes(difference) {
  return difference * 60 * 24 * 365.25;
}

function convertYearsToSeconds(difference) {
  return difference * 3600 * 24 * 365.25;
}

function convertYearsToMilliseconds(difference) {
  return difference * 24 * 365.25 * 3600 * 1000;
}

function calculateWeekends(difference) {
  let days = convertYearsToDays(difference);
  return Math.floor((days / 7) * 2);
}

function displayResults(
  difference,
  months,
  days,
  hours,
  minutes,
  seconds,
  milliseconds,
  weekends
) {
  return `Years: ${difference.toLocaleString('pl-PL')}
  <br>Months: ${months.toLocaleString('pl-PL')}
  <br>Days: ${days.toLocaleString('pl-PL')}
  <br>Hours: ${Math.floor(hours).toLocaleString('pl-PL')}
  <br>Minutes: ${Math.floor(minutes).toLocaleString('pl-PL')}
  <br>Seconds: ${Math.floor(seconds).toLocaleString('pl-PL')}
  <br>Milliseconds: ${Math.floor(milliseconds).toLocaleString('pl-PL')}`;
}

function calculateRemainingTime() {
  let currentAge = parseInt(prompt("How old are you?"));
  let predictedDeathAge = parseInt(prompt("Your death age prediction"));

  let difference = calculateAgeDifference(currentAge, predictedDeathAge);
  let months = convertYearsToMonths(difference);
  let days = convertYearsToDays(difference);
  let hours = convertYearsToHours(difference);
  let minutes = convertYearsToMinutes(difference);
  let seconds = convertYearsToSeconds(difference);
  let milliseconds = convertYearsToMilliseconds(difference);
  let weekends = calculateWeekends(difference);

  setInterval(function() {
    difference -= 1 / (60 * 60 * 24 * 365.25 * 200); // Subtract one millisecond from the difference
    months = convertYearsToMonths(difference);
    days = convertYearsToDays(difference);
    hours = convertYearsToHours(difference);
    minutes = convertYearsToMinutes(difference);
    seconds = convertYearsToSeconds(difference);
    milliseconds = convertYearsToMilliseconds(difference);
    weekends = calculateWeekends(difference);

    document.getElementById("result").innerHTML = displayResults(
      difference,
      months,
      days,
      hours,
      minutes,
      seconds,
      milliseconds,
      weekends
    );
  },); // Update every millisecond
}

calculateRemainingTime();