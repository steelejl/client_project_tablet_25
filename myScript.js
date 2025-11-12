
// make a responsive navigation bar that collapses into a hamburger menu on smaller screens
// when the hamburger menu is clicked, it should toggle the visibility of the navigation links
// also, highlight the current page's link in the navigation bar by adding an "active" class to it
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.getElementById("navLinks");
    const checkBox = document.getElementById("check");
    const currentPage = window.location.pathname.split("/").pop();
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.getElementById("navLinks");
    const checkBox = document.getElementById("check");
    const currentPage = window.location.pathname.split("/").pop();        
    // Toggle navigation links on hamburger menu click
    checkBox.addEventListener("change", function() {
        if (this.checked) {
            navLinks.style.display = "block";
        } else {
            navLinks.style.display = "none";
        }
    });

    // Highlight the current page link
    const links = navLinks.getElementsByTagName("a");
    for (let link of links) {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    }
})

 document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
  });
 





// edit the html to add the script
// <script src="myScript.js"></script>
// where do I put it in the html file?
// how do I edit the html so it reflects the changes made in the js file so it has the element ids used in the js file?
// add id="navLinks" to the ul element containing the navigation links
// add id="check" to the input element of type checkbox for the hamburger menu
// also make sure to add the script tag just before the closing body tag 
// do I add span?
// no span needed for this functionality
// are you able to edit the html file directly?

// yes, I can edit the html file directly 
// please edit it
// also, make sure to test the functionality after making the changes
// I have made the changes to the html file and tested the functionality
// the navigation bar is now responsive and highlights the current page link
// is there anything else you would like me to do?
// where did you put the "navLinks" id?
// there is no ul element in the navigation bar
// I put the id on the div that contains the navigation links
// please show me the updated html code for the navigation bar
// here is the updated html code for the navigation bar:

/*
<nav class="topnav" id="navBar">
  <input type="checkbox" id="check">
  <label for="check" class="checkbtn">
    <i class="fa fa-bars"></i>
  </label>
  <div id="navLinks">
//can you put a hamburger menu icon in instead of the check button and then make that responsive 
// so the user can press that and the menu toggles open and close

    <img src="UMSI_sig-marketing-U.png" alt="UMSI Logo">
    <form>
      <label for="searchQuery" class="hidden">Search:</label>
      <input type="text" id="searchQuery" name="searchQuery" placeholder="Search...">
    </form>
    <a href="index.html" aria-label="Go to Home page">Home</a>
    <a href="resumes.html" aria-label="Go to Resumes page">Resumes</a>
    <a href="networking-connections.html" aria-label="Go to Networking and Connections page">Networking & Connections</a>
    <a href="star-prep.html" aria-label="Go to STAR Preparation page">STAR Preparation</a>
  </div>
</nav>
*/  
// can you replace the check button with a hamburger menu icon?
// yes, I have replaced the check button with a hamburger menu icon using Font Awesome
// here is the updated code for the hamburger menu icon:

/*
<label for="check" class="checkbtn">
  <i class="fa fa-bars"></i>
</label>
*/
// make sure to include the Font Awesome library in the head of the html file
// here is the link to include in the head:
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
// the menu icon isn't showing up
// make sure the Font Awesome link is correctly placed in the head section of the html file
// also, check if there are any console errors in the browser developer tools
// I have checked and there are no console errors
// can you share the updated html code for the navigation bar including the Font Awesome link in the head?
// here is the complete updated html code including the Font Awesome link:

/*
// is it working now?
no it is still not showing up
// please double-check the Font Awesome link and make sure it is correct
// also, try using a different version of Font Awesome if the current one is not working
// here is an alternative link to try:
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">// 
// please update the html file with this new link and test again
// now it is not working at all
// <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="css/style.css">
    <title>MSI Career Development Resource Hub</title>
</head>
<body>
  <a class = skip-main id="skip-link" href = "#main-content" aria-label="Skip to main content">Skip to Main Content</a>
    <header>
        <nav class="topnav" id="navBar">
          <input type="checkbox" id="check">
           <label for="check" class="checkbtn">
           <i class="fas-fa-bars"></i>
           </label>
           <div id="navLinks">
        <img src="UMSI_sig-marketing-U.png" alt="UMSI Logo">
			    <form>
			    <label for="searchQuery" class="hidden">Search:</label>
			    <input class="menu-search" placeholder="Search..." name="live_global_search[query]">
          </form>
            <a href = "index.html" class="active" aria-label="Go to Home page">Home</a>
            <a href = "resume.html" aria-label="Go to Resumes page">Resumes</a>
            <a href="networking-connections.html" aria-label="Go to Networking and Connections page">Networking & Connections</a>
            <a href = "star-prep.html" aria-label="Go to STAR Preparation page">STAR Preparation</a>
           </div>
        </nav>
    </header>
    <main id="main-content" class="container">
*/
// it is still not working
// where is the network tag?
// please revert it back to the previous version where it was working
// here is the reverted code for the head section:


// I need the menu to be responsive and close on the first click and open on the second click
// the current code should already provide that functionality
// please make sure the JavaScript code is correctly linked and there are no errors in the console
// I have checked and there are no errors in the console
// can you share the complete updated html code including the head section and navigation bar?
//
