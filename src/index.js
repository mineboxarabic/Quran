import { Quran } from './Classes/Quran.js'
import "./stylesheet.css"
let body = document.querySelector('body')
let input = document.createElement('input')
let title = document.createElement('label')
let theSourahDiv = document.createElement('div')
let h3 = document.createElement('h3')
title.textContent = 'Look for any sourah'
body.appendChild(title)
input.setAttribute("type","text")
body.appendChild(input)

body.appendChild(theSourahDiv)
theSourahDiv.appendChild(h3)
let quran = new Quran



input.addEventListener("keyup",function lookForSourah(event)
{
    let name = input.value
    quran.showSourah(name,theSourahDiv)
})
