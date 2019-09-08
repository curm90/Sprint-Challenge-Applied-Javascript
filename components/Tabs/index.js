// Make get request to api to display each topic in header to the DOM
axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(res => {
    res.data.topics.forEach(topic => {
      topicComponent(topic)
    })
  })
  .catch(err => {
    console.log(err);
  })

function topicComponent(topic) {
  // Create element
  const tab = document.createElement('div');

  // Add classes and text content
  tab.classList.add('tab');
  tab.textContent = topic;

  // Append to the DOM
  document.querySelector('.topics').appendChild(tab);

  // Return component
  return tab
}