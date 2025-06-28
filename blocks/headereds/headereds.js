document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('ctl00_HeaderMenus_SiteSearchBox_searchTextBox');
  const searchButton = document.getElementById('ctl00_HeaderMenus_SiteSearchBox_GoImageButton');
  const validationMessage = document.getElementById('ctl00_HeaderMenus_SiteSearchBox_searchboxRequiredFieldValidator');

  // Clear input on click
  searchInput.addEventListener('click', function () {
    this.value = '';
    this.select();
    validationMessage.style.display = 'none';
  });

  // Handle search submission
  searchButton.addEventListener('click', function (e) {
    e.preventDefault();
    const query = searchInput.value.trim();

    if (!query) {
      validationMessage.textContent = 'Please enter a search term.';
      validationMessage.style.display = 'inline';
      return;
    }

    validationMessage.style.display = 'none';

    // Simulate search action
    console.log('Searching for:', query);
    // You can replace this with actual form submission or AJAX call
  });
});








// NAV items (already working) - Membership
document.querySelectorAll('.headereds > div:nth-child(16) > div > p').forEach((el) => {
    const link = el.nextElementSibling?.querySelector('a');
    if (link) {
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => {
        window.open(link.href, '_blank');
      });
    }
  });

//insurance
document.querySelectorAll('.headereds > div:nth-child(17) > div > p').forEach((el) => {
    const link = el.nextElementSibling?.querySelector('a');
    if (link) {
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => {
        window.open(link.href, '_blank');
      });
    }
  });

//travel
document.querySelectorAll('.headereds > div:nth-child(18) > div > p').forEach((el) => {
    const link = el.nextElementSibling?.querySelector('a');
    if (link) {
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => {
        window.open(link.href, '_blank');
      });
    }
  });

//discounts
document.querySelectorAll('.headereds > div:nth-child(19) > div > p').forEach((el) => {
    const link = el.nextElementSibling?.querySelector('a');
    if (link) {
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => {
        window.open(link.href, '_blank');
      });
    }
  });

//automotive
document.querySelectorAll('.headereds > div:nth-child(20) > div > p').forEach((el) => {
    const link = el.nextElementSibling?.querySelector('a');
    if (link) {
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => {
        window.open(link.href, '_blank');
      });
    }
  });

//banking
document.querySelectorAll('.headereds > div:nth-child(21) > div > p').forEach((el) => {
    const link = el.nextElementSibling?.querySelector('a');
    if (link) {
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => {
        window.open(link.href, '_blank');
      });
    }
  });

//community
document.querySelectorAll('.headereds > div:nth-child(22) > div > p').forEach((el) => {
    const link = el.nextElementSibling?.querySelector('a');
    if (link) {
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => {
        window.open(link.href, '_blank');
      });
    }
  });
  
  // TOP LINKS (Sign In, Pay Bill, etc.)
  document.querySelectorAll('.headereds > div:nth-child(3) > div > p').forEach((el) => {
    const outerDiv = el.closest('div'); // <div><p data-aue-prop...></p></div>
    const containerDiv = outerDiv?.parentElement; // wrapping <div>
    const siblingDiv = containerDiv?.nextElementSibling; // next <div>
    const link = siblingDiv?.querySelector('a');
    if (link) {
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => {
        window.open(link.href, '_blank');
      });
    }
  });

  // PayBill
   document.querySelectorAll('.headereds > div:nth-child(5) > div > p').forEach((el) => {
    const outerDiv = el.closest('div'); // <div><p data-aue-prop...></p></div>
    const containerDiv = outerDiv?.parentElement; // wrapping <div>
    const siblingDiv = containerDiv?.nextElementSibling; // next <div>
    const link = siblingDiv?.querySelector('a');
    if (link) {
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => {
        window.open(link.href, '_blank');
      });
    }
  });

  // road-assisstance
   document.querySelectorAll('.headereds > div:nth-child(7) > div > p').forEach((el) => {
    const outerDiv = el.closest('div'); // <div><p data-aue-prop...></p></div>
    const containerDiv = outerDiv?.parentElement; // wrapping <div>
    const siblingDiv = containerDiv?.nextElementSibling; // next <div>
    const link = siblingDiv?.querySelector('a');
    if (link) {
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => {
        window.open(link.href, '_blank');
      });
    }
  });
  
  // JOIN AAA
  const joinTextEl = document.querySelector('header > div:nth-child(4) > div p');
  const joinOuterDiv = joinTextEl?.closest('div');
  const joinContainer = joinOuterDiv?.parentElement;
  const joinSibling = joinContainer?.nextElementSibling;
  const joinLink = joinSibling?.querySelector('a');
  
  if (joinTextEl && joinLink) {
    joinTextEl.style.cursor = 'pointer';
    joinTextEl.addEventListener('click', () => {
      window.open(joinLink.href, '_blank');
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
  const joinBtn = document.getElementById('header > div:nth-child(4) > div p');

  // Add click behavior
  joinBtn.addEventListener('click', () => {
    // Replace this with your desired action
    window.location.href = 'https://memberapps.acg.aaa.com/membership-join/classic/member-details?adobe_mc_sdid=SDID%3D0990E315639EB1BE-66805E249D4554CC%7CMCORGID%3D0CD9210654E6C1AD0A4C98A7@AdobeOrg%7CTS%3D1751134081&adobe_mc_ref=https:%2F%2Fmichigan.aaa.com%2Fcareers%2Fentrepreneurial-agent.aspx&mboxSession=f0a0eb0b9f804aec92c2777cfb4d560d'; // Example redirect
  });
});




