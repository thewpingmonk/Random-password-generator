let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowercase = "abcdefghijklmnopqrstuvwxyz"
let number = "0123456789"
let symbol = "~!@#$%^&*()_+/?"
const rand = (size) =>{
    let a = Math.random()*size;
    a = Math.floor(a)
    return a
}

const fun = (dif , size)=>{
    let a = ""
    for(let i = 0;i<size;i++)
    {
        selected = dif[rand(dif.length)]
        a += selected
    }
    return a
}
String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + 1);
}
const print = () =>{
    let length = document.getElementById("length").value
    length = parseInt(length)
    if(length < 8 || length > 30)
    {
        document.getElementById("pass").innerHTML = "A password must have 8 to 30 charecters"
        return
    }
    let dif = ""
    let upper = document.getElementById("upper")
    let lower = document.getElementById("lower")
    let num = document.getElementById("number")
    let sym = document.getElementById("symbol")
    if(upper.checked) dif += uppercase
    if(lower.checked) dif += lowercase
    if(num.checked) dif += number
    if(sym.checked) dif += symbol
    if(dif.length == 0)
    {
        let a = document.getElementById("pass").innerHTML = "Please select at least one"
        return
    }

    let ans = fun(dif , length)
    if(upper.checked)
    {
        ans = ans.replaceAt(0 , uppercase[rand(26)])
    }
    if(lower.checked)
    {
        ans = ans.replaceAt(1 , lowercase[rand(26)])
    }
    if(num.checked)
    {
        ans = ans.replaceAt(2 , number[rand(10)])
    }
    if(sym.checked)
    {
        ans = ans.replaceAt(3 , symbol[rand(15)])
    }
    if(lower.checked) dif += lowercase
    if(num.checked) dif += number
    if(sym.checked) dif += symbol
    
    
    let a = document.getElementById("pass")
    a.innerHTML = ans

}