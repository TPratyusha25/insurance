function enhancePage() {
  // Wait for editable paragraph
  waitForElement('.header > div:nth-child(7) > div > p', (editableP) => {
    editableP.setAttribute("contenteditable", "true");
    editableP.style.cursor = "text";
    editableP.style.outline = "none";
    editableP.style.border = "2px solid #d40000";
    editableP.addEventListener("click", () => editableP.focus());
  });

  // Wait for button-like paragraph
  waitForElement('.header > div:nth-child(4) > div > p', (joinBtn) => {
    joinBtn.style.cursor = "pointer";
    joinBtn.style.backgroundColor = "#2860a2";
    joinBtn.style.color = "#fff";
    joinBtn.style.padding = "10px 20px";
    joinBtn.style.borderRadius = "4px";
    joinBtn.style.display = "inline-block";
    joinBtn.style.textAlign = "center";

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
