const showCells = document.querySelector("#btn1")
const hideCells = document.querySelector("#btn2")
const cells = document.querySelectorAll(".cells")
const btnCard = document.querySelector("#btncard")
const navBtn = document.querySelectorAll(".navbtn")


showCells.addEventListener('click', () =>{
    location.reload()
})

hideCells.addEventListener('click', (event) => {
    console.log("hello")
    alert("you clicked me!")
    // not sure why these doms are not working 
        // cells.style.backgroundColor = "black" //<<-- broken?
        // btnCard.style.backgroundImage = "url(https://www.pixelstalk.net/wp-content/uploads/2016/05/Desktop-Mass-Effect-HD-Wallpapers.jpg)"

})


showCells.addEventListener('click', (event) => {
    console.log("hello")
    alert("you clicked me!")

})

navBtn.forEach((btn) => {
    btn.addEventListener('click', ()=> {
        console.log("hello")
        alert("you clicked me!")
    })
})

