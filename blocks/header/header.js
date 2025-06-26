
  document.addEventListener("DOMContentLoaded", function () {
    // Select the <p> tag and the <img> tag
    const searchText = document.querySelector('[data-aue-prop="searchPlaceholder"]');
    const searchIcon = document.querySelector('[data-aue-prop="searchIcon"]');

    // Make the <p> editable
    searchText.setAttribute("contenteditable", "true");
    searchText.style.cursor = "text";

    // Optional: Clear default text on focus
    searchText.addEventListener("focus", function () {
      if (searchText.innerText.trim().toLowerCase() === "search") {
        searchText.innerText = "";
      }
    });

    // Handle search icon click
    searchIcon.addEventListener("click", function () {
      const query = searchText.innerText.trim();
      if (query) {
        alert("You searched for: " + query);
        // You can replace this with a real search function
      } else {
        alert("Please enter a search term.");
      }
    });
  });

