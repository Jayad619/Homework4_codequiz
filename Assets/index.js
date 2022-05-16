// Target start button
const startButton = document.getElementById("start-btn");

//target banner section
const bannerSection = document.getElementById("banner")

//target main element
const mainElement = document.getElementById("main")

// function to render question to page
const renderQuestion = () => {
    console.log("render question");
    // create section
    const section = document.createElement("section")
    section.setAttribute("class", "content-section question-container")
    //create h2
    const h2 = document.createElement("h2")
    h2.setAttribute("class", "content-section-title")
    // this should be dynamic
    h2.textContent = 
      "Do you likke Arsenal?"
    //create ul and 4 li
    const ul = document.createElement("ul")
    ul.setAttribute("class", "feedback-list")

    //loop over options to create and append ul and li
    const li1 = document.createElement("li")
    li1.setAttribute("class", "list-item")
    li1.textContent = "yes"

    const li2 = document.createElement("li")
    li2.setAttribute("class", "list-item")
    li2.textContent = "no"

    const li3 = document.createElement("li")
    li3.setAttribute("class", "list-item")
    li3.textContent = "maybe"

    ul.append(li1,li2,li3);

    //append h2 and ul to section
    section.append(h2,ul);

    //append question section to main epement
    mainElement.append(section)
};

// function to remove banner from page
const removeBanner = () => {
    console.log("remove banner")
    bannerSection.remove();
};

//declare event handler function for start buttonclick
const handleStartButtonClick = (event) => {
  console.log("Start button clicked");
  // remove banner section
removeBanner();
  //render the qs
renderQuestion();
}

  

// add event listener to start button
startButton.addEventListener("click",handleStartButtonClick);