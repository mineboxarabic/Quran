import { Quran }from "./Classes/Quran"

//let quranJSON = require('./quran.json')

let quran = new Quran;

console.log(quran.getSourah('الفاتحة'))
let body = document.querySelector('body')
let name = 'الأعلى'
for(let i = 0 ; i < quran.getSourah(name).verses.length ; i++){
    let h3 = document.createElement('h3')
    body.appendChild(h3)
    h3.textContent = quran.getSourah(name).verses[i].text + `{${quran.getSourah(name).verses[i].id}}`
}