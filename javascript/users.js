const searchBar = document.querySelector(".users .search input");
const searchBtn = document.querySelector(".users .search button");

searchBtn.onclick = (e) => {
    if (searchBar.classList.contains("active")) {
        searchBar.classList.remove("active")
        searchBtn.classList.remove("active")

    }else {
        searchBar.classList.add("active")
        searchBtn.classList.add("active")
    }
}