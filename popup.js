// script.js
const popupImage = document.getElementById('popup1');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');

if(popup) {
    popup.style.display = 'none';
}

popupImage.addEventListener('click', function() {
    popup.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});