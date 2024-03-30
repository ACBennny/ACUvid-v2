 
/***************************************************************
 * This will hold the code for the different sections of the website 
    The sections include:
    - Anime
    - TV
    - Documentaries
    - Movies
    - Latest
    - Upcoming
    - News
    - Cartoon
 * 
 * @name (Anyanwu_Benedict_Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/





    // Back to home
    let backtohome = document.querySelector('.homepage');
    backtohome.addEventListener("click" , () => {
        backToHome("../Uvid.html");
    });
    // Open search frame
    const srchinitiaize = document.querySelector('.search-pull');
    srchinitiaize.addEventListener("click" , () => {
        opnclssearch("Uvid_Search/Uvid_Search_Catalog.html");
    });





// This is for Preloader
    let wlcmBdr = document.querySelector('.welcome-bdr');
    let wlcmTab = document.querySelector('.welcome-here');

    window.addEventListener("load", () => {
        // opens the welcome page
        wlcmBdr.classList.add('welcome-bdr-start');
        wlcmTab.classList.add('welcome-here-start');
        document.body.classList.add('bodystop');
    });



    // closes the welcome page
    let wlcEnd = document.querySelector('.welcome-here button');
    wlcEnd.onclick = () => {
        wlcmBdr.classList.remove('welcome-bdr-start');
        wlcmTab.classList.remove('welcome-here-start');
        document.body.classList.remove('bodystop');
        
        // Starts auto-slider
        introAutoSlide();

        // Function to operate the basic Slider is called
        basicSlider();
    }




// Intro Slider

/**
 * 1. Makes each slide active
 */

        const bcgOver_700 = document.querySelector('.bcg_over700');
        const bcgLess_700 = document.querySelector('.bcg_less700');
        const slideCover = document.querySelector('.intro_slide_cover');
        const slideBoxMainBdr = document.querySelector('.intro_slide_ctnt_bdr');
        const slideBdr = document.querySelectorAll('.intro_info_bdr');
        const infoslideBox = document.querySelectorAll(".intro_info_box");
        const pageBtnsBox = document.querySelector('.intro_slide_nav_box');
        const intro_Slide_radioBtn = document.querySelectorAll('.intro_rad');
        const intro_LeftSlide_btn = document.querySelector('.intro_slide_ctnt_box .left_slide_arrow .fa-chevron-left');
        const intro_RightSlide_btn = document.querySelector('.intro_slide_ctnt_box .right_slide_arrow .fa-chevron-right');
         let auto_slide_count = 0;
         let auto_slide_timer;
         let auto_slide_timer_count = 15;

         // For Btransition (blur) effect
         function flshBur(){
            slideCover.classList.add("active");
            setTimeout(() => slideCover.classList.remove("active"), 800);
        }

        //  This moves to the next slide
         function nextSlideSet(){
            auto_slide_count = (auto_slide_count + 1) % intro_Slide_radioBtn.length;
            setTimeout(() => intro_Slide_radioBtn[auto_slide_count].checked = true, 400);
            flshBur();
         }

        //  This moves to the previous slide
         function prevSlideSet(){
            auto_slide_count = (auto_slide_count - 1 + intro_Slide_radioBtn.length) % intro_Slide_radioBtn.length;
            setTimeout(() => intro_Slide_radioBtn[auto_slide_count].checked = true, 400);
            flshBur();
         }

         // Calls the functions
         intro_LeftSlide_btn.addEventListener("click" , () => {
            prevSlideSet();
            auto_slide_timer_count = 15;
         });
         intro_RightSlide_btn.addEventListener("click" , () => {
            nextSlideSet();
            auto_slide_timer_count = 15;
         });
         intro_Slide_radioBtn.forEach(radBtn => {
            radBtn.addEventListener("click" , () => {
                auto_slide_timer_count = 15;
            });
         });



         // Pauses/ plays auto slider

         // Automatic Slider
         function introAutoSlide(){
            let sec = auto_slide_timer_count;
            auto_slide_timer = setInterval(function()
            {
                sec-- ;
                if(sec == 0)
                {
                    clearInterval(auto_slide_timer);
                    nextSlideSet();
                    auto_slide_timer_count = 15;
                    introAutoSlide();
                }
            }, 1000);
         }



         // Slide buttons for Basic Slider
            const basic_slider_LeftArrBox = [...document.querySelectorAll('.basic_slider_box .left_slide_arrow')];
            const basic_slider_RightArrBox = [...document.querySelectorAll('.basic_slider_box .right_slide_arrow')];
            const basic_slider_LeftArr = [...document.querySelectorAll('.basic_slider_box .left_slide_arrow .fa-chevron-left')];
            const basic_slider_RightArr = [...document.querySelectorAll('.basic_slider_box .right_slide_arrow .fa-chevron-right')];
            const basic_slider_CardBox = [...document.querySelectorAll('.basic_slider_card_box')];

            // The slider for different shows
            function basicSlider()
            {
                basic_slider_CardBox.forEach((item, i) => {
                    let boxDimension = item.getBoundingClientRect();
                    let boxWidth = boxDimension.width;
    
                    // Slides Right
                    basic_slider_RightArr[i].addEventListener("click" , () => {
                        item.scrollLeft += boxWidth;
                    });
    
                    // Slides Left
                    basic_slider_LeftArr[i].addEventListener("click" , () => {
                        item.scrollLeft -= boxWidth;
                    });
    
                    // Hides button  when boundary is reached
                    item.addEventListener("scroll" , () => {
                        let scrollStart = 0;
                        let scrollEnd = item.scrollWidth;
                        let scrollOffWidth = Math.ceil(item.offsetWidth);
                        let currScrollLeft = Math.ceil(item.scrollLeft);
                        let currScroll = Math.ceil((scrollOffWidth + currScrollLeft));
    
                        // Hides Right button
                        if(!((currScroll) >= scrollEnd))
                        {
                            basic_slider_RightArrBox[i].classList.remove("hide");
                        }
                        else
                        {
                            basic_slider_RightArrBox[i].classList.add("hide");
                        }
    
                        // Hides Left button
                        if(!(currScrollLeft <= scrollStart))
                        {
                            basic_slider_LeftArrBox[i].classList.remove("hide");
                        }
                        else
                        {
                            basic_slider_LeftArrBox[i].classList.add("hide");
                        }
                    });
    
                });
            }

            // Calls the function again if window changes size
            // Used for Responsivenes and adaptation for device orientation
            window.addEventListener("resize" , () => {
                basicSlider();   
            });

            window.addEventListener("change" , () => {
                basicSlider();   
            });


   

// Card details (title, alt etc)

    const showCtnt = document.querySelector('.body_sub_sub');
    const ctntLinks = showCtnt.querySelectorAll('a');
    const showCards = document.querySelectorAll('.cardholder');
    const showCardImgBox = document.querySelectorAll('.cardimg');
    const showCardImgs = document.querySelectorAll('.cardimg img');

        showCtnt.style.userSelect = "none";
         ctntLinks.forEach(ctntLink => {
             ctntLink.draggable = false;
             ctntLink.style.userSelect = "none";
             ctntLink.href = "/Uvid_Content/Uvid_Content_Section/U_Anime/Another.html";
         });
         showCards.forEach(showCard => {
            const showCardInfoName = showCard.querySelector('.cardinfo h3');
            showCard.title = "Watch " + showCardInfoName.textContent;
             showCard.draggable = false;
             showCard.style.userSelect = "none";
         });
         showCardImgs.forEach(showCardImg => {
             showCardImg.draggable = false;
             showCardImg.style.userSelect = "none";
             showCardImg.alt = "image";
         });

    























