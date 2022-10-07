//import { Quran } from "./Classes/Quran"
let i = require('./Classes/Quran.js')
let body = document.querySelector('body')
let form = document.createElement('form')
let input = document.createElement('input')
let title = document.createElement('label')
title.textContent = 'Look for any sourah'
body.appendChild(title)
input.setAttribute("type","text")
form.appendChild(input)
body.appendChild(form)


let quran = new Quran
let name = 'الاعلى'
for(let i = 0 ; i < quran.getSourah(name).verses.length ; i++){
    let h3 = document.createElement('h3')
    body.appendChild(h3)
    h3.textContent = quran.getSourah(name).verses[i].text + `{${quran.getSourah(name).verses[i].id}}`
}
input.addEventListener("keypress",function lookForSourah(event)
{
    if(event.key == 'Enter')
    {
        console.log(quran.getSourah(input.value))
        console.log('test')
    }
    
})