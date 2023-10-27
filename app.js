var arrcolors = ["red","green", "purple", "orange", "blue", "violet"]

var textchange = document.querySelector("span")

function colorhandler(){
    var randomnumbergenerated = Math.floor(Math.random() * 6 )
     textchange.textContent = arrcolors[randomnumbergenerated]
    document.body.style.backgroundColor = arrcolors[randomnumbergenerated]
}