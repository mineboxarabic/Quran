import quranJSON from './quran.json'
function Quran()
{
    this.Sourahs = quranJSON
    this.sourahsIndex = []
    let i = 0
    this.Sourahs.forEach(sourah => {
        this.sourahsIndex.push(sourah.name)
        console.log(`sourahMap.set(${sourah.name},${i})`)
        i++
    })
    //console.log(this.sourahsIndex)
    this.getSourah = function(name)
    {
        const sourahMap = new Map()
        for(let i = 0 ; i < 100 ; i++)
        {
            sourahMap.set(this.sourahsIndex[i], i)
        }
        return this.Sourahs[sourahMap.get(name)];
    };
};
let quran = new Quran;
console.log(quran.getSourah('البقرة'))