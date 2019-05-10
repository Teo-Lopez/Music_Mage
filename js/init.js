window.onload = function() {
  const sound = new Audio('audio/button.mp3')
  const startButton = document.getElementById("start")
  const introduction = document.getElementsByClassName("inicio")[0]
  let genderMale = document.getElementById("male")
  let genderFemale = document.getElementById("female")
  let gender = "img/femaleCharacter.png"
  
  genderFemale.onclick = () => {
    gender = "img/femaleCharacter.png"
    sound.play()    
  }
  genderMale.onclick = () => { 
    gender = "img/maleCharacter.png"
    sound.play()
  }
  startButton.onclick = function() {
    sound.play()
    startButton.setAttribute("class", "hidden")
    introduction.setAttribute("class", "hidden")
    genderMale.classList.add("hidden")
    genderFemale.classList.add("hidden")
    Game.init("myGame", gender)}

}






 
