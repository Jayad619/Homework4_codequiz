// Target start button
const startButton = document.getElementById("start-btn");

//target banner section
const bannerSection = document.getElementById("banner")

// function to render question to page
const renderQuestion = () => {
    console.log("render question")
}

// function to remove banner from page
const removeBanner = () => {
    console.log("remove banner")
}
//declare event handler function for start buttonclick
const handleStartButtonClick = (event) => {
  console.log("Start button clicked");

  // remove banner section
removeBanner();
  //render the qs
renderQuestion();
};

// add event listener to start button
startButton.addEventListener("click",handleStartButtonClick);