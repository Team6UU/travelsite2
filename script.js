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
    
    if (window.location.href.indexOf("faq.html") !== -1) {
        $('.navbar .navlink[href="faq.html"]').addClass('active'); //added functionality to the FAQ button on the nav bar
    }        
        
    if (window.location.href.indexOf("transfers.html") !== -1) {
        $('.navbar .navlink[href="transfers.html"]').addClass('active'); //added functionality to the Transfers button on the nav bar
    }        

    $('#contact-form').on('submit', function(event) {
        event.preventDefault();
        var isValid = true;

        
       $('.errormessage').remove(); 
       $('input, textarea').removeClass('error');
       
       var name = $('#name').val().trim();
         if (name === '') {
            $('#name').addClass('error');
            $('#name').after('<p class="errormessage" role="alert">Name is required.</p>');
            isValid = false;
        }

        var email = $('#email').val().trim();
        if (email === '') {
            $('#email').addClass('error');
            $('#email').after('<p class="errormessage" role="alert">Email is required.</p>');
            isValid = false;
        }

        var message = $('#message').val().trim();
        if (message === '') {
            $('#message').addClass('error');
            $('#message').after('<p class="errormessage" role="alert">Message is required.</p>');
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
             $('.navbar .navlink').removeClass('active');
             $('.navbar .navlink[href="#' + sectionId + '"]').addClass('active');
        }
    });
});



