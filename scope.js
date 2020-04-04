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
    console.log(sehir)
}
// console.log(sayi)
// console.log(sehir)
// console.log(il)

mesajVer() //prints "adana"