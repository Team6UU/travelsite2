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
        
    $('#contact-form').on('submit', function(event) {
        event.preventDefault();
        var isValid = true;

        
       $('.errormessage').remove(); 
       $('input, textarea').removeClass('error');
       
       var name = $('#name').val().trim();
         if (name === '') {
            $('#name').addClass('error');
            $('#name').after('<p class="errormessage">Name is required.</p>');
            isValid = false;
        }

        var email = $('#email').val().trim();
        if (email === '') {
            $('#email').addClass('error');
            $('#email').after('<p class="errormessage">Email is required.</p>');
            isValid = false;
        }

        var message = $('#message').val().trim();
        if (message === '') {
            $('#message').addClass('error');
            $('#message').after('<p class="errormessage">Message is required.</p>');
            isValid = false;
        }

        if (isValid) {
            $('#contact-form').hide();
            $('#success-message').fadeIn();

            
        }

    });

     // --- BOOK NOW MODAL ---
    $('.book-now').on('click', function() {
        var destination = $(this).data('destination');
        $('#modal-destination').text('Interested in ' + destination + '?');
        $('#modal-overlay').css('display', 'flex');
    });

    // Close modal when close button is clicked
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
});



