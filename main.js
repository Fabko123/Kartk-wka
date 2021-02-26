const arr = new Array(1,15,150,1500,"Jan",5525,"Henryk")
arr.forEach(Licz => {
    console.log(Licz)
})
const takalbonie = arr.some(item => item > 1)
console.log(takalbonie)

const index = arr.findIndex(item => {
    if(item === "Jan"){
    return item
}
})
console.log(index)

const tablic= new Array(arr)
tablic.forEach(ocenka => {
    console.log(ocenka)
})

