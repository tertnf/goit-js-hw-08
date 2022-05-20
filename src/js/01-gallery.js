import SimpleLightbox from 'simplelightbox';
// Add imports above this line
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryMarkup = createGallaryMarkup(galleryItems);
const galleryRef = document.querySelector('ul.gallery');

function createGallaryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}
galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);
galleryRef.addEventListener('click', createGallaryMarkup);

let image = '';

var gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
gallery.on('show.simplelightbox', function (event) {
  image = `<div class = "modal"><img src=${event.target.dataset.source}></div>`;
});
