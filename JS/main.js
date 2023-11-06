
// const request = fetch("https://api.msigma.in/btech/v2/branches/")
// console.log(request)


const url = 'https://api.msigma.in/btech/v2/branches/';

const colors = ["#1B75BB", "#F6A529", "#56B9B1", "red", "green", "blue","orange","lightblue","red","green"];

// Use the fetch() function to make a GET request
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response as JSON (you can use .text() for plain text)
  })
  .then(data => {
    // Handle and use the retrieved data here
    const element=document.querySelector(".course")
    console.log(data.branches);
    console.log(element);
    for(let i=0;i<10;i++){

        const div=document.createElement("div");
        // div.classList.add(".course_card");

        const short=document.createElement('h2');
        short.textContent=data.branches[i].short ;
        short.style.color=colors[i];
        div.appendChild(short);

        const name=document.createElement("p");
        name.textContent=data.branches[i].name;
        div.appendChild(name);

        const applyButton=document.createElement("button");
        applyButton.textContent="Apply Now";
        applyButton.style.color=colors[i];
        applyButton.style.border=`1px solid ${colors[i]} `;
        div.appendChild(applyButton);

        const fee=document.createElement("p");
        fee.textContent="Fee starting at 799 per subject";
        div.appendChild(fee);
        
        div.className="course_card"
        element.appendChild(div)
    }
    
    
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
  });
