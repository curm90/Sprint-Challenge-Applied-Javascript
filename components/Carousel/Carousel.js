function carouselComponent() {
  // Create all elements needed for carousel component
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const rightButton = document.createElement('div');

  // Store image sources in an array
  const imageSources = [
    './assets/carousel/computer.jpeg',
    './assets/carousel/mountains.jpeg',
    './assets/carousel/trees.jpeg',
    './assets/carousel/turntable.jpeg'
  ];

  // Loop over the sources array and create an image element
  // For each source, and set the source attribute
  // Append to carousel
  const imageArr = imageSources.map(source => {
    const image = document.createElement('img');
    image.src = source;
    
    carousel.appendChild(image);

    return image;
  })
  
  // Add classes to elements
  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  // Add text content to buttons
  leftButton.textContent = '<';
  rightButton.textContent = '>';

  // Append elements to the DOM
  document.querySelector('.carousel-container').appendChild(carousel);
  carousel.appendChild(leftButton);
  carousel.appendChild(rightButton);

  // Define a current index and show the first image on page
  let index = 0;
  imageArr[index].style.display = 'flex';
  index++;

  // Add event listener to buttons
  rightButton.addEventListener('click', moveImgRight);
  leftButton.addEventListener('click', moveImgLeft);

  // Add button functionality
  function moveImgRight() {
    let absoluteIndex = Math.abs(index);
    index++;

    imageArr.forEach(img => img.style.display = "none");
    imageArr[absoluteIndex % 4].style.display = "flex";
  }

  function moveImgLeft() {
    let absoluteIndex = Math.abs(index);
    index--;
    imageArr.forEach(img => img.style.display = "none");
    imageArr[absoluteIndex % 4].style.display = "flex";
  }

  // Return component
  return carousel;
}

carouselComponent();

