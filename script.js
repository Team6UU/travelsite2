$(document).ready(function() {  /* Ensures the DOM is fully loaded before executing the script */
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {  /* Selects all anchor links that start with '#' and attaches a click event handler */
        event.preventDefault();  /* Prevents the default anchor link behavior */
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({ /* Animates the scroll to the target element's position */
                scrollTop: target.offset().top
            }, 600);  /* Duration of the animation in milliseconds */
        }
    });    
    
    /*Additional Navigation Buttons */
    $('.contact').on('click', function(){
    window.location.href = "contactus.html";
    });

    $('.faq').on('click', function(){
    window.location.href = "faq.html";
    });
    
    
    if (window.location.href.indexOf('contactus.html') !== -1) {
        $('.navbar a[href="contactus.html"]').addClass('active');
      }

    if (window.location.href.indexOf('travelsite.html') !== -1) {
        $('.navbar a[href="travelsite.html"]').addClass('active');
        }
    
    if (window.location.href.indexOf("destinations.html") !== -1) {
        $('.navbar .nav-link[href="destinations.html"]').addClass('active'); //added functionality to the Destinations button on the nav bar
    }
    
    if (window.location.href.indexOf("faq.html") !== -1) {
        $('.navbar .nav-link[href="faq.html"]').addClass('active'); //added functionality to the FAQ button on the nav bar
    }        
        
    if (window.location.href.indexOf("Transfers.html") !== -1) {
        $('.navbar .nav-link[href="Transfers.html"]').addClass('active'); //added functionality to the Transfers button on the nav bar
    } 
    
    if (window.location.href.indexOf("about.html") !== -1) {
        $('.navbar .nav-link[href="about.html"]').addClass('active');
    }

    $('#contact-form').on('submit', function(event) {
        event.preventDefault();
        var isValid = true;

        
       $('.errormessage').remove(); 
       $('input, textarea').removeClass('error');
       
       var name = $('#name').val().trim();
         if (name === '') {
            $('#name').addClass('error');
            $('#name').after('<p class="error-message" role="alert">Name is required.</p>');
            isValid = false;
        }

        var email = $('#email').val().trim();
        if (email === '') {
            $('#email').addClass('error');
            $('#email').after('<p class="error-message" role="alert">Email is required.</p>');
            isValid = false;
        }

        var message = $('#message').val().trim();
        if (message === '') {
            $('#message').addClass('error');
            $('#message').after('<p class="error-message" role="alert">Message is required.</p>');
            isValid = false;
        }

        if (isValid) {
            $('#contact-form').hide();
            $('#success-message').fadeIn();

            
        }

    });

 $('.book-now').on('click', function() {
    var destination = $(this).data('destination');
    Swal.fire({
        title: 'Interested in ' + destination + '?',
        text: 'Fill out our contact form and we will get back to you within 24 hours!',
        icon: 'info',
        confirmButtonText: 'Contact Us',
        confirmButtonColor: '#007BFF'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'contactus.html';
        }
     });
 
     });
 });

/* Navbar active link highlighting on scroll */

    $(window).on('scroll', function () {
        var scrollPosition = $(this).scrollTop();
        $('section').each(function () {
            var sectionTop = $(this).offset().top - 200;
            var sectionId = $(this).attr('id');
            if (scrollPosition >= sectionTop) {
             $('.navbar .nav-link').removeClass('active');
             $('.navbar .nav-link[href="#' + sectionId + '"]').addClass('active');
        }
    });
});



// --- All slideshow images for all countries ---

const slideshowImages = {
  spain: [
    "images/spain1.webp",
    "images/spain2.webp",
    "images/spain3.webp",
    "images/spain4.webp"
  ],
  italy: [
    "images/italy1.webp",
    "images/italy2.webp",
    "images/italy3.webp",
    "images/italy4.webp"
  ],
  france: [
    "images/france1.webp",
    "images/france2.webp",
    "images/france3.webp",
    "images/france4.webp"
  ],
  germany: [
    "images/germany1.jpg",
    "images/germany2.webp",
    "images/germany3.jpg",
    "images/germany4.webp"
  ],
  portugal: [
    "images/portugal1.webp",
    "images/portugal2.webp",
    "images/portugal3.webp",
    "images/portugal4.webp"
  ],
  poland: [
    "images/poland1.webp",
    "images/poland2.webp",
    "images/poland3.webp",
    "images/poland4.webp"
  ],
  japan: [
    "images/japan1.webp",
    "images/japan2.webp",
    "images/japan3.webp",
    "images/japan4.webp"
  ],
  dubi: [
    "images/dubi1.webp",
    "images/dubi2.webp",
    "images/dubi3.webp",
    "images/dubi4.webp"
  ],
  greece: [
    "images/greece1.webp",
    "images/greece2.webp",
    "images/greece3.webp",
    "images/greece4.webp"
  ],
  switzerland: [
    "images/switzerland1.webp",
    "images/switzerland2.webp",
    "images/switzerland3.webp",
    "images/switzerland4.webp"
  ]
};


// --- Reusable slideshow setup function ---

function setupSlideshow(country) {
  const images = slideshowImages[country];
  let index = 0;

  const imgElement = document.querySelector(`#${country} .slideshow img`);
  const nextBtn = document.querySelector(`#${country} .slideshow .right`);
  const prevBtn = document.querySelector(`#${country} .slideshow .left`);

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % images.length;
    imgElement.src = images[index];
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    imgElement.src = images[index];
  });
}


// --- Activate slideshows for ALL countries automatically ---

Object.keys(slideshowImages).forEach(country => {
  setupSlideshow(country);
});