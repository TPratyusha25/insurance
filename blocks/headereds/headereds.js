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








// NAV items (already working)
document.querySelectorAll('[data-aue-prop^="nav"]').forEach((el) => {
    const link = el.nextElementSibling?.querySelector('a');
    if (link) {
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => {
        window.open(link.href, '_blank');
      });
    }
  });
  
  // TOP LINKS (Sign In, Pay Bill, etc.)
  document.querySelectorAll('[data-aue-prop^="topLink"]').forEach((el) => {
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
  const joinTextEl = document.querySelector('[data-aue-prop="joinText"]');
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



