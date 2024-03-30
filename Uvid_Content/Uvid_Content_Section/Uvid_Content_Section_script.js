
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
        backToHome("../Uvid_Anime.html");
    });
    // Open search frame
    const srchinitiaize = document.querySelector('.search-pull');
    srchinitiaize.addEventListener("click" , () => {
        opnclssearch("../Uvid_Search/Uvid_Search_Catalog.html");
    });


// Side Buttons

/**
 * 1. This will make the next sets of buttons active while the previous inactive
 */
        const contentSub = document.querySelector(".contentmain");
        const pageBtnsBox = document.querySelectorAll('.ctnt-slide-box');
        const pageBtns = document.querySelectorAll('.ctnt-slide-box .page_btn');
         let slide_i = 0;

        //  This show next sets of btns
         function nextBtnSet(){
            pageBtnsBox[slide_i].querySelectorAll('.ctnt-slide-btn').forEach(thisChild => thisChild.classList.remove("active"));
            pageBtnsBox[slide_i].classList.remove('nowatv');
            slide_i = (slide_i + 1) % pageBtnsBox.length;
            pageBtnsBox[slide_i].classList.add('nowatv');
            pageBtnsBox[slide_i].querySelectorAll('.ctnt-slide-btn:nth-child(2)').forEach(thisChild => thisChild.classList.add("active"));
            location.href="#top";
         }

        ///  This prev next sets of btns
         function prevBtnSet(){
            pageBtnsBox[slide_i].querySelectorAll('.ctnt-slide-btn').forEach(thisChild => thisChild.classList.remove("active"));
            pageBtnsBox[slide_i].classList.remove('nowatv');
            slide_i = (slide_i - 1 + pageBtnsBox.length) % pageBtnsBox.length;
            pageBtnsBox[slide_i].classList.add('nowatv');
            pageBtnsBox[slide_i].querySelectorAll('.ctnt-slide-btn:nth-child(5)').forEach(thisChild => thisChild.classList.add("active"));
            location.href="#top";
         }


         // opens each page(slide)
         pageBtns.forEach(btn => {
            btn.addEventListener("click" , () => {
                pageBtns.forEach(activePageBtn => {
                    activePageBtn.classList.remove("active");
                });
                btn.classList.add("active");
                location.href="#top";
            });
         });

   

// Card details (title, alt etc)

    const showCtnt = document.querySelector('.contentmain');
    const ctntLinks = showCtnt.querySelectorAll('.contentsub a');
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
             showCard.title = "Show Name \n" + showCardInfoName.textContent;
            showCard.draggable = false;
            showCard.style.userSelect = "none";
        });
        showCardImgs.forEach(showCardImg => {
            showCardImg.draggable = false;
            showCardImg.style.userSelect = "none";
            showCardImg.alt = "image";
        });


    























