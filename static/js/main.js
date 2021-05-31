/* Navigation Menu */ /* Navigation Menu */ /* Navigation Menu */
/* Navigation Menu */ /* Navigation Menu */ /* Navigation Menu */
/* Navigation Menu */ /* Navigation Menu */ /* Navigation Menu */
(() =>
{
    const hamburgerBtn = document.querySelector(".hamburger-btn"),
    navMenu = document.querySelector(".nav-menu"),
    closeNavBtn = document.querySelector(".close-nav-menu");
    hamburgerBtn.addEventListener("click" , showNavMenu);
    closeNavBtn.addEventListener("click" , hideNavMenu);
    function showNavMenu()
    {
        navMenu.classList.add("open");
        bodyScrollingToggle();
    }
    function hideNavMenu()
    {
        navMenu.classList.remove("open");
        fadeOutEffect();
        bodyScrollingToggle();
    }
    function fadeOutEffect()
    {
        document.querySelector(".fade-out-effect").classList.add("active");
        setTimeout (() =>
        {
            document.querySelector(".fade-out-effect").classList.remove("active");
        },300)
    }
    document.addEventListener("click",(event) =>
    {
        if(event.target.classList.contains("link-item"))
        {
            if(event.target.hash !=="")
            {
                event.preventDefault();
                const hash = event.target.hash;
                document.querySelector(".section.active").classList.add("hide");
                document.querySelector(".section.active").classList.remove("active");
                document.querySelector(hash).classList.add("active");
                document.querySelector(hash).classList.remove("hide");
                navMenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow");
                navMenu.querySelector(".active").classList.remove("active","inner-shadow");
                if(navMenu.classList.contains("open"))
                {
                    event.target.classList.add("active","inner-shadow");
                    event.target.classList.remove("outer-shadow","hover-in-shadow");
                    hideNavMenu();
                }
                else
                {
                    let navItems = navMenu.querySelectorAll(".link-item");
                    navItems.forEach((item) =>
                    {
                        if(hash === item.hash)
                        {
                            item.classList.add("active","inner-shadow");
                            item.classList.remove("outer-shadow","hover-in-shadow");
                        }
                        else
                        {

                        }
                    })
                    fadeOutEffect();
                }
                window.location.hash = hash;
            }
        }
        else
        {
            
        }
    })
})();
/* About Section Tabs */ /* About Section Tabs */ /* About Section Tabs */
/* About Section Tabs */ /* About Section Tabs */ /* About Section Tabs */
/* About Section Tabs */ /* About Section Tabs */ /* About Section Tabs */
(() =>
{
    const aboutSection = document.querySelector(".about-section") , tabsContainer = document.querySelector(".about-tabs");
    tabsContainer.addEventListener("click", (event)=>
    {
        if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active"))
        {
            const target = event.target.getAttribute("data-target");
            tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
            event.target.classList.add("active","outer-shadow");
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            aboutSection.querySelector(target).classList.add("active");
        }
    })
}
)();
/* Portfolio Filter And Popup */ /* Portfolio Filter And Popup */ /* Portfolio Filter And Popup */
/* Portfolio Filter And Popup */ /* Portfolio Filter And Popup */ /* Portfolio Filter And Popup */
/* Portfolio Filter And Popup */ /* Portfolio Filter And Popup */ /* Portfolio Filter And Popup */
function bodyScrollingToggle()
{
    document.body.classList.toggle("hidden-scrolling");
}
(()=>
{
    const filterContainer = document.querySelector(".portfolio-filter"),
    portfolioItemsContainer = document.querySelector(".portfolio-items"),
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    popup = document.querySelector(".portfolio-popup"),
    prevBtn = popup.querySelector(".pp-prev"),
    nextBtn = popup.querySelector(".pp-next"),
    closeBtn = popup.querySelector(".pp-close"),
    projectDetailsContainer = popup.querySelector(".pp-details"),
    projectDetailsBtn = popup.querySelector(".pp-project-details-btn");
    let itemIndex, slideIndex, screenshots;
    /* Filter Portfolio Items */
    filterContainer.addEventListener("click" ,(event)=>
    {
        if(event.target.classList.contains("filter-item") && !event.target.classList.contains("active"))
        {
            filterContainer.querySelector(".active").classList.remove("active","outer-shadow");
            event.target.classList.add("active","outer-shadow");
            const target = event.target.getAttribute("data-target");
            portfolioItems.forEach((item) =>
            {
                if(target === item.getAttribute("data-category") || target === ('all'))
                {
                    item.classList.remove("hide");
                    item.classList.add("show");
                }
                else
                {
                    item.classList.remove("show");
                    item.classList.add("hide");
                }
            })
        }
        else
        {

        }
    })
    portfolioItemsContainer.addEventListener("click", (event) =>
    {
        if(event.target.closest(".portfolio-item-inner"))
        {
            const portfolioItem = event.target.closest(".portfolio-item-inner").parentElement;
            itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem);
            console.log(itemIndex);
            screenshots = portfolioItems[itemIndex].querySelector(".portfolio-item-img img").getAttribute("data-screenshots");
            console.log(screenshots);
            screenshots = screenshots.split(",");
            console.log(screenshots);
            if(screenshots.length === 1)
            {
                prevBtn.style.display = "none";
                nextBtn.style.display = "none";
            }
            else
            {
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
            }
            slideIndex = 0;
            popupToggle();
            popupSlideshow();
            popupDetails();
        }
    })
    closeBtn.addEventListener("click", () =>
    {
        popupToggle();
        if(projectDetailsContainer.classList.contains("active"))
        {
            popupDetailsToggle();
        }
    })
    function popupToggle()
    {
        popup.classList.toggle("open");
        bodyScrollingToggle();
    }
    function popupSlideshow()
    {
        const imgSrc = screenshots[slideIndex];
        const popupImg = popup.querySelector(".pp-img");
        popup.querySelector(".pp-loader").classList.add("active");
        popupImg.src = imgSrc;
        popupImg.onload = () =>
        {
            popup.querySelector(".pp-loader").classList.remove("active");
        }
        popup.querySelector(".pp-counter").innerHTML = (slideIndex + 1) + " of " + screenshots.length;
    }
    nextBtn.addEventListener("click", () =>
    {
        if(slideIndex === screenshots.length - 1)
        {
            slideIndex = 0;
        }
        else
        {
            slideIndex++;
        }
        popupSlideshow();
    })
    prevBtn.addEventListener("click", () =>
    {
        if(slideIndex === 0)
        {
            slideIndex === screenshots.length-1
        }
        else
        {
            slideIndex--;
        }
        popupSlideshow();
    })
    function popupDetails()
    {
        if(!portfolioItems[itemIndex].querySelector(".portfolio-item-details"))
        {
            projectDetailsBtn.style.display="none";
            return;
        }
        else
        {
            projectDetailsBtn.style.display="block";
        }
        const details = portfolioItems[itemIndex].querySelector(".portfolio-item-details").innerHTML;
        popup.querySelector(".pp-project-details").innerHTML = details;
        const title = portfolioItems[itemIndex].querySelector(".portfolio-item-title").innerHTML;
        popup.querySelector(".pp-title h2").innerHTML = title;
        const category = portfolioItems[itemIndex].getAttribute("data-category");
        popup.querySelector(".pp-project-category").innerHTML = category.split("-").join(" ");
    }
    projectDetailsBtn.addEventListener("click", () =>
    {
        popupDetailsToggle();
    })
    function popupDetailsToggle()
    {
        if(projectDetailsContainer.classList.contains("active"))
        {
            projectDetailsBtn.querySelector("i").classList.remove("fa-minus");
            projectDetailsBtn.querySelector("i").classList.add("fa-plus");
            projectDetailsContainer.classList.remove("active");
            projectDetailsContainer.style.maxHeight = 0 + "px";
        }
        else
        {
            projectDetailsBtn.querySelector("i").classList.remove("fa-plus");
            projectDetailsBtn.querySelector("i").classList.add("fa-minus");
            projectDetailsContainer.classList.add("active");
            projectDetailsContainer.style.maxHeight = projectDetailsContainer.scrollHeight + "px";
            popup.scrollTo(0,projectDetailsContainer.offsetTop);
        }
    }
})();
/* Testimonial Slider */ /* Testimonial Slider */ /* Testimonial Slider */
/* Testimonial Slider */ /* Testimonial Slider */ /* Testimonial Slider */
/* Testimonial Slider */ /* Testimonial Slider */ /* Testimonial Slider */
(() =>
{
    const sliderContainer = document.querySelector(".testi-slider-container"),
    slides = sliderContainer.querySelectorAll(".testi-item"),
    slideWidth = sliderContainer.offsetWidth,
    prevBtn = document.querySelector(".testi-slider-nav .prev"),
    nextBtn = document.querySelector(".testi-slider-nav .next"),
    activeSlide = sliderContainer.querySelector(".testi-item.active");
    let slideIndex = Array.from(activeSlide.parentElement.children).indexOf(activeSlide);
    slides.forEach((slide) =>
    {
        slide.style.width = slideWidth + "px";
    })
    sliderContainer.style.width = slideWidth * slides.length + "px";
    nextBtn.addEventListener("click" , () =>
    {
        if(slideIndex === slides.length - 1)
        {
            slideIndex = 0;
        }
        else
        {
            slideIndex++;
        }
        slider();
    })
    prevBtn.addEventListener("click" , () =>
    {
        if(slideIndex === 0)
        {
            slideIndex = slides.length - 1;
        }
        else
        {
            slideIndex--;
        }
        slider();
    })
    function slider()
    {
        sliderContainer.querySelector(".testi-item.active").classList.remove("active");
        slides[slideIndex].classList.add("active");
        sliderContainer.style.marginLeft = - (slideWidth * slideIndex) + "px";
    }
    slider();
})();
window.addEventListener("load", () =>
{
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(() => 
    {
        document.querySelector(".preloader").style.display="none";
    },600)
    $(".fa-music").click(function()
    {
        if($(this).hasClass("pause"))
        {
            $("#myAudio")[0].play();
        }
        else
        {
            $("#myAudio")[0].pause();
        }
        $(this).toggleClass("pause");
    })
})