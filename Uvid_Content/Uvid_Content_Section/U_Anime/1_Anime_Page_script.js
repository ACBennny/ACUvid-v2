
/***************************************************************
 * This will hold the code for the respective (Anime) shows
 * 
 * @name (Anyanwu_Benedict_Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/

    // Back to home
    let backtohome = document.querySelector('.homepage');
    backtohome.addEventListener("click" , () => {
        backToHome("../Uvid_Anime_catalog.html");
    });
    // Open search frame
    const srchinitiaize = document.querySelector('.search-pull');
    srchinitiaize.addEventListener("click" , () => {
        opnclssearch("../../Uvid_Search/Uvid_Search_Catalog.html");
    });


    // FOR VIDEO PLAYER


         // This will open the different SEASONS for the show

         const seasonBox = document.querySelector('.show-home-bx');
         const season = document.querySelectorAll('.show-sub');
         const seasonAtv = document.querySelectorAll('.season-select');


                //opening/closing the episode
                var popSeason = function(popupClick){
                    season[popupClick].classList.toggle('showsub-atv');
                    seasonAtv[popupClick].classList.toggle('mini-nav-atv');
                }

                seasonAtv.forEach((opnSeasons, i) => {
                    opnSeasons.addEventListener("click" , () => {
                        // seasonBox.classList.add('.show-home-bx-atv');
                        season.forEach((seasons) => {
                            seasons.classList.remove('showsub-atv');
                        });
                        seasonAtv.forEach((offNavSeason) => {
                            offNavSeason.classList.remove('mini-nav-atv');
                        });
                        popSeason(i);
                    });
                });








