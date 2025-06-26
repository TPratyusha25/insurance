
  document.addEventListener("DOMContentLoaded", function () {
    const searchText = document.querySelector('.header > div:nth-child(7) > div > p ');

    // Make the <p> editable when clicked
    searchText.addEventListener("click", function () {
      searchText.setAttribute("contenteditable", "true");
      searchText.focus();
    });
  });

