// =================== preloader js  ================== //
document.addEventListener('DOMContentLoaded', function () {
    var preloader = document.querySelector('.preloader');
    preloader.style.transition = 'opacity 0.5s ease';
    // Hide the preloader 1 second (1000 milliseconds) after DOM content is loaded
    setTimeout(function () {
        preloader.style.opacity = '0';
        setTimeout(function () {
            preloader.style.display = 'none';
        }, 500); // .5 seconds for the fade-out transition
    }, 1000); // 1 second delay before starting the fade-out effect
});
// =================== preloader js end ================== //


// =================== light and dark start ================== //





// =================== header js start here ===================


// Add class 'menu-item-has-children' to parent li elements of '.submenu'
var submenuList = document.querySelectorAll("ul>li>.submenu");
submenuList.forEach(function (submenu) {
    var parentLi = submenu.parentElement;
    if (parentLi) {
        parentLi.classList.add("menu-item-has-children");
    }
});

// Fix dropdown menu overflow problem
var menuList = document.querySelectorAll("ul");
menuList.forEach(function (menu) {
    var parentLi = menu.parentElement;
    if (parentLi) {
        parentLi.addEventListener("mouseover", function () {
            var menuPos = menu.getBoundingClientRect();
            if (menuPos.left + menu.offsetWidth > window.innerWidth) {
                menu.style.left = -menu.offsetWidth + "px";
            }
        });
    }
});



// Toggle menu on click

var menuLinks = document.querySelectorAll(".menu li a");

menuLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.stopPropagation(); // prevent the event from bubbling up to parent elements
        var element = link.parentElement;
        if (parseInt(window.innerWidth, 10) < 1200) {
            if (element.classList.contains("open")) {
                element.classList.remove("open");
                element.querySelector("ul").style.display = "none";
            } else {
                element.classList.add("open");
                element.querySelector("ul").style.display = "block";
            }
        }
    });
});




// Toggle header bar on click
var headerBar = document.querySelector(".header-bar");
headerBar.addEventListener("click", function () {
    headerBar.classList.toggle("active");
    var menu = document.querySelector(".menu");
    if (menu) {
        menu.classList.toggle("active");
    }
});




//Header
var fixedTop = document.querySelector("header");
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        fixedTop.classList.add("header-fixed", "fadeInUp");
    } else {
        fixedTop.classList.remove("header-fixed", "fadeInUp");
    }
});


// =================== header js end here =================== //






//Animation on Scroll initializing
AOS.init();




// =================== partner slider slider js here =================== //

// component slider here
const Partner = new Swiper('.partner__slider', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 2,
    breakpoints: {
        576: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 7,
            spaceBetween: 25,
        },
    },
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    speed: 2000,
});

const Partner2 = new Swiper('.partner__slider2', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 2,
    breakpoints: {
        576: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 25,
        },
    },
    speed: 3000,
    autoplay: {
        delay: 0, 
        disableOnInteraction: false, 
        pauseOnMouseEnter: false, 
    },
});




// case-studies  slider here
const caseStudies = new Swiper('.case-studies__slider', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
    },

    autoplay: true,
    speed: 500,
    navigation: {
        nextEl: ".case-studies__slider-next",
        prevEl: ".case-studies__slider-prev",
    },
});

const caseStudies2 = new Swiper('.case-studies__slider2', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
    },

    autoplay: true,
    speed: 500,
    navigation: {
        nextEl: ".case-studies__slider-next",
        prevEl: ".case-studies__slider-prev",
    },
});


// testimonial slider

const testimonial = new Swiper('.testimonial__slider', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    breakpoints: {  
        1200: {
            spaceBetween: 25,
        },
    },

    autoplay: true,
    speed: 500,

    navigation: {
        nextEl: ".testimonial__slider-next",
        prevEl: ".testimonial__slider-prev",
    },
});


// testimonial slider 2
const testimonial2 = new Swiper('.testimonial__slider2', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
    },

    autoplay: true,
    speed: 500,

    navigation: {
        nextEl: ".testimonial__slider-next",
        prevEl: ".testimonial__slider-prev",
    },
});



// testimonial slider 3
const testimonial3 = new Swiper('.testimonial__slider3', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },

        992:{
            slidesPerView: 3,
        }
    },

    autoplay: true,
    speed: 500,

    navigation: {
        nextEl: ".testimonial__slider-next",
        prevEl: ".testimonial__slider-prev",
    },
});



// services category
const servicesCategory = new Swiper('.services-category__slider', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    centeredSlides: true, 
    slidesPerView: 2,
    breakpoints: {
        576: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 6,
        }
    },
    speed: 3000,
    autoplay: {
        delay: 0, 
        disableOnInteraction: false, 
        pauseOnMouseEnter: false, 
    },
});



// service slider
const services = new Swiper('.services2__slider', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
    },
    // Properly configure autoplay
    autoplay: {
        delay: 2000,     
        disableOnInteraction: false, 
        pauseOnMouseEnter: true,     
    },
    speed: 1000,
    navigation: {
        nextEl: ".services2__slider-next",
        prevEl: ".services2__slider-prev",
    },
});





// =================== custom trk slider end here =================== //



// Text circle

document.querySelectorAll(".text").forEach((textElement) => {
    textElement.innerHTML = textElement.innerText
      .split("")
      .map(
        (char, i) => `<span style="transform:rotate(${i * 9.5}deg)">${char}</span>`
      )
      .join("");
  });
  



//Pricing toggle 
document.addEventListener('DOMContentLoaded', function () {
    // Get the toggle element
    const pricingToggle = document.getElementById('pricingToggle');
    
    // Ensure the script runs only on pages that contain the pricing toggle
    if (!pricingToggle) return; 

    // Define the prices for both monthly and yearly plans
    const prices = {
        onDemand: {
            monthly: { value: 20, suffix: '/Hourly' },
            yearly: { value: 15, suffix: '/Hourly' }  // 25% discount
        },
        fullTime: {
            monthly: { value: 3000, suffix: '/Monthly' },
            yearly: { value: 2250, suffix: '/Monthly' }  // 25% discount
        },
        partTime: {
            monthly: { value: 1000, suffix: '/Monthly (Minimum)' },
            yearly: { value: 750, suffix: '/Monthly (Minimum)' }  // 25% discount
        }
    };

    // Function to update prices
    function updatePrices(isYearly) {
        Object.keys(prices).forEach(plan => {
            const priceElement = document.getElementById(`${plan}Price`);
            if (priceElement) {
                const pricing = isYearly ? prices[plan].yearly : prices[plan].monthly;
                const formattedPrice = pricing.value.toLocaleString();
                
                // Update the price display while maintaining the HTML structure
                priceElement.innerHTML = `$${formattedPrice}<span>${pricing.suffix}</span>`;
            }
        });
    }

    // Add change event listener to the toggle
    pricingToggle.addEventListener('change', function () {
        updatePrices(this.checked);
    });
});




// =================== scroll js start here =================== //

// Show/hide button on scroll
window.addEventListener('scroll', function() {
    const scrollToTop = document.querySelector('.scrollToTop');

    if (scrollToTop) {
        if (window.pageYOffset > 300) {
            scrollToTop.style.bottom = '7%';
            scrollToTop.style.opacity = '1';
            scrollToTop.style.transition = 'all .5s ease';
        } else {
            scrollToTop.style.bottom = '-30%';
            scrollToTop.style.opacity = '0';
            scrollToTop.style.transition = 'all .5s ease';
        }
    }
});

const scrollToTop = document.querySelector('.scrollToTop');

if (scrollToTop) {
    // Click event to scroll to top
    scrollToTop.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Using smooth scroll behavior
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// =================== scroll js end here =================== //



// =================== count start here =================== //
new PureCounter();
// =================== count end here =================== //




// =================== rtl icon direction chnage start here =================== //
// Get the HTML tag
const htmlTag = document.querySelector('html');

// Function to toggle the icon directions
function toggleAllIconsDirection() {
    const icons = document.querySelectorAll('i');

    icons.forEach((icon) => {
        if (icon.classList.contains("fa-arrow-right") || icon.classList.contains("fa-angle-right")) {
            icon.classList.remove("fa-arrow-right", "fa-angle-right");
            icon.classList.add("fa-arrow-left", "fa-angle-left");
        } else if (icon.classList.contains("fa-arrow-left") || icon.classList.contains("fa-angle-left")) {
            icon.classList.remove("fa-arrow-left", "fa-angle-left");
            icon.classList.add("fa-arrow-right", "fa-angle-right");
        }
    });
}

// Check if the HTML tag has the dir="rtl" attribute
if (htmlTag.getAttribute('dir') === 'rtl') {
    toggleAllIconsDirection();
}
// =================== rtl icon direction chnage end here =================== //





// const colorSwitcher = document.getElementById('btnSwitch');


// switchThemeByUrl();
// updateThemeColor(localStorage.getItem('theme'))


// colorSwitcher.addEventListener('click', () => {

//     const theme = localStorage.getItem('theme');

//     if (theme && theme === 'dark') {

//         updateThemeColor('light');

//     } else {
//         updateThemeColor('dark');

//     }

// });

// function updateThemeColor(themeMode = 'light') {

//     document.documentElement.setAttribute('data-bs-theme', themeMode);
//     localStorage.setItem('theme', themeMode)

//     if (themeMode === 'dark') {
//         colorSwitcher.classList.add('dark-switcher');

//     } else {
//         colorSwitcher.classList.remove('dark-switcher');
//     }

//     changeImage(themeMode);

// }



// function switchThemeByUrl() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const theme = urlParams.get('theme');

//     if (theme) {
//         localStorage.setItem("theme", theme);
//     }

// }

// =================== light and dark end ================== //




// =================== Change image path start ================== //


// // Store the default theme preference as 'dark'
// const defaultTheme = 'dark';

// // Initialize theme when page loads
// document.addEventListener('DOMContentLoaded', function() {
//     // Get saved theme or use default dark theme
//     const savedTheme = localStorage.getItem('theme') || defaultTheme;
//     changeImage(savedTheme);
// });

// function changeImage(themeMode = defaultTheme) {
//     // Save theme preference
//     localStorage.setItem('theme', themeMode);
    
//     const icon = document.querySelector('#btnSwitch img');

//     if (themeMode === "dark") {
//         icon.src = 'assets/images/icon/sun.svg';
//         var images = document.querySelectorAll('img.dark');

//         for (var i = 0; i < images.length; i++) {
//             var oldSrc = images[i].src;
//             oldSrc = oldSrc.replace("-dark.", ".");
//             var oldIndex = oldSrc.lastIndexOf(".");
//             var baseName = oldSrc.slice(0, oldIndex);
//             var extension = oldSrc.slice(oldIndex);
//             var newSrc = baseName + "-dark" + extension;
//             images[i].src = newSrc;
//         }
//     } else {
//         icon.src = 'assets/images/icon/moon.svg';
//         var images = document.querySelectorAll('img.dark');

//         for (var i = 0; i < images.length; i++) {
//             var oldSrc = images[i].src;
//             var newSrc = oldSrc.replace("-dark.", ".");
//             images[i].src = newSrc;
//         }
//     }
// }

// // Add this function to toggle between themes
// function toggleTheme() {
//     const currentTheme = localStorage.getItem('theme') || defaultTheme;
//     const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
//     changeImage(newTheme);
// }


// =================== Change image path end ================== //









// =================== header js start here ===================


// Add class 'menu-item-has-children' to parent li elements of '.submenu'


// var submenuList = document.querySelectorAll("ul>li>.submenu");
// submenuList.forEach(function (submenu) {
//     var parentLi = submenu.parentElement;
//     if (parentLi) {
//         parentLi.classList.add("menu-item-has-children");
//     }
// });