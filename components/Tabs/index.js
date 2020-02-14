// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function tab (topic){
    let tabDiv = document.createElement('div');
    tabDiv.classList.add('tab');
    tabDiv.textContent = topic;
  
    return tabDiv;
  }
  
  
  let topics = document.querySelector('.topics');
  topics.appendChild(tab());
  
  let newArray;
  
  axios.get('https://lambda-times-backend.herokuapp.com/topics')
         .then(response => {
          
          let topicInfo = response.data;
  
          console.log(topicInfo);
          //console.log(response);
          // console.log(response.data);
          // console.log(typeof response.data);
  
          // for(let elements in topicInfo){
          //   newArray = topicInfo[elements];
          // }
  
          for(let i = 0 ; i < topicInfo.topics.length ; i++){
            topics.appendChild(tab(topicInfo.topics[i]));
          }
         })
  
         .catch(error => {
          console.log("Error:", error);
        });
  