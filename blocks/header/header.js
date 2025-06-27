
document.addEventListener("DOMContentLoaded", function () {
    const targetSelector = ".header > div:nth-child(7) > div > p";

    function makeEditable() {
      const searchText = document.querySelector(targetSelector);
      if (searchText) {
        searchText.setAttribute("contenteditable", "true");
        searchText.style.cursor = "text";
        searchText.style.outline = "none"; // Prevent blue outline
        searchText.style.border = "2px solid #d40000"; // Keep consistent border

        searchText.addEventListener("click", () => searchText.focus());
      }
    }

    // Initial attempt
    makeEditable();

    // Watch for DOM changes and reapply if needed
    const observer = new MutationObserver(() => {
      makeEditable();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
