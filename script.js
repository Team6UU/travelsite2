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
    


    


if (window.location.href.indexOf('contactus.html') !== -1) {
        $('.navbar a[href="contactus.html"]').addClass('active');
    }

  if (window.location.href.indexOf('travelsite.html') !== -1) {
        $('.navbar a[href="travelsite.html"]').addClass('active');
    }    
    
}); 

/* Navbar active link highlighting on scroll */

$(window).on('scroll', function () {
    var scrollPosition = $(this).scrollTop();
    $('section').each(function () {
        var sectionTop = $(this).offset().top - 200;
        var sectionId = $(this).attr('id');
        if (scrollPosition >= sectionTop) {
            $('.navbar a').removeClass('active');
            $('.navbar a[href="#' + sectionId + '"]').addClass('active');
        }
    });



$('#contact-form').on('submit', function(event) {
    event.preventDefault(); // Stop the form refreshing the page
    
    var isValid = true; // We assume the form is valid to start

    // Clear any previous errors first
    $('.error-message').remove();
    $('input, textarea').removeClass('input-error');

    // Check name field
    var name = $('#name').val().trim();
    if (name === '') {
        $('#name').addClass('input-error');
        $('#name').after('<p class="error-message">Please enter your name</p>');
        isValid = false;
    }

    // Check email field
    var email = $('#email').val().trim();
    if (email === '') {
        $('#email').addClass('input-error');
        $('#email').after('<p class="error-message">Please enter your email</p>');
        isValid = false;
    }

    // Check message field
    var message = $('#message').val().trim();
    if (message === '') {
        $('#message').addClass('input-error');
        $('#message').after('<p class="error-message">Please enter a message</p>');
        isValid = false;
    }

    // If everything is filled in correctly
    if (isValid) {
        $('#contact-form').hide(); // Hide the form
        $('#success-message').fadeIn(); // Show the success message
    }
});

// ---- BOOK NOW MODAL ----
// When Book Now is clicked, show the modal with the destination name
$('.book-now').on('click', function() {
    var destination = $(this).data('destination'); // Gets the destination name from the button
    $('#modal-destination').text('Interested in ' + destination + '?'); // Updates the modal title
    $('#modal-overlay').css('display', 'flex'); // Shows the modal
});

// Close modal when X is clicked
$('#modal-close').on('click', function() {
    $('#modal-overlay').hide();
});

// Close modal when clicking outside the box
$('#modal-overlay').on('click', function(e) {
    if ($(e.target).is('#modal-overlay')) {
        $('#modal-overlay').hide();
    }
});

});

