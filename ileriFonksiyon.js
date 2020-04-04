var selamFonksiyonu = function selam(){
    console.log("Merhaba 1")
}

selamFonksiyonu()

const selamFonksiyonu2 = () =>{
    console.log("Merhaba 2")
    console.log("Hello 3")
}

selamFonksiyonu2()

const selamFonksiyonu3 = (mesaj, m) =>{
    console.log(mesaj, m)
    
}

selamFonksiyonu3("Hello array func", "another message")

var topla = (sayi1, sayi2) => {
    return sayi1 + sayi2
}

let toplam = topla(3,4)

console.log(toplam)