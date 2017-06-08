console.log('Hello World.');
$(function () {

  var i = 0;


  $(".carasell").flickity({
    prevNextButtons: false,
    cellAlign: 'left',
    wrapAround: true,
    autoPlay: true,

  })

  $(".carasell").children().children("div").siblings().css('text-transform: upercase')



  //TAKE FROM: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
  $(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

  $('.submit-email').on('click', function () {

    var input = $('input').val();

    if (input == "") {
      alert('Please enter a valid email!')
    } else {
      alert('Thanks for signing up!')
    }

  })

  $(".add").click(function () {
    event.preventDefault();
    i++
    console.log(i);
    $(".items-in-cart").replaceWith("<h2 class='items-in-cart'>" + i + "</h2>")

  })


})