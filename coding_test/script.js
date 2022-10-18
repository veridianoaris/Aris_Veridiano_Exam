/** Variables */
const menuList = [
  { label: "News", url: "news" },
  { label: "Services", url: "services" },
  { label: "Company", url: "company" },
  { label: "Contact", url: "contact" },
];

const newsList = [
  {
    date: "2013/05/01",
    description: "Please feel free to send us any additional dummy texts.",
  },
  {
    date: "2013/04/30",
    description: "Please feel free to send us any additional dummy texts.",
  },
  {
    date: "2013/04/20",
    description: "Please feel free to send us any additional dummy texts.",
  },
  {
    date: "2013/04/11",
    description: "Please feel free to send us any additional dummy texts.",
  },
  { date: "2013/04/10", description: "Website OPEN." },
];

/** Display Menu */
const menu = document.getElementById("headerMenu");
const menuDisplay = menuList
  .map((menu, index) => {
    return `<a key=${index + 1} href=${menu.url}>${menu.label}</a>`;
  })
  .join("");

menu.innerHTML = menuDisplay;

/** Display News */
const news = document.getElementById("newsList");
const newsDisplay = newsList.map((article, index) => {
  return `<div class='news-list-content'><p class="date">${article.date}</p>
    <p class="description">${article.description}</p><div>`;
}).join("");

news.innerHTML = newsDisplay;
