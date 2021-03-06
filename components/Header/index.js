// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    let header = document.createElement('div');
    let date = document.createElement('date');
    let heading = document.createElement('h1');
    let temp = document.createElement('span');
  
  
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');
  
    date.textContent = "March 28, 2019";
    heading.textContent = "Lambda Times";
    temp.textContent = '98°';
    
    header.appendChild(date);
    header.appendChild(heading);
    header.appendChild(temp);
    
    return header;
  }

  //console.log(Header());

let bigHeader = document.querySelector('.header-container');

// And add it to the DOM in the .header-container component

//console.log(bigHeader);

bigHeader.appendChild(Header());
