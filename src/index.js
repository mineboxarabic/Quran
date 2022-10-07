import quranJSON from './quran.json' 
//let quranJSON = require('./quran.json')
function Quran()
{
    this.Sourahs = quranJSON
    this.sourahsIndex = []
    let i = 0
    //----------------------------------------------------------------------
    this.Sourahs.forEach(sourah => {
        this.sourahsIndex.push(sourah.name)
        i++
    })
    const sourahMap = new Map()
    for(let i = 0 ; i < 100 ; i++)
    {
        sourahMap.set(this.sourahsIndex[i], i)
    }
    //----------------------------------------------------------------------
    //console.log(this.sourahsIndex)
    this.getSourah = function(name)
    {
        return this.Sourahs[sourahMap.get(name)];
    };
};
let quran = new Quran;

console.log(quran.getSourah('الفاتحة'))
let body = document.querySelector('body')
let name = 'الأعلى'
for(let i = 0 ; i < quran.getSourah(name).verses.length ; i++){
    let h3 = document.createElement('h3')
    body.appendChild(h3)
    h3.textContent = quran.getSourah(name).verses[i].text + `{${quran.getSourah(name).verses[i].id}}`
}