"use strict";


baguetteBox.run('.gallery', {
    buttons: true,
    animation: 'slideIn'
});



///    Search Box Functionality    ///

//Set up Variables
const searchBox = document.querySelector(".search__search-box");
const gallery = document.querySelector(".gallery");
let photos = gallery.getElementsByClassName("gallery-img");
let searchTerm = '';
let currentPhotoText;

//Function performs a linear search on the gallery of images
//Hides the images that do not contain the search term in their caption
function searchGallery(searchTerm) {

    for (let i = 0; i < photos.length; i++) {
        //get current photo's caption
        currentPhotoText = photos[i].dataset.caption.toLowerCase();

        //check to see if the text contains the searchTerm: hide if not, else let it display on the page/reset
        if (!currentPhotoText.includes(searchTerm)) {
            photos[i].style.display = "none";
        } else {
            photos[i].style.display = "";
        }
    }
}

//Event Listener: a key is pressed then released inside the search box
searchBox.addEventListener('keyup', function() {
    searchGallery(searchBox.value.toLowerCase());
});