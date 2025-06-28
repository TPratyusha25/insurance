document.addEventListener("DOMContentLoaded", () => {
  // Utility function to wait for an element to appear
  function waitForElement(selector, callback) {
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
  }

  // 1. Make a specific <p> editable
  waitForElement('.header > div:nth-child(7) > div > p', (editableP) => {
    editableP.setAttribute("contenteditable", "true");
    editableP.style.cursor = "text";
    editableP.style.outline = "none";
    editableP.style.border = "2px solid #d40000";
    editableP.addEventListener("click", () => editableP.focus());
  });

  // 2. Make another <p> act like a button
  waitForElement('.header > div:nth-child(4) > div > p', (joinBtn) => {
    joinBtn.style.cursor = "pointer";
    joinBtn.style.backgroundColor = "#2860a2";
    joinBtn.style.color = "#fff";
    joinBtn.style.padding = "10px 20px";
    joinBtn.style.borderRadius = "4px";
    joinBtn.style.display = "inline-block";
    joinBtn.style.textAlign = "center";

    joinBtn.addEventListener("click", () => {
      window.location.href = 'https://memberapps.acg.aaa.com/membership-join/classic/member-details?adobe_mc_sdid=SDID%3D0990E315639EB1BE-66805E249D4554CC%7CMCORGID%3D0CD9210654E6C1AD0A4C98A7@AdobeOrg%7CTS%3D1751134081&adobe_mc_ref=https:%2F%2Fmichigan.aaa.com%2Fcareers%2Fentrepreneurial-agent.aspx&mboxSession=f0a0eb0b9f804aec92c2777cfb4d560d';
    });
  });
});
