$(document).ready(function () {

    // OWL CAROUSEL - https://owlcarousel2.github.io/OwlCarousel2/
    $('#main-slider .owl-carousel').owlCarousel(
        {
            items: 1,
            margin: 0,
            loop: true,
            nav: false,
            navText: ['Back', 'Next'],
            dots: true,
            dotsEach: true,
            autoplay: false,
            autoplaySpeed: 500,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
        }
    );
    $('#owl-1 .owl-carousel').owlCarousel({
        items: 4,
        margin: 16,
        loop: true,
        nav: true,
        navText: ['', ''],
        dots: true,
        lazyLoad: false,
        autoplay: false,
        autoplaySpeed: 500,
        navSpeed: 500,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1  // 1 item for screen width 0px and up
            },
            600: {
                items: 3  // 1 item for screen width 600px and up
            },
            1000: {
                items: 4  // 4 items for screen width 1000px and up
            }
        }
    });

    $('#trophycabinet .owl-carousel').owlCarousel(
        {
            items: 4,
            margin: 16,
            loop: false,
            // stagePadding: 64,
            nav: true,
            navText: ['Back', 'Next'],
            navText: ['', ''],
            // navText: ['Back ', 'Next'],
            dots: true,
            dotsEach: true,
            lazyLoad: false,
            autoplay: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 2  // 1 item for screen width 0px and up
                },
                600: {
                    items: 2  // 1 item for screen width 600px and up
                },
                1000: {
                    items: 4  // 4 items for screen width 1000px and up
                }
            }
        }
    );
    $('#innews .owl-carousel').owlCarousel(
        {
            items: 3,
            margin: 16,
            loop: true,
            // stagePadding: 64,
            nav: true,
            navText: ['Back', 'Next'],
            navText: ['', ''],
            // navText: ['Back ', 'Next'],
            dots: true,
            dotsEach: true,
            lazyLoad: false,
            autoplay: true,
            autoplaySpeed: 3000,
            navSpeed: 3000,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1  // 1 item for screen width 0px and up
                },
                600: {
                    items: 1  // 1 item for screen width 600px and up
                },
                1000: {
                    items: 4  // 4 items for screen width 1000px and up
                }
            }
        }
    );
    $('#getEstimate .owl-carousel').owlCarousel(
        {
            items: 4,
            margin: 16,
            loop: false,
            // stagePadding: 64,
            nav: true,
            navText: ['Back', 'Next'],
            navText: ['', ''],
            // navText: ['Back ', 'Next'],
            dots: true,
            dotsEach: true,
            lazyLoad: false,
            autoplay: false,
            responsive: {
                0: {
                    items: 1  // 1 item for screen width 0px and up
                },
                600: {
                    items: 1  // 1 item for screen width 600px and up
                },
                1000: {
                    items: 3  // 4 items for screen width 1000px and up
                }
            }
        }
    );
    $('#customerReview .owl-carousel').owlCarousel(
        {
            items: 4,
            margin: 16,
            loop: false,
            // stagePadding: 64,
            nav: true,
            navText: ['Back', 'Next'],
            navText: ['', ''],
            // navText: ['Back ', 'Next'],
            dots: true,
            dotsEach: true,
            lazyLoad: false,
            autoplay: false,
            responsive: {
                0: {
                    items: 1  // 1 item for screen width 0px and up
                },
                600: {
                    items: 1  // 1 item for screen width 600px and up
                },
                1000: {
                    items: 3  // 4 items for screen width 1000px and up
                }
            }
        }
    );
    $('#trending .owl-carousel').owlCarousel(
        {
            items: 4,
            margin: 16,
            loop: false,
            // stagePadding: 64,
            nav: true,
            navText: ['Back', 'Next'],
            navText: ['', ''],
            // navText: ['Back ', 'Next'],
            dots: true,
            dotsEach: true,
            lazyLoad: false,
            autoplay: false,
            responsive: {
                0: {
                    items: 1  // 1 item for screen width 0px and up
                },
                600: {
                    items: 1  // 1 item for screen width 600px and up
                },
                1000: {
                    items: 3  // 4 items for screen width 1000px and up
                }
            }
        }
    );
    $('#tabs .owl-carousel').owlCarousel(
        {
            margin: 16,
            loop: false,
            stagePadding: 64,
            nav: true,
            navText: ['Back', 'Next'],
            navText: [
                "<div class='chevron-left'><i class='fa fa-chevron-left'></i></div>",
                "<div class='chevron-right'><i class='fa fa-chevron-right'></i></div>"
            ],
            dots: false,
            // dotsEach: true,
            lazyLoad: false,
            autoplay: false,
            autoplaySpeed: 3000,
            navSpeed: 1000,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            autoWidth: true,
            responsive: {
                0: {
                    items: 1  // 1 item for screen width 0px and up
                },
                600: {
                    items: 1  // 1 item for screen width 600px and up
                },
                1000: {
                    items: 6  // 4 items for screen width 1000px and up
                }
            }
        }
    );
    $('#getglimpse .owl-carousel').owlCarousel(
        {
            items: 3,
            margin: 16,
            loop: true,
            nav: true,
            dots: true,
            navText: ['', ''],
            dotsEach: true,
            lazyLoad: false,
            autoplay: false,
            autoplaySpeed: 500,
            navSpeed: 1000,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1  // 1 item for screen width 0px and up
                },
                600: {
                    items: 1  // 1 item for screen width 600px and up
                },
                1000: {
                    items: 3  // 4 items for screen width 1000px and up
                }
            }
        }
    );

    $('#owl-2 .owl-carousel').owlCarousel(
        {
            items: 1,
            margin: 16,
            // stagePadding: 32,
            loop: true,
            autoplay: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dots: true,
            dotsEach: true,
            nav: true,
            navText: ['Back', 'Next'],
            navText: ['', ''],
            autoplayTimeout: 2000,
            autoplayHoverPause: false,
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
        }
    );
    $('#whychoseus .owl-carousel').owlCarousel({
        items: 6,
        margin: 16,
        loop: true,
        autoplay: true,
        rewindNav: false,
        rewindSpeed: 0,
        navSpeed: 500,
        autoplaySpeed: 3000,
        autoplayTimeout: 1500,
        autoplayHoverPause: true, // Pause on hover
        nav: false, // Disable navigation buttons
        dots: false, // Disable dots navigation
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        responsive: {
            0: {
                items: 2  // 1 item for screen width 0px and up
            },
            600: {
                items: 5  // 3 items for screen width 600px and up
            },
            1000: {
                items: 6  // 6 items for screen width 1000px and up
            }
        }
    });
    /*modular interior*/
    $('#modular-interiors-carousel1 .owl-carousel').owlCarousel(
        {
            items: 1,
            margin: 0,
            nav: false,
            navText: ['Back', 'Next'],

        }
    );
    $('.whatWeOffer .owl-carousel').owlCarousel(
        {
            items: 3,
            margin: 16,
            // stagePadding: 32,
            autoplay: false,
            navText: ['', ''],
        }
    );


});

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion, index) => {
    const header = accordion.querySelector(".accordion__header");
    const content = accordion.querySelector(".accordion__content");
    const icon = accordion.querySelector(".accordion__icon i");


    header.addEventListener("click", () => {
        const isOpen = content.style.height === `${content.scrollHeight}px`;

        console.log("isOpen:", isOpen);
        console.log("index:", index);

        accordions.forEach((a, i) => {
            const c = a.querySelector(".accordion__content");
            const ic = a.querySelector(".accordion__icon i");

            console.log("i:", i);

            c.style.height = i === index && !isOpen ? `${c.scrollHeight}px` : "0px";
            ic.classList.toggle("fa-plus", i !== index || isOpen);
            ic.classList.toggle("fa-minus", i === index && !isOpen);
        });
    });

});

$(document).ready(function () {
    var input = document.querySelector("#phone");
    window.intlTelInput(input, {
        initialCountry: "auto",
        geoIpLookup: function (success, failure) {
            $.get("https://ipinfo.io", function () { }, "jsonp").always(function (resp) {
                var countryCode = (resp && resp.country) ? resp.country : "us";
                success(countryCode);
            });
        },
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js" // for formatting/placeholders etc
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Show the "Dressing Design" tab pane
    const dressingTabPane = document.getElementById('dressing');
    dressingTabPane.style.display = 'block';

    // Show the tab content container
    const tabContent = document.querySelector('.tab-content');
    tabContent.style.display = 'block';

    // Get all tab links
    const tabLinks = document.querySelectorAll('#tabs .nav-link');


    // Add click event listener to each tab link
    tabLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior

            // Remove active class from all tab links
            tabLinks.forEach(link => link.classList.remove('active'));

            // Add active class to the clicked tab link
            this.classList.add('active');

            // Get the target tab pane
            const targetTabPane = document.getElementById(this.getAttribute('aria-controls'));

            // Hide all tab panes
            const tabPanes = document.querySelectorAll('.tab-pane');
            tabPanes.forEach(pane => pane.style.display = 'none');

            // Show the target tab pane
            targetTabPane.style.display = 'block';
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {

    // Get all tab links
    const navlink = document.querySelectorAll('.navbar .nav-link');


    // Add click event listener to each tab link
    navlink.forEach(link => {
        link.addEventListener('click', function (e) {

            // Remove active class from all tab links
            navlink.forEach(link => link.classList.remove('active'));

            // Add active class to the clicked tab link
            this.classList.add('active');

            // Get the target tab pane

        });
    });
});

$(document).ready(function () {

    // OWL CAROUSEL - https://owlcarousel2.github.io/OwlCarousel2/
    $('#spacerteam .owl-carousel').owlCarousel(
        {
            items: 3,
            margin: 16,
            loop: false,
            nav: true,
            navText: [
                "<div class='chevron-left'><i class='fa fa-chevron-left'></i></div>",
                "<div class='chevron-right'><i class='fa fa-chevron-right'></i></div>"
            ],
            dots: true,
            dotsEach: true,

            autoplay: false,
            autoplaySpeed: 500,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                600: {
                    items: 1,
                    nav: true,
                }
            }
        }
    );
    $('.hear-spacers .owl-carousel').owlCarousel(
        {
            items: 3,
            margin: 16,
            loop: false,
            nav: false,
            navText: [
                "", ""
            ],
            dots: false,
            dotsEach: false,

            autoplay: false,
            autoplaySpeed: 500,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                600: {
                    items: 1,
                    nav: true,
                }
            }
        }
    );


});

// Caret icon toggle
document.querySelectorAll('.nav-links li, .col-head1').forEach(dropdown => {
    const icon = dropdown.querySelector('.dropdown-button');

    dropdown.addEventListener('mouseenter', () => {
        icon.classList.replace('fa-caret-down', 'fa-caret-up');
    });

    dropdown.addEventListener('mouseleave', () => {
        icon.classList.replace('fa-caret-up', 'fa-caret-down');
    });
});

// Chat button and popup
const chatButton = document.querySelector(".open-button");
const chatPopup = document.querySelector(".chat-popup");
const closeButton = document.querySelector(".headsec img");
const form = document.getElementById("myForm");

function openForm() {
    form.style.display = "block";
}

function closeForm() {
    form.style.display = "none";
}

const tl = new TimelineMax();

tl.fromTo(chatButton, 2, { y: "200%" }, { y: "0%", ease: Power2.easeInOut });

chatButton.addEventListener("click", () => {
    tl.fromTo(chatButton, 1, { y: "0%" }, { y: "200%", ease: Power2.easeInOut });
    tl.fromTo(chatPopup, 1.2, { y: "200%" }, { y: "0%", ease: Power2.easeInOut }, "-=0.8");
});

closeButton.addEventListener("click", () => {
    tl.fromTo(chatPopup, 1.5, { y: "0%" }, { y: "200%", ease: Power2.easeInOut });
    tl.fromTo(chatButton, 1.2, { y: "200%" }, { y: "0%", ease: Power2.easeInOut }, "-=0.8");
});

// Tabs
const tabButtons = document.querySelectorAll(".tab-container .button-container button");
const tabPanels = document.querySelectorAll(".tab-container .tab-panel");

function showPanel(index) {
    tabButtons.forEach((button, i) => {
        button.style.borderBottom = i === index ? "4px solid #eb595f" : "";
        button.style.color = i === index ? "#eb595f" : "";
    });

    tabPanels.forEach((panel, i) => {
        panel.style.display = i === index ? "block" : "none";
    });
}

showPanel(0);

// Video modal
$(document).ready(function () {
    let videoSrc;

    $('.video-btn').click(function () {
        videoSrc = $(this).data("src");
    });

    $('#myModal').on('shown.bs.modal', function () {
        $("#video").attr('src', `${videoSrc}?autoplay=1&modestbranding=1&showinfo=0`);
    });

    $('#myModal').on('hide.bs.modal', function () {
        $("#video").attr('src', videoSrc);
    });
});


