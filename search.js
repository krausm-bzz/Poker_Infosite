


document.addEventListener("DOMContentLoaded", function () {
    var searchForm = document.querySelector("form[role='search']");
    var searchInput = document.querySelector("#search-input");
    var searchResults = document.querySelector("#search-results");

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Verhindert das Standardverhalten des Formulars

        var searchTerm = searchInput.value.toLowerCase();
        var results = articles.filter(function (article) {
            return article.title.toLowerCase().includes(searchTerm);
        });
        displaySearchResults(results);
    });

    function displaySearchResults(results) {
        searchResults.innerHTML = "";
        results.forEach(function (result) {
            var link = document.createElement("a");
            link.href = result.url;
            link.textContent = result.title;
            searchResults.appendChild(link);
            searchResults.appendChild(document.createElement("br"));
        });
    }
});
