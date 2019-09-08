function Header() {
  // Create all needed header elements
  const header = document.createElement('div');
  const date = document.createElement('span');
  const title = document.createElement('h1');
  const temperature = document.createElement('span');

  // Add classes to necessary elements
  header.classList.add('header');
  date.classList.add('date');
  temperature.classList.add('temp');

  // Add text content
  date.textContent = 'MARCH 28, 2019';
  title.textContent = 'Lambda Times';
  temperature.textContent = '98°';

  // Append all elements to the DOM
  document.querySelector('.header-container').appendChild(header);
  header.appendChild(date);
  header.appendChild(title);
  header.appendChild(temperature);

  // Return component
  return header;
}

// Call header function
Header();
