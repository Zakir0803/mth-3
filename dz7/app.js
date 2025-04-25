const grades = [5, 4, 5, 5, 3, 4, 4, 4, 5, 3];
const letterGrades = grades.map(function(grade) {
  if (grade === 5) return "A";
  if (grade === 4) return "B";
  if (grade === 3) return "C";
});
console.log(letterGrades);

const names = ["валерия", "ИНЕССА", "айТУНУК", "маДИна", "ИлОнА"];
const fixedNames = names.map(function(name) {
  const lower = name.toLowerCase();
  return lower[0].toUpperCase() + lower.slice(1);
});
console.log(fixedNames);


const visits = [1, 0, 1, 0, 2, 0, 1, 1, 2];
const visitStatus = visits.map(function(item) {
  if (item === 1) return "Был";
  if (item === 0) return "Не был";
  if (item === 2) return "Онлайн";
});
console.log(visitStatus);



const mixedArray = ["five", true, "null", null, 0, 17, false, [], {}, document, "", "undefined", 100, undefined];
const numbersOnly = mixedArray.filter(function(item) {
  return typeof item === "number";
});
console.log(numbersOnly);


const numbers = [49, 8, 14, 100, 12, 45, 70];
const divisibleBy7 = numbers.filter(function(num) {
  return num % 7 === 0;
});
console.log(divisibleBy7);


const words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
const threeLetterWords = words.filter(function(word) {
  return word.length === 3;
});
console.log(threeLetterWords);
