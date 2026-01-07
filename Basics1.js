let one = [12,3,5,7]
let sum = 0
//console.log("array is" + one)
for (let i=0 ; i < one.length ; i++){
    sum = sum + one[i]
   // console.log("sum inside lopp is " + sum)
}
console.log("testing git clone")
console.log("sum is " +sum)
Console.log("this change is in Git Demo develop branch")

let total = one.reduce((sum,two)=>sum+two,0)
console.log("total is ", total)
let newArray = one.filter(one=>one%2==0)
console.log("new array is " + newArray)