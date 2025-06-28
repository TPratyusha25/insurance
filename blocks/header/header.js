function enhancePage() {
  // Wait for editable paragraph
  waitForElement('.header > div:nth-child(7) > div > p', (editableP) => {
    editableP.setAttribute("contenteditable", "true");
    editableP.style.border = "2px solid #d40000";

    editableP.addEventListener("focus", () => {
      editableP.style.border = "2px solid #d40000";
    });
    editableP.addEventListener("click", () => editableP.focus());
  });

  // Wait for button-like paragraph
 waitForElement('.header > div:nth-child(4) > div > p', (joinBtn) => {
  joinBtn.style.cursor = "pointer";

  // Hover effect
  const originalBg = joinBtn.style.backgroundColor;
  joinBtn.addEventListener("mouseenter", () => {
    joinBtn.style.backgroundColor = "#e40606"; // red on hover
  });
  joinBtn.addEventListener("mouseleave", () => {
    joinBtn.style.backgroundColor = originalBg; // revert to original
  });

  joinBtn.addEventListener("click", () => {
    window.location.href = 'https://memberapps.acg.aaa.com/membership-join/classic/member-details?adobe_mc_sdid=SDID%3D0990E315639EB1BE-66805E249D4554CC%7CMCORGID%3D0CD9210654E6C1AD0A4C98A7@AdobeOrg%7CTS%3D1751134081&adobe_mc_ref=https:%2F%2Fmichigan.aaa.com%2Fcareers%2Fentrepreneurial-agent.aspx&mboxSession=f0a0eb0b9f804aec92c2777cfb4d560d';
  });
});
}

// Wait for DOM and page show
document.addEventListener("DOMContentLoaded", enhancePage);
window.addEventListener("pageshow", enhancePage);

// Enhanced waitForElement
function waitForElement(selector, callback, timeout = 10000) {
  const el = document.querySelector(selector);
  if (el) {
    callback(el);
    return;
  }

  const observer = new MutationObserver(() => {
    const el = document.querySelector(selector);
    if (el) {
      observer.disconnect();
      callback(el);
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  setTimeout(() => observer.disconnect(), timeout);
}
