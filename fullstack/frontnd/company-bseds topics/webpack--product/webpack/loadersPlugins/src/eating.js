import d from './drinking.js'
import s from './sleeping.js'
import './public/css/style.css'
import imgs from './public/img/1.jpg'


console.log('first eating')
console.log(d)
console.log(s)

var img=document.createElement('img')
img.src=imgs

document.body.append(img)


