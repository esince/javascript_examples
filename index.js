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

/*function giris(){
    if((email == kullanicilar[0].email && sifre == kullanicilar[0].sifre) || (email == kullanicilar[1].email && sifre == kullanicilar[1].sifre)){
        console.log(tweetler)

    }
    else{
        console.log("Kullanıcı adı veya şifre hatalı!")
    }
}
*/


giris(email, sifre)