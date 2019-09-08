// Create a card component maker function
function cardComponent(articleData) {
  // Create all elements needed
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const authorContainer = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const author = document.createElement('span');

  // Add classes to elements
  card.classList.add('card');
  headline.classList.add('headline');
  authorContainer.classList.add('author');
  imgContainer.classList.add('img-container');

  // Add content to elements
  headline.textContent = articleData.headline;
  img.src = articleData.authorPhoto;
  author.textContent = `By: ${articleData.authorName}`;

  // Append all elements to the DOM
  document.querySelector('.cards-container').appendChild(card);
  card.appendChild(headline);
  card.appendChild(authorContainer);
  authorContainer.appendChild(imgContainer);
  imgContainer.appendChild(img);
  authorContainer.appendChild(author);

  // Return component
  return card;
}

// Make API call to display all card components to the DOM
axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(res => {
    // Get access to articles object
    const articlesObj = res.data.articles;
    // Get access to articles arrays
    const articlesArr = Object.values(articlesObj);

    // Loop over each array and pass each key from 
    // Each object through the card component function
    articlesArr.forEach(article => {
      for (let i = 0; i < article.length; i++) {
        cardComponent(article[i]);
      }
    })
  })
  .catch(err => {
    console.log(err);
  })