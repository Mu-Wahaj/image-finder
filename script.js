const apiKey = "P1QCaUS9WHivX_jOMw7bPv66GasqnqXVu0RZgVkz3_U";
const appId = "650395";

const formElement = document.querySelector("form");
const searchElement = document.getElementById("Search-input");
const searchResults = document.querySelector(".search-results ");
const showMore = document.querySelector("#Show-more-btn");

let inputData = "";
let page = 1;

async function searchImage() {
  inputData = searchElement.value;
  const urlKey = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apiKey}`;
  const response = await fetch(urlKey);
  const data = await response.json();
  const results = data.results;
  if (page === 1) {
    searchResults.innerHTML = "";
  }
  results.map((result) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imagelink = document.createElement("a");
    imagelink.href = result.links.html;
    imagelink.target = "_blank";
    imagelink.text = result.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imagelink);
    searchResults.appendChild(imageWrapper);
  });
  page++;
  if (page > 1) {
    showMore.style.display = "block";
    console.log("working fuck off");
  }
}
formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImage();
});

showMore.addEventListener("click", () => {
  searchImage();
});
