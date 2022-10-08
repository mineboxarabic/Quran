import _ from 'lodash';
import quranJSON from './quran.json'
export function Quran()
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
        let sourahsArray = []
        this.Sourahs[sourahMap.get(name)]?.verses.forEach(aya => {
            i++
            let p = document.createElement('p')
            p.setAttribute("class","Sourah")
            p.textContent = `${aya.text}`
            sourahsArray.push(p)
        })
        //return this.Sourahs[sourahMap.get(name)];
        return sourahsArray};
    this.getSummary = function()
    {
        let Summary = []
        this.Sourahs.forEach(sourah => {
            Summary.push(sourah.name)
        })
        return Summary}
    this.isSourah = function(name)
    {
        if(this.getSummary().includes(name))
            return true
        else
            return false}
    this.showSourah = function(name,parent)
    {
        if(this.isSourah(name))
        {
            console.log('true')
            for(let i = 0 ; i < this.getSourah(name).length; i++)
            { 
                let p = this.getSourah(name)[i];
                let id = document.createElement('p')
                id.textContent = `{${i + 1}}`
                id.setAttribute("class","SourahSEP")
                console.log(p)
                parent.appendChild(p)
                parent.appendChild(id)
            }
        }
        else
        {
            if(parent.hasChildNodes())
            {
                while (parent.firstChild) 
                {
                    parent.removeChild(parent.firstChild);
                }
            }
        }
        }
};