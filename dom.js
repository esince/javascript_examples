// document.getElementById("bio").innerHTML="esc : 1998"
//dom.js:1 Uncaught TypeError: Cannot set property 'innerHTML' 
//of null at dom.js:1

// error is handled by writting scipt in the body part of the html file

// var intro1 = document.getElementById("intro1");

// var mesaj = document.getElementById("mesaj")

// mesaj.innerHTML = intro1.innerHTML;

// var tumListeler = document.getElementsByTagName("ul")

// var sehirler = tumListeler[0]

// tumElemanlar = sehirler.getElementsByTagName("li")

// for (let i = 0; i < tumElemanlar.length; i++) {
//     alert(tumElemanlar[i].innerHTML)
// }


// ctrl +k & ctrl +u --> uncomment

// var classElemanlari = document.getElementsByClassName("intro1")

// alert(classElemanlari.length)
// alert(classElemanlari[0].innerHTML)
// alert(classElemanlari[1].innerHTML)
// alert(classElemanlari[2].innerHTML)

// var queryElemanlari = document.querySelectorAll("li.intro1")
// alert(queryElemanlari.length)
// alert(queryElemanlari[0].innerHTML)
// alert(queryElemanlari[1].innerHTML)

// var isimElemanlari = document.getElementsByName("musteriAdi")
// alert(isimElemanlari.length)
// alert(isimElemanlari[0].value)
// alert(isimElemanlari[0].type)

// var isimElemanlari = document.getElementsByName("musteriAdi")
// // var salih = document.getElementById("salih").addEventListener("click", rengiDegistir)
// var salih = document.getElementById("salih").addEventListener("mouseover", rengiDegistir)

// function rengiDegistir(){
//     if(document.getElementById("div1").style.color != "red"){
//         document.getElementById("div1").style.color = "red"
        
//         isimElemanlari[0].value = "Derin"
//     }
//     else{
//         document.getElementById("div1").style.color = "black"
//         isimElemanlari[0].value = "Salih"
//     }  
// }

// var node = document.getElementById("agac")
// alert(node.childNodes[0].nodeValue)

var baslik = document.createElement("h2")

var node = document.createTextNode("Merhaba JS")

baslik.appendChild(node)

var div1 = document.getElementById("div1")
var p2 = document.getElementById("p2")

div1.insertBefore(baslik, p2)