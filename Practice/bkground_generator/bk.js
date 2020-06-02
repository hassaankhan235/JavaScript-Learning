inp1 = document.querySelector('.col1')
inp2 = document.querySelector('.col2')
body = document.querySelector('body')
square = document.querySelector('.square')
pos = 50
function colorset() {
    body.style.background = "linear-gradient(to right ," 
    + inp1.value 
    + "," 
    +inp2.value 
    +")"

    document.querySelector(".css").textContent = 
    body.style.background + ";";
}
function expand() {
    if (pos == 250) {
    pos = 50
    }
    else
    {
    pos++
    square.style.top = pos + "px";
    square.style.left = pos + "px";
    console.log(square.style.top)
    }
}
// function contract () {

//     square.style.width = "
//     square.style.background = inp2.value;
// }

inp1.addEventListener('input',colorset)
inp2.addEventListener('input',colorset)
square.addEventListener('mousemove',expand)
//square.addEventListener('mouseout',contract)
