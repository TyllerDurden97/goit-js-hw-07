
import { galleryItems } from './gallery-items.js';

const galeryBox = document.querySelector('.gallery');

function makeGalery (obj) {   
   const galeryMarcup = obj.map(({ description, original, preview }) => {
      return `
      <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description} ";
    />
  </a>
</div>
      `;
   }).join('');
galeryBox.insertAdjacentHTML('beforeend', galeryMarcup);
}

makeGalery(galleryItems);

galeryBox.addEventListener('click', handleGaleryClick);

function handleGaleryClick (event) {
   event.preventDefault();

   if (event.target.nodeName !== 'IMG') {
      return;
   }
   const imgSourse = event.target.dataset.source;
   
   showModalImage(imgSourse);
}

function showModalImage(imgSourse) {
   const instance = basicLightbox.create(`
   <img src="${imgSourse}" width="800" height="600">
`);
   instance.show();
   galeryBox.addEventListener('keydown', handleKeypadEscClose);

   function handleKeypadEscClose(event) {

      if (event.code === 'Escape') {
         instance.close();
         galeryBox.removeEventListener('keydown', handleKeypadEscClose);
      };
   }
}






