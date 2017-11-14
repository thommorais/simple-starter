function pointToNumbers(points, x){
    return points.split(' ')
        .map((point, index) => {

          if(!isOdd(index)){
              return Number(point)
          }else{
              return Number(point) + getRandomArbitrary(0, x)
          }

       })
       .join(' ')
}

function returnZeros(points){
    return points.split(' ')
        .map((point, index) => {

          if(!isOdd(index)){
              return Number(point)
          }else{
              return 395
          }

       })
       .join(' ')
}


DOMReady( () => {

    const svgs = the('#svgs')
    const polys = svgs.querySelectorAll('polygon')

    anime.easings['custom'] = (t) => Math.pow(Math.sin(t * 0), 24)

    polys.forEach( (poly, index)=>{

        const points = poly.getAttribute('points')

        anime({
          targets: poly,
          points: [
                { value: pointToNumbers(points, 385)},
                { value: pointToNumbers(points, getRandomArbitrary(100, 0))},
                { value: pointToNumbers(points, getRandomArbitrary(100, 150))},
                { value: pointToNumbers(points, 0)},

          ],
          easing: 'easeInOutQuad',
          duration: anime.random(1000,7000),
          delay: anime.random(280,420)
        })


    })

})
