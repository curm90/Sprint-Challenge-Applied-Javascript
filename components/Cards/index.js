// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

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