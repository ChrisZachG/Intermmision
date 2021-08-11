let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let BusquedaBtn = document.querySelector(".bx-search-alt-2");


btn.onclick = function() {
    sidebar.classList.toggle("active");
}
BusquedaBtn.onclick = function() {
    sidebar.classList.toggle("active");
}