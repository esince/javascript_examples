//28.03.2020 Esin Ece Aydin

var kullanicilar = [
    {email:"aa@gmail.com", sifre:"1234"},
    {email:"ee@gmail.com", sifre:"5678"}
    
]

var tweetler = [
    {email:"aa@gmail.com", tweet:"Bugün hava çok güzel."},
    {email:"aa@gmail.com", tweet:"Bugün hava çok güzel 222."},
    {email:"ee@gmail.com", tweet:"Kapıyı ben açacağım."}
]

var email = prompt("email: ")
var sifre = prompt("şifre: ")


function kullaniciVarMi(email, sifre){
    for (let i = 0; i < kullanicilar.length; i++) {
        if(email == kullanicilar[i].email && sifre == kullanicilar[i].sifre){
            return true
        }
       
    }
    return false
}

function giris(){
    alert(arguments[0]) //prints out email 
    kullaniciVarMi(email, sifre)
    if(kullaniciVarMi(email, sifre)){
        console.log(tweetler)
    }
    else{
        console.log("Hatali giris!")
    }
}

giris(email, sifre)