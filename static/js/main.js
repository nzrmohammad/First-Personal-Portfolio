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
    // Attach an Event Handler To Document
    document.addEventListener("click",(event) =>
    {
        // console.log(event.handler);
        if(event.target.classList.contains("link-item"))
        {
            // console.log("event.target contains "link-item" class");
            // console.log(event.target.hash);
            /* Make Sure event.target.hash has a value before overridding Default Behavior */
            if(event.target.hash !=="")
            {
                /* Prevent Default Anchor Click Behavior */
                event.preventDefault();
                const hash = event.target.hash;
                // console.log(hash);
                /* Deactivate existing active  Section */
                document.querySelector(".section.active").classList.add("hide");
                document.querySelector(".section.active").classList.remove("active");
                /* Activate New Section */
                document.querySelector(hash).classList.add("active");
                document.querySelector(hash).classList.remove("hide");
                /* Deactivate existing active  Navvigation-Menu "Link-Item" */
                navMenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow");
                navMenu.querySelector(".active").classList.remove("active","inner-shadow");
                /* if Clicked Link item is Contained Withing The Navigation Menu */
                if(navMenu.classList.contains("open"))
                {
                    /* Activate New Navvigation-Menu "Link-Item" */
                    event.target.classList.add("active","inner-shadow");
                    event.target.classList.remove("outer-shadow","hover-in-shadow");
                    /* Hide Navvigation-Menu */
                    hideNavMenu();
                    // console.log("Clicked Link item is Contained Within The Navigation Menu");
                }
                else
                {
                    // console.log("Clicked Link item is Not Contained Within The Navigation Menu");
                    let navItems = navMenu.querySelectorAll(".link-item");
                    navItems.forEach((item) =>
                    {
                        if(hash === item.hash)
                        {
                            /* Activate New Navvigation-Menu "Link-Item" */
                            item.classList.add("active","inner-shadow");
                            item.classList.remove("outer-shadow","hover-in-shadow");
                        }
                        else
                        {

                        }
                    })
                    fadeOutEffect();
                }
                /* Add Hash (#) To Url */
                window.location.hash = hash;
            }
        }
        else
        {
            // console.log("event.target Not contains "link-item" class");
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
    //console.log(portfolioItems);



    /* Filter Portfolio Items */
    filterContainer.addEventListener("click" ,(event)=>
    {
        if(event.target.classList.contains("filter-item") && !event.target.classList.contains("active"))
        {
            //console.log("True");
            filterContainer.querySelector(".active").classList.remove("active","outer-shadow");
            event.target.classList.add("active","outer-shadow");
            const target = event.target.getAttribute("data-target");
            //console.log(target);
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
            //console.log("False");
        }
        //console.log(event.target);
    })
    


    portfolioItemsContainer.addEventListener("click", (event) =>
    {
        if(event.target.closest(".portfolio-item-inner"))
        {
            const portfolioItem = event.target.closest(".portfolio-item-inner").parentElement;
            // console.log(portfolioItem);
            /* Get The PortfolioItem Index */
            itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem);
            console.log(itemIndex);
            screenshots = portfolioItems[itemIndex].querySelector(".portfolio-item-img img").getAttribute("data-screenshots");
            console.log(screenshots);
            /* Convert Screenshots In To The Array */
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



    /* Close Button */
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
        // console.log("Test");
        const imgSrc = screenshots[slideIndex];
        // console.log(imgSrc);
        const popupImg = popup.querySelector(".pp-img");
        /* Active Loader Until The Popup Loaded */
        popup.querySelector(".pp-loader").classList.add("active");
        popupImg.src = imgSrc;
        popupImg.onload = () =>
        {
            /* Deactive Loader After The Popupimg Loaded */
            popup.querySelector(".pp-loader").classList.remove("active");
        }
        popup.querySelector(".pp-counter").innerHTML = (slideIndex + 1) + " of " + screenshots.length;
    }



    /* Next Slide */
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
        // console.log("slideIndex:" + slideIndex);
    })

    

    /* Previous Slide */
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
        // console.log("slideIndex:" + slideIndex);
    })



    function popupDetails()
    {
        /* If Portfolio Item Details Not Exist */
        if(!portfolioItems[itemIndex].querySelector(".portfolio-item-details"))
        {
            projectDetailsBtn.style.display="none";
            return; /* End Function Execution */
        }
        else
        {
            projectDetailsBtn.style.display="block";
        }
        /* Get The Project Details */
        const details = portfolioItems[itemIndex].querySelector(".portfolio-item-details").innerHTML;
        /* Set The Project Details */
        popup.querySelector(".pp-project-details").innerHTML = details;
        /* Get The Project Title */
        const title = portfolioItems[itemIndex].querySelector(".portfolio-item-title").innerHTML;
        // console.log(title);
        /* Set The Project Title */
        popup.querySelector(".pp-title h2").innerHTML = title;
        /* Get The Project Category */
        const category = portfolioItems[itemIndex].getAttribute("data-category");
        // console.log(category);
        /* Set The Project Category */
        popup.querySelector(".pp-project-category").innerHTML = category.split("-").join(" ");
    }



    /* Project Details Button Button */
    projectDetailsBtn.addEventListener("click", () =>
    {
        popupDetailsToggle();
    })



    function popupDetailsToggle()
    {
        // console.log("Hi");
        if(projectDetailsContainer.classList.contains("active"))
        {
            // console.log("True");
            projectDetailsBtn.querySelector("i").classList.remove("fa-minus");
            projectDetailsBtn.querySelector("i").classList.add("fa-plus");
            projectDetailsContainer.classList.remove("active");
            projectDetailsContainer.style.maxHeight = 0 + "px";
        }
        else
        {
            // console.log("False");
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
    // console.log(slides);
    slideWidth = sliderContainer.offsetWidth,
    // console.log(slideWidth);
    prevBtn = document.querySelector(".testi-slider-nav .prev"),
    nextBtn = document.querySelector(".testi-slider-nav .next"),
    activeSlide = sliderContainer.querySelector(".testi-item.active");
    let slideIndex = Array.from(activeSlide.parentElement.children).indexOf(activeSlide);
    // console.log(slideIndex);

    /* Set Width Of All Slides */
    slides.forEach((slide) =>
    {
        // console.log(slide);
        slide.style.width = slideWidth + "px";
    })
    /* Set Width Of SliderContainer */
    sliderContainer.style.width = slideWidth * slides.length + "px";

    /* Next Slide */
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
        //console.log(slideIndex);
        slider();
    })

    /* Previous Slide */
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
        //console.log(slideIndex);
        slider();
    })

    /* Move the slide */
    function slider()
    {
        /* Deactive Existing Active Slide */
        sliderContainer.querySelector(".testi-item.active").classList.remove("active");
        /* Active New Slide */
        slides[slideIndex].classList.add("active");
        sliderContainer.style.marginLeft = - (slideWidth * slideIndex) + "px";
    }
    slider();

})();


// (()=>
// {
//     /* Hide All Section Except Active */
//     const sections = document.querySelectorAll(".section");
//     //console.log(sections);
//     sections.forEach((section)=>
//     {
//         if(!section.classList.contains("active"))
//         {
//             section.classList.add("hide");
//         }
//     })

// })();


window.addEventListener("load", () =>
{
    // PReloader
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(() => 
    {
        document.querySelector(".preloader").style.display="none";
    },600)
})
