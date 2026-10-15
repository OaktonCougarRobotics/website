// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const teamDropdownButton = document.querySelector('.mobile-menu .dropdown-button');
const mobileTeamDropdown = document.querySelector('.mobile-dropdown-content');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Mobile Teams dropdown
teamDropdownButton.addEventListener('click', () => {
    mobileTeamDropdown.classList.toggle('active');
});

/* ~~~~~~~~~~~~~~~ Go to Top Button ~~~~~~~~~~~~~~~ */
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

fetch('header.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    })
    .catch(error => {
        console.error('Error loading the header:', error);
    });
