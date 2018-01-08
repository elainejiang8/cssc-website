/*!
 * Custom JS for CS33
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    var func = function(event) {
        var $anchor = $(this);
        $("#page-title").addClass("top-nav-collapse");
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 800, 'easeInOutExpo');
        event.preventDefault();
    };
    $('a.page-scroll').bind('click', func);
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Adds background class on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 65) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//TA pictures: onhover change to character pictures
$(".ta div").each(
    function() {
        var taId = this.id;
        $("#hidden-imgs").prepend($("<img>",{src:"img/" + taId + ".jpg"}));
        this.style.backgroundImage = "url(\"img/characters/" + taId + "-char.jpg\")";
        $(".ta div#" + taId).hover(
            function() {
                this.style.backgroundImage = "url(\"img/" + taId + ".jpg\")";
            },
            function() {
                this.style.backgroundImage = "url(\"img/characters/" + taId + "-char.jpg\")";
            }
        );
    }
);