// document.body.style.backgroundColor = "cyan";

//DOM manipulation methods
// let v = document.getElementById("id1")
// let v1 = document.getElementById("id1").innerHTML

// console.log(v)
// console.log(v1)


// document.getElementsByTagName("")
// document.querySelector('#id1')


function add(){
    let v1 = parseInt(document.getElementById("v1").value);
    let v2 = parseInt(document.getElementById("v2").value);
    let result = v1+v2
    document.getElementById("output").innerHTML = result;

}
function substract(){
    let v1 = parseInt(document.getElementById("v1").value);
    let v2 = parseInt(document.getElementById("v2").value);
    let result = v1-v2
    document.getElementById("output").innerHTML = result;

}
function multiply(){
    let v1 = parseInt(document.getElementById("v1").value);
    let v2 = parseInt(document.getElementById("v2").value);
    let result = v1*v2
    document.getElementById("output").innerHTML = result;

}
function divide(){
    let v1 = parseInt(document.getElementById("v1").value);
    let v2 = parseInt(document.getElementById("v2").value);
    let result = v1/v2
    document.getElementById("output").innerHTML = result;

}

//map,filter,reading

// //Map
// let arr = [2,6,5,3,8,10,64,55]
// let newArr = arr.map(function test(x){
//     return x*3
// })
// console.log(newArr)

// //Filter
// let filArr = arr.filter(function test1(x){
//     return x > 25;
// })
// console.log(filArr)
