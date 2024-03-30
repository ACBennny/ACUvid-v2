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





    //  This alert the user to the slogan if user clicks on the company name
    
    let uvidgoal = document.querySelector('.logo');
    uvidgoal.onclick = () => {
        alert('Every genre you can think of.. we got it');
    }

    //for the second company name
    let uvidgoal1 = document.querySelector('.logo1');
    uvidgoal1.onclick = () => {
        alert('Every genre you can think of.. we got it');
    }

        // This will return back to the homepage of Uvids
        
        function backToHome(homeLink) {
            window.open(URL=homeLink, target="_top");
        }







        //  Script for Search shows


        /********
         * This will
        * 1. It will open the search tab
        * 2. It will create an iframe
        *3. It will link the file containing the searchcontent
        ******/


                // srchinitiaize.onclick = 
                    
                    let navvbarr = document.querySelector('.navbar');
                    const srchbox = document.querySelector('.searchcontainer');
                    const searchframe = document.querySelector('.searchsub1');
                function opnclssearch(searchLoc) {

                    document.body.classList.add('bodystop');
                    srchbox.classList.add('srchatv');
                    searchframe.classList.add('frameatv');
                    srchpage = document.createElement('iframe');
                    srchpage.src = searchLoc;
                    srchpage.classList.add('pageatv');
                    searchframe.appendChild(srchpage);
                    document.body.classList.add('bodystop');
                    if(actionFrameBdr.classList.contains('bdr-atv'))
                    {
                        navvbarr.classList.remove('darkenNavBar');
                        actionFrame.classList.add('fa-bars-staggered');
                        actionFrame.classList.remove('fa-xmark');
                        actionFrameBdr.classList.remove('bdr-atv');
                        actionFrameBdr.removeChild(actionPage);
                        document.body.classList.remove('bodystop');
                    }
                }


        /**
         * this will perform the opposite of the above
         */
        const searchxmark = document.querySelector('.closesearchctn');
        const searchxblank = document.querySelector('.searchsub2');

        searchxmark.onclick = function closesearch() {
            srchbox.classList.remove('srchatv');
            searchframe.classList.remove('frameatv');
            searchframe.removeChild(srchpage);
            document.body.classList.remove('bodystop');
        }

        searchxblank.onclick = function closesearch() {
            srchbox.classList.remove('srchatv');
            searchframe.classList.remove('frameatv');
            searchframe.removeChild(srchpage);
            document.body.classList.remove('bodystop');
        }




        // This opens the dropdown menu when the "info" or "bars" icon is clicked

        const actionFrame = document.querySelector('#actn_Frame_btn');
        const actionFrameBdr = document.querySelector('.Action-Frame-bdr');
        const actionFrameClose = document.querySelector('.Action-Frame-bcg');

        // when user clicks "bars" icon
        actionFrame.onclick = () => {
            if(actionFrameBdr.classList.contains('bdr-atv'))
            {
                navvbarr.classList.remove('darkenNavBar');
                actionFrame.classList.add('fa-bars-staggered');
                actionFrame.classList.remove('fa-xmark');
                actionFrameBdr.classList.remove('bdr-atv');
                actionPage.src = "";
                actionPage.classList.remove('action-pg-atv');
                actionFrameBdr.removeChild(actionPage);
                document.body.classList.remove('bodystop');
            }
            else
            {
                if(srchbox.classList.contains('srchatv') || searchframe.classList.contains('frameatv'))
                {
                    srchbox.classList.remove('srchatv');
                    searchframe.classList.remove('frameatv');
                    searchframe.removeChild(srchpage);
                }
                navvbarr.classList.add('darkenNavBar');
                actionFrame.classList.remove('fa-bars-staggered');
                actionFrame.classList.add('fa-xmark');
                actionFrameBdr.classList.add('bdr-atv');
                actionPage = document.createElement('iframe');
                actionPage.src = "../../Uvid_Actions.html";
                actionPage.classList.add('action-pg-atv');
                actionFrameBdr.appendChild(actionPage);
                document.body.classList.add('bodystop');
            }
        }

        actionFrameClose.onclick = () => {
            navvbarr.classList.remove('darkenNavBar');
            actionFrame.classList.add('fa-bars-staggered');
            actionFrame.classList.remove('fa-xmark');
            actionFrameBdr.classList.remove('bdr-atv');
            actionPage.src = "";
            actionPage.classList.remove('action-pg-atv');
            actionFrameBdr.removeChild(actionPage);
            tdocument.body.classList.remove('bodystop');
        }

            // THis will open the the navbar menu (max-width: 884px)
            const openmen = document.querySelector('.baron');
            const menuicons = document.querySelector('.icnsets');

            openmen.onclick = () => {
                menuicons.classList.toggle('menicnatv');
                srchbox.classList.remove('srchatv');
                searchframe.classList.remove('frameatv');
                if(actionFrameBdr.classList.contains('bdr-atv'))
                {
                    navvbarr.classList.remove('darkenNavBar');
                    actionFrame.classList.add('fa-bars-staggered');
                    actionFrame.classList.remove('fa-xmark');
                    actionFrameBdr.classList.remove('bdr-atv');
                    actionPage.src = "";
                    actionPage.classList.remove('action-pg-atv');
                    actionFrameBdr.removeChild(actionPage);
                    document.body.classList.remove('bodystop');
                }
            }

