// Common variables
const doc = document
const the = doc.querySelector.bind(doc)
const all = doc.querySelectorAll.bind(doc)

// number to decimals
function minTwoDigits(n) {
  return (n < 10 ? '0' : '') + n;
}

// Detect request animation frame
const scroll = window.requestAnimationFrame ||
             window.webkitRequestAnimationFrame ||
             window.mozRequestAnimationFrame ||
             window.msRequestAnimationFrame ||
             window.oRequestAnimationFrame ||
             // IE Fallback, you can even fallback to onscroll
             function(callback){ window.setTimeout(callback, 1000/60) }

// Find position relative to the scroll
 function findPos(el) {

     let node = el,
         curtopscroll = 0,
         curtop = 0,
         curLeftscroll = 0,
         curLeft = 0

     if (node.offsetParent) {
         do {
             curtop += node.offsetTop
             curtopscroll += node.offsetParent ? node.offsetParent.scrollTop : 0

             curLeft += node.offsetLeft
             curLeftscroll += node.offsetParent ? node.offsetParent.scrollLeft : 0

         } while (node = node.offsetParent)

         return {
            y: curtop - curtopscroll,
            x: curLeft - curLeftscroll
         }
     }

 }


 // Test via a getter in the options object to see if the passive property is accessed
 let supportsPassive = false
 try {
   const opts = Object.defineProperty({}, 'passive', {
     get: () => {supportsPassive = true}
   })
   window.addEventListener("test", null, opts)
 } catch (e) {}



 // check if a numer is odd or not
const isOdd = num => num % 2

 // return a random number
 function getRandomArbitrary(min, max) {
     return Math.random() * (max - min) + min;
 }

// Check if document is ready

function DOMReady(a,b,c){

    b=document,
    c='addEventListener'

    b[c]?b[c]('DOMContentLoaded',a):window.attachEvent('onload',a)
}
