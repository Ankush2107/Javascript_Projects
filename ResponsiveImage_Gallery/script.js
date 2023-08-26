const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.querySelector('.modal');

galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    showImage(index);
  });
});

function showImage(index) {
  modal.innerHTML = `
    <div class="modal-content">
        <span class="close-button">&times;</span>
        <img src="image${index + 1}.jpg" alt="Image ${index + 1}">
    </div>
  `;
  modal.style.display = 'block';

  const closeButton = modal.querySelector('.close-button');
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}
