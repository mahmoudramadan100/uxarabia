// Venobox

   $('.venobox').venobox({

        overlayColor: 'rgba(0, 0, 0,0.9)',     

    });


// Certi Collpase

// Collpase-two / cp-two

$('.two-h').on('click', function () {

    $('.cp-head').removeClass('cp-two-op ');
});
// Collpase-three / cp-three
$('.three-h').on('click', function () {

    $('.cp-head').removeClass('cp-three-op ');
});




//FAQ Collpase

// Collpase-faq-two / cp-fq-two
$('.fq-two-h').on('click', function () {

    $('.cp-head').removeClass('cp-two-fq');
});

// Collpase-faq-three / cp-fq-three
$('.fq-three-h').on('click', function () {

    $('.cp-head').removeClass('cp-three-fq');
});

// Collpase-faq-four / cp-fq-four
$('.fq-four-h').on('click', function () {

    $('.cp-head').removeClass('cp-four-fq');
});

// Collpase-faq-five / cp-fq-five
$('.fq-five-h').on('click', function () {

    $('.cp-head').removeClass('cp-five-fq');
});

// Collpase-faq-six / cp-fq-six
$('.fq-six-h').on('click', function () {

    $('.cp-head').removeClass('cp-six-fq');
});

// Collpase-faq-svn / cp-fq-svn
$('.fq-svn-h').on('click', function () {

    $('.cp-head').removeClass('cp-svn-fq');
});

// Collpase-faq-eit / cp-fq-eit
$('.fq-eit-h').on('click', function () {

    $('.cp-head').removeClass('cp-eit-fq');
});

// Collpase-faq-nine / cp-fq-nine
$('.fq-nine-h').on('click', function () {

    $('.cp-head').removeClass('cp-nine-fq');
});


// Collpase-faq-ten / cp-fq-ten
$('.fq-ten-h').on('click', function () {

    $('.cp-head').removeClass('cp-ten-fq');
});



// Inter - Counter

$('#counter').click(function() {
    $('.count').html(function(i, val) { return val*1+1 });
   
});



//Smooth scrolling - Get this video for free


// Select all links with hashes
$('#lessonplan a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
 
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
  
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
     
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
        
       
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus();
          };
        });
      }
    }
  });
