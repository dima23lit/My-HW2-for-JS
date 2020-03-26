console.log(1 == 2)
console.log(1 != 2)
console.log(1 == 1)
console.log(1 != 1)
console.log("text" == 5)
console.log("text" != 5)
console.log("text" == "Text")
console.log("text" == "text")
console.log(true == "true")
console.log(true == false)
console.log(false == 0)
console.log(false === 0)
console.log("" == false)
console.log("" !== false)
console.log(undefined === null)
console.log(undefined == null)
console.log(17 === true)
console.log("17" === true)
console.log({} === {})

let evenNumber = prompt()
console.log(evenNumber%2 == 0)

let oddNumber = prompt()
console.log(oddNumber%2 !== 0)

let a = 10
a += 10
console.log(a)
a -= 1
console.log(a)
a /= 2
console.log(a)

let b = "100"
console.log (typeof Number(b))
console.log (typeof +b)
console.log (typeof parseInt(b))

let e = Number(prompt())
let f = Number(prompt())
console.log ((e + f) * (e - f) === ((e ** 2) - (f ** 2)))

let g = Number(prompt())
let h = Number(prompt())
let i = Number(prompt())
alert ((g+10)+(h+10)+(i+10))

let side1 = Number(prompt())
let side2 = Number(prompt())
let side3 = Number(prompt())
// console.log ((side2 + side3 > side1) && (side1 + side3 > side2) && (side1 + side2 > side3)) (Погуглил, и нашел еще одно решение)
console.log ((side2 + side3 > side1) == (side1 + side3 > side2) == (side1 + side2 > side3))

let m = Number(prompt())
let n = Number(prompt())
console.log ( (m + n) ** 3 === (m ** 3) + (3 * m ** 2 * n) + (3 * m * n ** 2) + (n ** 3))


