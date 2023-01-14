import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const currentGallery = document.querySelector('.gallery');

//створимо розмітку
function createGallery(masiv) {
  return masiv.map((elem) => {
    return `
<div class="gallery__item">
  <a class="gallery__link" href="${elem.original}">
    <img
      class="gallery__image"
      src="${elem.preview}"
      data-source="${elem.original}"
      alt="${elem.description}"
    />
  </a>
</div>
`;
  
})
  
  .join('');

}

const listGallery = createGallery(galleryItems);
currentGallery.insertAdjacentHTML("beforeend", listGallery);

