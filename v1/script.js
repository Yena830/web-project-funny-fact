const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#63d48d" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#f93fed" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#78716c" },
];

console.log(CATEGORIES.find((cat) => cat.name === "society").color);

// Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Create DOM elements: Render facts in list
factsList.innerHTML = "";

// Load data from Supabase
loadFacts();

async function loadFacts(params) {
  const res = await fetch(
    "https://gqljbvmhdpsfitblvkuc.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxbGpidm1oZHBzZml0Ymx2a3VjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjczOTYyOTcsImV4cCI6MjA0Mjk3MjI5N30.2VqdXfYYWYnvHi_0wCduV-5L1IX806O2_UHD2JxBIl4",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxbGpidm1oZHBzZml0Ymx2a3VjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjczOTYyOTcsImV4cCI6MjA0Mjk3MjI5N30.2VqdXfYYWYnvHi_0wCduV-5L1IX806O2_UHD2JxBIl4",
      },
    }
  );
  const data = await res.json();
  //   const filteredData = data.filter((fact) => fact.category === "society");
  createFactsList(data);
}

// createFactsList(initialFacts);

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) =>
      `<li class="fact">
          <p>
          ${fact.text}
              <a 
                  class="source" 
                  href="${fact.source}" 
                  target="_blank"
              >(Source)</a>
          </p>
          <span class="tag" style="background-color: ${
            CATEGORIES.find((cat) => cat.name === fact.category).color
          }">
              ${fact.category}
          </span>
          </li>`
  );

  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

// Toggle form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

console.log([7, 64, 6, -23, 11].filter((el) => el > 10));
console.log([7, 64, 6, -23, 11].find((el) => el > 10));

/*
let votesInteresting = 23;
let votesMindblowing = 5;
const text = "Lisbon is the capital of Portugal";

votesInteresting++;
console.log(votesInteresting);

let totalUpvotes = votesInteresting + votesMindblowing;
console.log(totalUpvotes);

let voteFalse = 4;
const isCorrect = voteFalse < totalUpvotes;
console.log(isCorrect);


*/
/*
function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  if (age >= 0) return age;
  else return `Impossible year. Year needs to be less or equal ${currentYear}`;
}
const age1 = calcFactAge(2015);
console.log(age1);

const calcFactAge2 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Impossible year. Year needs to be less or equal ${new Date().getFullYear()}`;

let votesInteresting = 23;
let votesMindblowing = 23;

// if (votesInteresting === votesMindblowing) {
//   alert("This fact is eqaully interesting and mindblowing");
// } else if (votesInteresting > votesMindblowing) {
//   console.log("Interesting fact");
// } else if (votesInteresting < votesMindblowing) {
//   console.log("Mindblowing fact!");
// }

if (votesMindblowing) {
  console.log("MINDBLOWING FACT!!!");
} else {
  console.log("Not so special...");
}

let voteFalse = 7;
const totalUpvotes = votesInteresting + votesMindblowing;

const message =
  totalUpvotes > voteFalse
    ? "The fact is true"
    : "Might be false, check more sources...";

//alert(message);

const text = "Lisbon is the capital of Portugal";
const str = `The current fact is "${text}". It is ${calcFactAge(
  2015
)} years old. It is probably ${
  totalUpvotes > voteFalse ? "correct" : "not true"
}.`;
console.log(str);
*/
// const fact = ["Lisbon is the capital of Portugal", 2015, true];
// console.log(fact);
// const [text, createdIn] = fact;
// const newFact = [...fact, "society"];
// const factObj = {
//   text: "Lisbon is the capital of Portugal",
//   category: "society",
//   createdIn: 2015,
//   isCorrect: true,
//   createSummary: function () {
//     return `The fact "${
//       this.text
//     }" is from the category ${this.category.toUpperCase()}`;
//   },
// };

// console.log(factObj.text);
// console.log(factObj["text"]);
// const { category, isCorrect } = factObj;
// console.log(category);

// [2, 4, 6, 8].forEach(function (i) {
//   console.log(i);
// });

// const times10 = [2,4,6,8].map(function(i)){
//     return i*10;
// }
// const times10 = [2, 4, 6, 8].map((i) => i * 10);
// console.log(times10);

// const CATEGORIES = [
//   { name: "technology", color: "#3b82f6" },
//   { name: "science", color: "#16a34a" },
//   { name: "finance", color: "#ef4444" },
//   { name: "society", color: "#eab308" },
//   { name: "entertainment", color: "#db2777" },
//   { name: "health", color: "#14b8a6" },
//   { name: "history", color: "#f97316" },
//   { name: "news", color: "#8b5cf6" },
// ];

// const allCategories = CATEGORIES.map((el) => el.name);

// const initialFacts = [
//   {
//     id: 1,
//     text: "React is being developed by Meta (formerly facebook)",
//     source: "https://opensource.fb.com/",
//     category: "technology",
//     votesInteresting: 24,
//     votesMindblowing: 9,
//     votesFalse: 4,
//     createdIn: 2021,
//   },
//   {
//     id: 2,
//     text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
//     source:
//       "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
//     category: "society",
//     votesInteresting: 11,
//     votesMindblowing: 2,
//     votesFalse: 0,
//     createdIn: 2019,
//   },
//   {
//     id: 3,
//     text: "Lisbon is the capital of Portugal",
//     source: "https://en.wikipedia.org/wiki/Lisbon",
//     category: "society",
//     votesInteresting: 8,
//     votesMindblowing: 3,
//     votesFalse: 1,
//     createdIn: 2015,
//   },
// ];

// function calcFactAge(year) {
//   const currentYear = new Date().getFullYear();
//   const age = currentYear - year;
//   if (age >= 0) return age;
//   else return `Impossible year. Year needs to be less or equal ${currentYear}`;
// }

// const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));
// console.log(factAges.join(" & "));
