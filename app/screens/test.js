const obj = ['1 cup sugar', '2 cups flour', '2 tbs salt', '2 each butternut squash']
let result = []
for(let i = 0; i < obj.length; i++){
    let newObj = {}
    newObj.amount = obj[i].split(' ').slice(0,2).join(' ')
    newObj.ingredientName = obj[i].split(' ').slice(2).join(' ')
    result.push(newObj)
}
console.log(result)

