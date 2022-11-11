let body=document.querySelector("body"); //body tag selected

let navdiv=document.createElement("nav")// main nav div 

let uppernav=document.createElement("div")// upper nav with black color
let upperlist=document.createElement("ul")//
let upperlistItem1=document.createElement("li")//
let upperlistItem2=document.createElement("li")//
let upperlistItem3=document.createElement("li")//

let lowernav=document.createElement("div")// lower nav with white color
    lowernav.className="lowernav"
let logo=document.createElement("div")
    logo.className="logo"
let menu=document.createElement("ul")// menu list
    menu.className="menu"
let menu1=document.createElement("li")
    menu1.innerText="MEN"
    menu1.className='bold'
    let menu2=document.createElement("li")
    menu2.innerText="WOMEN"
    menu2.className='bold'
    let menu3=document.createElement("li")
    menu3.innerText="KIDS"
    menu3.className='bold'
    let menu4=document.createElement("li")
    menu4.innerText="SPORTS"
    let menu5=document.createElement("li")
    menu5.innerText="BRANDS"
    let menu6=document.createElement("li")
    menu6.innerText="COLLECTIONS"
    let menu7=document.createElement("li")
    menu7.innerText="OUTLET"
    menu7.className='red'

menu.append(menu1)
menu.append(menu2)
menu.append(menu3)
menu.append(menu4)
menu.append(menu5)
menu.append(menu6)
menu.append(menu7)// menu list end

//hero section
let hero=document.createElement("div")
   
let heroleft=document.createElement("div")
let heroP=document.createElement("p")
let heroH1=document.createElement("h1")

let heroBtn1=document.createElement("div")
let Btn1=document.createElement("button")

let heroBtn2=document.createElement("div")
let Btn2=document.createElement("button")

hero.className="hero"
heroleft.className="heroLeft"
heroBtn1.className="heroBtn1"
heroBtn2.className="heroBtn2"

heroH1.innerText="CELEBRATE SINGLE'S DAY"
heroP.innerHTML="SHOP JUST FOR YOU THIS SINGLES' DAY WITH FLAT 40-60% OFF"
Btn1.innerText="SHOP MEN"
Btn2.innerText="SHOP WOMEN"

hero.append(heroleft)
heroleft.append(heroH1)
heroleft.append(heroP)
heroleft.append(heroBtn1)
heroBtn1.append(Btn1)
heroleft.append(heroBtn2)
heroBtn2.append(Btn2)



let searchbox=document.createElement("div")
let searchinput=document.createElement("input")
let searchIcon=document.createElement("div")

let Icons=document.createElement("div")
//class of elements

navdiv.className="navdiv"
uppernav.className="uppernav"
upperlist.className="upperlist"
searchbox.className="searchbox"
searchIcon.className="searchIcon"
Icons.className="Icons"

//attributes and text
upperlistItem1.innerText="Sign Up & get 15% oFF"
upperlistItem2.innerText="Free Delivery"
upperlistItem3.innerText="Free Returns"
logo.innerHTML=`<img src="./img/logo.png" alt="">`
searchIcon.innerHTML=`<i class="fa-solid fa-magnifying-glass"></i>`
Icons.innerHTML=`<div class="notify">1</div><i class="fa-regular fa-user"></i><i class="fa-regular fa-heart"></i><i class="fa-solid fa-bag-shopping"></i>`



//APPENDING LOWER MENU
lowernav.append(logo)
lowernav.append(menu)
lowernav.append(searchbox)
lowernav.append(Icons)

searchbox.append(searchinput)
searchbox.append(searchIcon)

//appending chileds of nav
navdiv.append(uppernav)
uppernav.append(upperlist)
upperlist.append(upperlistItem1)
upperlist.append(upperlistItem2)
upperlist.append(upperlistItem3)

navdiv.append(lowernav)
//APPENDING hero section
body.append(hero)
body.prepend(navdiv)


