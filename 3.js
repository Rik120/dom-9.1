let body = document.querySelector(".qwe")
let div = document.createElement("div")
let topDiv = document.createElement("div")
let bottomDiv = document.createElement("div")
let redDiv = document.createElement("div")
let bbdiv = document.createElement("div")
let btnDiv = document.createElement("button")
let img = document.createElement("img")
let img2 = document.createElement("img")
let h2 = document.createElement("h2")
let h3 = document.createElement("h3")
let h4 = document.createElement("h4")
let h5 = document.createElement("h5")

div.classList.add("item")
topDiv.classList.add("top")
bottomDiv.classList.add("bottom")
redDiv.classList.add("redDiv")
btnDiv.classList.add("item-btn")
bbdiv.classList.add("bbdiv")

h2.innerHTML = "Смартфоны"
h3.innerHTML = "3 152 000 сум"
h4.innerHTML = "от 326 000 сум/месяц"
h5.innerHTML = "Смартфон Xiaomi Redmi Note 11 Pro 128GB 8 GB Grey"
btnDiv.innerHTML = "Купить"
img.src = "./img/redmi.jfif"
img2.src = "./img/3005778_audio_line_sound_spectrum_icon.svg"

div.append(topDiv, bottomDiv)
topDiv.append(img)
redDiv.append(h4)
bbdiv.append(btnDiv, img2)
bottomDiv.append(h2, h3, redDiv, h5, bbdiv)
body.prepend(div)
