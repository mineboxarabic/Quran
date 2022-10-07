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
        return this.Sourahs[sourahMap.get(name)];
    };
};