const arr = [2, 10, 4, 22]
//console.log(arr.length)

for (var i = 0; i < arr.length; i++){
    setTimeout(() => console.log(arr[i]), 2000)
    //console.log('teste')
}