/*************************************************************
 * This is the script for the homepage of Uvid
 * 
 * @name (Anyanwu_Benedict_Chukwuemeka)
 * @version (v0.01)
 *************************************************************/



// This is for Preloader

    let preload = document.querySelector('#preloader');

    //This function makes the preloader to be removed after the skeleton of the website has been loaded
    window.addEventListener("load", () => {
        preload.style.display = "none";
        document.body.classList.add('bodystart');
    });



    const AllImg = document.querySelectorAll('img');
    // Prevents the user from downloading the pictures
    AllImg.forEach(eachImg => {
        eachImg.draggable = false;
    });


    // For All links
    const allLinks = document.querySelectorAll("a");
    allLinks.forEach(link => {
        // Sets rel to "no-referrer" if it hasn't been set.
        if(link.rel.valueOf() == "")
        {
            link.rel = "no-referrer";
        }
    });



    // A notification popup
    let notifyTimer;

    function notification(noteCtnt) {
        const btnNotifyBdr = document.createElement('div');
        const btnNotify = document.createElement('div');
        btnNotifyBdr.classList.add("notifyBdr")
        btnNotify.classList.add("NotifyMe");
        btnNotifyBdr.appendChild(btnNotify);
        btnNotify.textContent = noteCtnt;

       if (!btnNotifyBdr.classList.contains("NotifyAtv"))
       {
           document.body.appendChild(btnNotifyBdr);
           btnNotifyBdr.classList.add('NotifyAtv');
       }
       notifyTimer =  setTimeout(
           function()
           {
               btnNotifyBdr.classList.remove('NotifyAtv');
               document.body.removeChild(btnNotifyBdr);
           }
       , 2500);
   }








   


        // // This will open the different boxes for the seasons
        //      const popupBox = document.querySelectorAll('.shwset');
        //     const opendspwall = document.querySelectorAll('.season-select');
            
        //     const closedspwall = document.querySelectorAll('.oop');

        //         //opening the popup
        //         var popup = function(popupClick){
        //             popupBox[popupClick].classList.add('shwset-atv');
        //         }

        //         opendspwall.forEach((opendspwalls, i) => {
        //             opendspwalls.addEventListener("click" , () => {
        //                 popup(i);
        //                 // huy.classList.add('mini-nav-atv');
        //             });
        //         });

        //         //this will close the popup
        //         closedspwall.forEach((closedspwalls, i) => {
        //             closedspwalls.addEventListener("click" , () => {
        //                 popupBox.forEach((popupBoxes) => {
        //                     popupBoxes.classList.remove('shwset-atv');
        //                     // huy.classList.remove('mini-nav-atv');
        //                 });
        //             });
        //         });