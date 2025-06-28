function enhancePage() {
  // Wait for editable paragraph
  waitForElement('.header > div:nth-child(7) > div > p', (editableP) => {
    editableP.setAttribute("contenteditable", "true");
    editableP.addEventListener("click", () => editableP.focus());
  });

  // Wait for button-like paragraph
  waitForElement('.header > div:nth-child(4) > div > p', (joinBtn) => {

    joinBtn.addEventListener("click", () => {
      window.location.href = 'https://memberapps.acg.aaa.com/membership-join/classic/member-details?...';
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
