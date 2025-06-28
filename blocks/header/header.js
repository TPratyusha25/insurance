
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

document.addEventListener('DOMContentLoaded', () => {
  const joinBtn = document.getElementById('header > div:nth-child(4) > div p');

  // Add click behavior
  joinBtn.addEventListener('click', () => {
    // Replace this with your desired action
    window.location.href = 'https://memberapps.acg.aaa.com/membership-join/classic/member-details?adobe_mc_sdid=SDID%3D0990E315639EB1BE-66805E249D4554CC%7CMCORGID%3D0CD9210654E6C1AD0A4C98A7@AdobeOrg%7CTS%3D1751134081&adobe_mc_ref=https:%2F%2Fmichigan.aaa.com%2Fcareers%2Fentrepreneurial-agent.aspx&mboxSession=f0a0eb0b9f804aec92c2777cfb4d560d'; // Example redirect
  });
});
