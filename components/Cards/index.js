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

function cardComponent (obj){
    let card = document.createElement('div');
    let headline = document.createElement('div');
    let author = document.createElement('div');
    let imgCont = document.createElement('div');
    let img = document.createElement('img');
    let spanEl = document.createElement('span');
  
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgCont.classList.add('img-container');
    
    img.src = obj.authorPhoto;
    spanEl.textContent = `By ${obj.authorName}`;
    headline.textContent = obj.headline;
  
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgCont);
    imgCont.appendChild(img);
    author.appendChild(spanEl);
  
  
    return card;
  }
  
  let cardsContainer = document.querySelector('.cards-container');
  
  //cardsContainer.appendChild(cardComponent(obj));
  
  
  let articlesArray;
  
  axios.get('https://lambda-times-backend.herokuapp.com/articles')
      .then(response => {
          
      // console.log(response);
      // console.log(response.data);
      // console.log(response.data.articles);
      // console.log(response.data.articles.javascript);
      
      
      let bootStrap = response.data.articles.bootstrap;
      let technology = response.data.articles.technology;
      let jQuery = response.data.articles.jquery;
      let javascript = response.data.articles.javascript;
      let node = response.data.articles.node;
  
      javascript.forEach(content => {
        let card = content;  
        //console.log(cardsContainer.appendChild(cardComponent(card));
        cardsContainer.appendChild(cardComponent(card));
        
      })
  
      node.forEach(content => {
        let card = content;  
        //console.log(cardsContainer.appendChild(cardComponent(card));
        cardsContainer.appendChild(cardComponent(card));
        
      })
  
      jQuery.forEach(content => {
        let card = content;  
        //console.log(cardsContainer.appendChild(cardComponent(card));
        console.log(cardsContainer.appendChild(cardComponent(card)));
        
      })
  
      technology.forEach(content => {
  
        let card = content;  
        //console.log(cardsContainer.appendChild(cardComponent(card));
        console.log(cardsContainer.appendChild(cardComponent(card)));
        
      })
  
      bootStrap.forEach(content => {
        let card = content;  
        //console.log(cardsContainer.appendChild(cardComponent(card));
        console.log(cardsContainer.appendChild(cardComponent(card)));
        
      })
  
  
      
      })
  
      
      .catch(error => {
        console.log("Error:", error);
      });
  
     