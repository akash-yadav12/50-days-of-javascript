const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
];

const filterField = "money"

function removeArrayElement(filterField) {
    // write your solution here
    return array.filter(el => el.field !== filterField)
}

let x = removeArrayElement(filterField)
for(let el of x){
    console.log(el,x)
}
// console.log(`filtered array: ${removeArrayElement(filterField)}`)
