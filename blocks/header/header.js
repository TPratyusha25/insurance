
document.addEventListener("DOMContentLoaded", function () {
    const searchText = document.querySelector('.header > div:nth-child(7) > div > p');

    if (searchText) {
      searchText.addEventListener("click", function () {
        searchText.setAttribute("contenteditable", "true");
        searchText.focus();
      });
    } else {
      console.warn("Search text component not found.");
    }
  });
