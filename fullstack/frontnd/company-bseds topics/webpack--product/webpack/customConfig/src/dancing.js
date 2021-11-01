
import sig from './singing.js'
import swim from './swimming.js'
import './cssCodes/style.css'
import img4 from '../src/components/1.jpg'
import f from './components/createContent.js'

console.log('dancing')
console.log(sig)
console.log(swim)
document.body.append(f())
let img3=document.createElement('img')
img3.src=img4

document.body.append(img3)