const filterOutOdds = (...nums) => nums.filter( (num) => num % 2 === 0)

const findMin = (...nums) => nums.reduce( (lowest, current) => current > lowest ? lowest : current)

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2}) 

const doubleAndReturnArgs = (arr, ...nums) => [...arr, ...nums.map((value) => value * 2)]

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    const newItems = [...items]
    newItems.splice(Math.floor(Math.random() * items.length),1)
    return newItems
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2]
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    return {...obj, [key] : val}
}

/** Return a new object with a key removed. */

function removeKey(obj, key) {
    const newObj = {...obj}
    delete newObj[key]
    return newObj
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1, ...obj2}
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    return {...obj, [key]:val}
}