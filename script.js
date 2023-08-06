// Get all the images
const images = document.querySelectorAll('img');

// Create a lightbox container element
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');

// Create a close button
const closeButton = document.createElement('span');
closeButton.classList.add('lightbox-close');
closeButton.innerHTML = '&times;';

// Append the close button to the lightbox container
lightbox.appendChild(closeButton);

// Attach click event listeners to each image
images.forEach((image) => {
  image.addEventListener('click', (event) => {
    // Create a new image element within the lightbox container
    const lightboxImage = document.createElement('img');
    lightboxImage.src = image.src;

    // Append the image to the lightbox container
    lightbox.appendChild(lightboxImage);

    // Display the lightbox
    lightbox.classList.add('lightbox-show');

    // Add event listener to close the lightbox when the close button is clicked
    closeButton.addEventListener('click', () => {
      lightbox.classList.remove('lightbox-show');
      lightbox.removeChild(lightboxImage);
    });
    
    // Add event listener to close the lightbox when clicking outside the photo
    window.addEventListener('click', (event) => {
      if (event.target === lightbox) {
        lightbox.classList.remove('lightbox-show');
        lightbox.removeChild(lightboxImage);
      }
    });
    
    // Prevent click events from propagating to the window and triggering the event listener above
    event.stopPropagation();
  });
});

// Append the lightbox container to the body element
document.body.appendChild(lightbox);
