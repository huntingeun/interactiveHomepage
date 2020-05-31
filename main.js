const searchBox = document.querySelector(".search-box");
const navBtnContainer = document.querySelector(".nav-btn-container");
const searchBtn = document.querySelector(".search-btn");
const closeBtn = document.querySelector(".close-btn");
const CLASS_NAME = "active"

searchBtn.addEventListener("click", handleEvent) 
closeBtn.addEventListener("click", handleEvent)

function handleEvent () {
    searchBox.classList.toggle(CLASS_NAME);
    navBtnContainer.classList.toggle(CLASS_NAME);
};




