// Example script for future interactivity
//document.addEventListener('DOMContentLoaded', () => {
    //console.log('Document loaded');
    // Add future JavaScript functionality here//
//});
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLink = document.getElementsByClassName('navbar-link')[0]

toggleButton.addEventListener('click', () => {
    navbarLink.classList.toggle('active')
})




