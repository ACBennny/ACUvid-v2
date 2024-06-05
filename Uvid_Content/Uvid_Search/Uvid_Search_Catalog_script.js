
/***************************************************************
 * This will hold the code for the Search Engine
 * 
 * @name (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/

    //  for the search bar floating

    // window.addEventListener('scroll' , () => {
    //     let srchbar = document.querySelector('.srch-box');
    //     srchbar.classList.toggle("bar-float", window.scrollY > 0)
    // });



    // Search inventory
    const searchInventory =
    [
        {
            id: 0,
            search_link: '../Uvid_Content_Section/U_Anime/Another.html',
            search_image: '../Uvid_Content_Section/U_Anime/U_Anime_img/1.jpg',
            search_title: 'Jujutsu Kaisen',
            search_section: 'Anime',
            search_code: 'Jujutsu Kaisen sorcery fight anime shows animation',
        },
        {
            id: 1,
            search_link: '../Uvid_Content_Section/U_Anime/Another.html',
            search_image: '../Uvid_Content_Section/U_Anime/U_Anime_img/2.jpg',
            search_title: 'Demon Slayer',
            search_section: 'Anime',
            search_code: 'Demon Slayer Kimetsu No Yaiba anime shows animation',
        },
        {
            id: 2,
            search_link: '../Uvid_Content_Section/U_Anime/Another.html',
            search_image: '../Uvid_Content_Section/U_Anime/U_Anime_img/3.jpg',
            search_title: 'Attack On Titan',
            search_section: 'Anime',
            search_code: 'Shingeki no Kyojin Attack On Titan anime animation',
        },
        {
            id: 3,
            search_link: '../Uvid_Content_Section/U_Anime/Another.html',
            search_image: '../Uvid_Content_Section/U_Anime/U_Anime_img/3.jpg',
            search_title: 'Attack On Titan',
            search_section: 'Anime',
            search_code: 'Shingeki no Kyojin Attack On Titan anime animation',
        },
        {
            id: 4,
            search_link: '../Uvid_Content_Section/U_Anime/Another.html',
            search_image: '../Uvid_Content_Section/U_Anime/U_Anime_img/3.jpg',
            search_title: 'Attack On Titan',
            search_section: 'Anime',
            search_code: 'Shingeki no Kyojin Attack On Titan anime animation',
        },
        {
            id: 5,
            search_link: '../Uvid_Content_Section/U_Anime/Another.html',
            search_image: '../Uvid_Content_Section/U_Anime/U_Anime_img/3.jpg',
            search_title: 'Attack On Titan',
            search_section: 'Anime',
            search_code: 'Shingeki no Kyojin Attack On Titan anime animation',
        },
    ];

    // Gets items in catalog and stores in array
    const categories = [...new Set(searchInventory.map((item) => { return item }))];

    // Filtering the search
    const searchwall = document.querySelector("#catalogId");
    const catalogChilds = searchwall.children;
    const searchcatalog = searchwall.querySelector(".srch_card_box");
        const searchbox = document.querySelector('#searchId');
        searchbox.addEventListener('keyup', (e) => {
            const searchData = e.target.value.toLowerCase();
            const filteredData = categories.filter((item) => {
                return (
                    item.search_code.toLowerCase().includes(searchData)
                )
            })
            displayItem(filteredData)
        });

        // Displaying the result
        const displayItem = (items) => {
            searchwall.innerHTML = items.map((item) => {
                var { search_link, search_image, search_title, search_section, search_code } = item;
                if(searchbox.value.length > 0)
                {
                    searchwall.classList.remove("open-ctg");
                    return (
                        `<div class="srch_card_box" onmouseover="oof()">
                            <a href="${search_link}" target="_blank" onmouseover="oof()">
                                <div class="srch-card">
                                    <div class="srch-card-img">
                                        <img src="${search_image}" alt="">
                                        <img src="../../Uvid_img/Uvidico.png" class="img_shadow">
                                    </div>
                                    <div class="srch-card-det">
                                        <h3>${search_title}</h3>
                                        <h6>${search_section}</h6>
                                        <p style=" display: none;">${search_code}</p>
                                    </div>
                                </div>
                            </a> 
                        <div>`
                    )
                }
                else
                {
                    searchwall.classList.remove("open-ctg");
                    return (``);
                }
                
            }).join('')
        };
        displayItem(categories);


       

       function oof()
       {
         // Prevents dragging of Elements

         const searchCatalogBdr = document.querySelector('.srch-catalog');
         const searchCardLink = document.querySelectorAll('.srch_card_box');
         const searchCard = document.querySelectorAll('.srch-card');
         const searchCardImgBox = document.querySelectorAll('.srch-card-img');
         const searchCardImg = document.querySelectorAll('.srch-card-img img');
 
         
             searchCatalogBdr.style.userSelect = "none";
             searchCardLink.forEach(searchLink => {
                 searchLink.draggable = false;
                 searchLink.style.userSelect = "none";
             });
             searchCard.forEach(searchCard => {
                 searchCard.draggable = false;
                 searchCard.style.userSelect = "none";
             });
             searchCardImg.forEach(searchImg => {
                 searchImg.draggable = false;
                 searchImg.style.userSelect = "none";
                 searchImg.alt = "image from search";
             });

             // For Preventing direct access to img
        searchCardImgBox.forEach(imgBox => {
            const thisCardImg = imgBox.querySelectorAll('img');
            const dftImg = imgBox.querySelectorAll('.img_shadow');

            // Switches img to default when mouse pointer is over
            imgBox.addEventListener("pointerenter" , () => {
                thisCardImg.forEach(img => {
                    img.style.display = "none";
                });
                dftImg.forEach(img => {
                    img.style.display = "flex";
                });
            });
            // replaces when mouse pointer is out 
            imgBox.addEventListener("pointerleave" , () => {
                thisCardImg.forEach(img => {
                    img.style.display = "";
                });
                dftImg.forEach(img => {
                    img.style.display = "none";
                });
                // img.removeAttribute("src");
            });
        });

                /// hide link display
                searchCardLink.forEach(box => {
                    const searchLinks = box.querySelectorAll('a');
                    searchLinks.forEach(searchLink => {
                        //a variable to hold the original link
                        let currentLink = searchLink.href;
                        // console.log("cur link = " + searchLink.href + "\n");
                        // console.log("attach cur link = " + currentLink + "\n");
            
                        // this will remove the link when poitner is over the element
                        searchLink.addEventListener("mouseover" , () => {
                        //     searchLink.href = "";
                        //     searchLink.removeAttribute("href");
                            
                            document.oncontextmenu = document.body.oncontextmenu = function() {return false;}
                        });
    
                        //  Opens the individual link in a new tab
                        searchLink.addEventListener("click" , () => {
                            // searchLink.href = currentLink;
                            
                            document.oncontextmenu = document.body.oncontextmenu = function() {return true;}    
                        });

                        // Checks for right click event and lets user know it's not allowed
                        searchLink.addEventListener("mousedown" , function(event) {
                            if (event.which == 3) {
                                notification("Not Allowed");
                            }
                        });
    
                        
                        // This will add the link when pointer is out of the element
                        searchLink.addEventListener("mouseleave" , () => {
                            searchLink.href = currentLink;
                        });
                    });
                });
                
       }
