// API used : http://newsapi.org
let apiKey = "551e39ceccaf4ae1b77164b8f887a188";

// Initilize the DOM
const container = document.getElementById("container");
const headingcontainer = document.getElementById("heading-container");
const optionsContainer = document.getElementById("options-container");

// "in" stands for India
const country = "in";

const options = ["general", "entertainment", "health", "science", "sports", "technology"];

// 100 requests per day only
let requestURL;

// Create cards from data
const generateUI = (articles) => {
    for (let item of articles) {
        let card = document.createElement("div");
        card.classList.add("news-card");
        card.innerHTML = `<div 
        class="news-image-container">
        <img src="${item.urlToImage || "./newspaper.jpg"}
        " alt="news paper image" />
        </div > 
        <div class="news-content">
            <div class="news-title">
                ${item.title}
            </div>;
            <div class="news-description">
            ${item.description || item.content || ""}
            </did>
            <a href="${item.url}" target="_blank" class="view-button">Read More</a>
        </div>`;
        container.appendChild(card);
    }
};

// New API Call
const getNews = async () => {
    container.innerHTML = "";
    let response = await fetch(requestURL);
    if (!response.ok) {
        alert("Data unavailable at the moment. Please try again later")
    }
    let data = await response.json();
    generateUI(data.articles);
}

// Category selection
const selectCategory = (e, category) => {
    let options = document.querySelectorAll(".option");
    options.forEach((element) => {
        element.classList.remove("active");
    });
    requestURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
    e.target.classList.add("active");
    getNews();
};

//options buttons
const createOptions = () => {
    for (let i of options) {
        optionsContainer.innerHTML += `<button 
        class="options ${i == "general" ? "active" : ""}"
        onclick="selectCategory(event, '${i}')">${i}
        </button>`;
    }
};

const init = (articles) => {
    optionsContainer.innerHTML = "";
    getNews();
    createOptions();
};

window.onload = () => {
    requestURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=${apiKey}`;
    init();
};