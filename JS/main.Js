
document.querySelector(".togolstting .fa-gear").onclick = function () {
this.classList.toggle("fa-spin")
document.querySelector(".sttiong-box").classList.toggle("open")
}



let landingpage = document.querySelector(".landing-page")


let arr = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"]




setInterval(() => {
    let pandomNumber = Math.floor (Math.random() * arr.length)
    landingpage.style.backgroundImage = "url('imges/"+arr[pandomNumber]+"')" 

}, 10000);




