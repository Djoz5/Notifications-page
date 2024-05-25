const container1 = document.querySelector('.container1')
const container2 = document.querySelector('.container2')
const container3 = document.querySelector('.container3')
const button = document.getElementById("button")
const numberDiv = document.querySelector('.number')
const dot1 = document.querySelector('.dot1')
const dot2 = document.querySelector('.dot2')
const dot3 = document.querySelector('.dot3')

button.addEventListener("click", function(){
    container1.style.background = "white"
    container2.style.background = "white"
    container3.style.background = "white"
    numberDiv.style.display = "none"
    dot1.style.display = "none"
    dot2.style.display = "none"
    dot3.style.display = "none"
})