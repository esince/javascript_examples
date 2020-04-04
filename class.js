class Personel{
    constructor(ad,soyad){
        this.ad = ad
        this.soyad = soyad

    }
    kaydet(){
        // console.log("Personel Kaydedildi" + this.ad)
        console.log(`Personel Kaydedildi: ${this.ad}`)
    }
}

const personel = new Personel("Engin", "Demirog")

personel.kaydet()
console.log(personel.ad)


//wrong if there is no constructor:
// personel.ad = "engin"
// console.log(personel.ad)