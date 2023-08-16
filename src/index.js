import {choice, remove } from './helpers'
import catalogue from './foods'



let fruit = choice(catalogue)
console.log(`I would like one ${fruit} please`)
console.log(`Here you go one ${fruit}`)
console.log('Delicious may I have another ?')
let cat = remove(catalogue, fruit)
console.log(`I am sorry we have only ${cat.length} fruits left`)
