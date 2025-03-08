// navbar jquiry
$(document).ready(function () {
  const links = {
    "index.html": "#home-link",
    "activity.html": "#activity-link",
    "aboutus.html": "#aboutus-link",
    "enquiry.html": "#enquiry-link",
    "faqs.html": "#faqs-link",
    "sitemap.html": "#sitemap-link"
  };

  const currentPath = window.location.pathname.split("/").pop();

  if (links[currentPath]) {
    $(links[currentPath]).addClass("active");
  }

  $('.nav-item.dropdown').hover(
    function () {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).slideDown(200);
    },
    function () {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp(200);
    }
  );
});

// footer js
document.getElementById('sub').addEventListener('click', () => {
  let email = document.getElementById('email').value.trim();

  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email)) {
    alert('✅ Thanks for connecting with Prime Fitness!');
    document.getElementById('email').value = ''; // Clear the input field
  
  } else {
    alert('❌ Please enter a valid email address.');
  }
});

