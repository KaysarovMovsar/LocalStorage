// localStorage.setItem("course", "lincode")
// localStorage.setItem("numbers", {a: 1, b: 2})
// localStorage.setItem("array", [1, 2, 3, 4])

// const num = localStorage.getItem("numbers")

// const strNum = JSON.stringify(num)
// const strArray = JSON.stringify(arr)

// const parseNumber = JSON.parse(strNum)
// const parseArray = JSON.parse(strArray)



// console.log(localStorage.getItem("course"))
// console.log(parseNumber)
// console.log(parseArray)

const obj = {
    a: 2,
    b: 3
}
const strObj = JSON.stringify(obj)

localStorage.setItem("object", strObj)

const getObj = localStorage.getItem("object")

console.log(JSON.parse(getObj))


const arr = [1,2,3,4,5,6]

const strArr = JSON.stringify(arr)

localStorage.setItem("arr", strArr)

const getArr = localStorage.getItem("arr")

console.log(JSON.parse(getArr))


localStorage.clear()



// console.log(JSON.parse(strObj))


