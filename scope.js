var sayi = 10
var sehir = "ankara"

sayi = 11
sehir = "istanbul"

//it can be possible in js 
var sehir = "adana"


let il = "Ankara"

il = "Bursa"

//Uncaught SyntaxError: 
//Identifier 'il' has already been declared
// let il = "İzmir" 

function mesajVer(){
    var isim = "engin"
    console.log(sehir)
    console.log(isim)
}
// console.log(sayi)
// console.log(sehir)
// console.log(il)

mesajVer() //prints "adana"
// console.log(isim)

for (var i = 0; i < 10; i++) {
    
    
}
console.log(i)