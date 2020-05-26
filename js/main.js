$(document).ready(function () {
    // Add smooth scrolling to all links in navbar + footer link
    $(".navigation a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });
})

window.addEventListener("scroll", function () {
    //make nav bar clip to top of page when scrolling past it
    var landingPageHeight = document.getElementsByClassName('landing-page')[0].offsetHeight;
    document.getElementById("nav");
    var top = window.pageYOffset || document.documentElement.scrollTop;

    if (top > landingPageHeight - 57) { //landingPageHeight - height of nav bar
        nav.style.position = "fixed";
        nav.style.top = "0";
        nav.style.height = "40px";
    } else {
        nav.style.position = "absolute";
        nav.style.top = "auto";
    }
}, false);

window.addEventListener("resize", function () {
    // change nav bar text
    var children = document.getElementById('nav').childNodes[1].childNodes;
    if (window.innerWidth < 500) {
        children[1].firstChild.innerText = 'ME';
        children[3].firstChild.innerText = 'EDU';
        children[5].firstChild.innerText = 'SKI';
        children[7].firstChild.innerText = 'PRO';
        children[9].firstChild.innerText = 'EDU';
        children[11].firstChild.innerText = 'CON';
    } else {
        children[1].firstChild.innerText = 'About Me';
        children[3].firstChild.innerText = 'Education';
        children[5].firstChild.innerText = 'Skills';
        children[7].firstChild.innerText = 'Projects';
        children[9].firstChild.innerText = 'Education';
        children[11].firstChild.innerText = 'Contact';
    }
});