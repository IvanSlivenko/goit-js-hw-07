import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const currentGallery = document.querySelector('.gallery');

//створимо розмітку
function createGallery(masiv) {
  return masiv.map((elem) => {
    return `

  <a class="gallery__item" href="${elem.original}">
    <img
      class="gallery__image"
      src="${elem.preview}"
      alt="${elem.description}"
    />
  </a>

`;
  
})
  
  .join('');

}

const listGallery = createGallery(galleryItems);
currentGallery.insertAdjacentHTML("beforeend", listGallery);


currentGallery.addEventListener('click',smallEmageClick)

function smallEmageClick(e) {
 
  e.preventDefault();
  if (e.target.nodeName !== "IMG") { 
    return
  }
  
    const bigImage = e.target.dataset.source;
    const smallImage = e.target.src;
   
    var lightbox = new SimpleLightbox('.gallery a', {
        scrollZoom: false,
        animationSpeed: 250,
        captionPosition: 'bottom',
        captionsData: "alt",
        captionDelay: 250
        
        
        
    });
    
 
 
  
}
