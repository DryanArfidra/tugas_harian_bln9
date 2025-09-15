let dataDiri = {
    nama: "masdanz",
    umur: 19,
    asal: "klaten"
}

const data = JSON.stringify(dataDiri)

console.log(data)

const res = await fetch("https://api.myquran.com/v2/quran/surat/20")
let dataJson = await res.json()
let jsons = JSON.stringify(dataJson) // ini sebuah data Json
console.log(jsons)

console.log("===============================Rubah json ke object====================================")

const objectJson = JSON.parse(jsons) 
console.log(objectJson)
