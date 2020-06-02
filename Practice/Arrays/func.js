function chk(n) {
    
    if (n%2 == 0) {
    console.log('true for' + n)
    }
    else {
        console.log('false for' + n)
    }
}
l = [20,22,23]
l.forEach(chk)
l.splice(2,0,1,24,30)
console.log(l)
if (Array.isArray(l)){
    console.log("its an array")
}
else {
    console.log("its not an array")
}
let ind = l.lastIndexOf(2)
console.log(ind)
var res = []
function div(n) {
    str = n.toString()
    if (Number(str[0]) % 2 ==0 && Number(str[1]) % 2 == 0) {
        res.push(str)
    }
}

l.forEach(div)
console.log("the list of divisible numbers is" + res)