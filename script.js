const searchInput = document.getElementById("searchInput");
const boxes = document.querySelectorAll(".box");

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase().trim();

    boxes.forEach(function (box) {
        const category = box.querySelector("h2").textContent.toLowerCase();

        if (category.includes(searchText)) {
            box.style.display = "";
        } else {
            box.style.display = "none";
        }
    });
});