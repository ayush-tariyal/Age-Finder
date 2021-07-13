function currentAge() {
  let birthYear = parseInt(prompt("In which year you were born in?"));
  let currentDay = new Date();
  let currentYear = currentDay.getFullYear();
  let yourAge = currentYear - birthYear;
  let h2 = document.createElement("h2");
  h2.innerHTML = `Your birth year is ${birthYear} and you are ${yourAge} years old.`;
  if (birthYear > 1945 && birthYear <= 1964) {
    h2.innerHTML += ` You are a Baby Boomer.`;
  } else if (birthYear > 1964 && birthYear <= 1980) {
    h2.innerHTML += ` You are a Gen X.`;
  } else if (birthYear > 1980 && birthYear <= 1996) {
    h2.innerHTML += ` You are a Millenial.`;
  } else if (birthYear > 1996 && birthYear <= 2012) {
    h2.innerHTML += ` You are a Gen Z.`;
  }
  h2.setAttribute("id", "age-in-years");
  document.getElementById("result").appendChild(h2);
}

function reset() {
  document.getElementById("age-in-years").remove();
}
