import img1 from './1.jpg'



function createContent() {
    let m=document.createElement('main')
    let p=document.createElement('p')
   let img=document.createElement('img')
   m.append(p)
   p.append(img)
   img.src=img1
   img.alt='tesct '
   return m
}

export default createContent
