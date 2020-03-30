// document.getElementById("bio").innerHTML="esc : 1998"
//dom.js:1 Uncaught TypeError: Cannot set property 'innerHTML' 
//of null at dom.js:1

// error is handled by writting scipt in the body part of the html file

var intro1 = document.getElementById("intro1");

var mesaj = document.getElementById("mesaj")

mesaj.innerHTML = intro1.innerHTML;

var tumListeler = document.getElementsByTagName("ul")

var sehirler = tumListeler[0]

tumElemanlar = sehirler.getElementsByTagName("li")

for (let i = 0; i < tumElemanlar.length; i++) {
    alert(tumElemanlar[i].innerHTML)
}


// ctrl +k & ctrl +u --> uncomment