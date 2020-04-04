//array
const dizi = [1,2,3,4]
const kareDizisi = []

dizi.forEach(sayi => {
    kareDizisi.push(sayi * sayi)
})



console.log(kareDizisi)

//map
// const mapDizi = dizi.map(sayi=>{
//     return sayi * 3
    
// })
const mapDizi = dizi.map(sayi=> sayi * 3)

console.log(mapDizi)

