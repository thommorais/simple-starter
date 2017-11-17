function pointToNumbers(points, x){
    return points.split(' ')
      .map((point, index) => {

        if(!isOdd(index)){
            return Number(point)
        }else{
            const calc = Number(point) + getRandomArbitrary(0, x)
            return calc
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
          return 390
        }

     })
     .join(' ')
}

DOMReady( () => {

    const svgs = the('#svgs')
    const polys = svgs.querySelectorAll('polygon')

    polys.forEach( (poly, index ) => {

        const points = poly.getAttribute('points')

        anime({
          targets: poly,
          points: [
            { value: pointToNumbers(points, 5)},
            { value: pointToNumbers(points, getRandomArbitrary(7, 12))},
            { value: pointToNumbers(points, getRandomArbitrary(10, 15))},
            { value: pointToNumbers(points, getRandomArbitrary(60, 85))},
            { value: pointToNumbers(points, getRandomArbitrary(40, 55))},
            { value: pointToNumbers(points, getRandomArbitrary(20, 30))},
            { value: pointToNumbers(points, 0)},
          ],
          easing: 'easeInOutQuad',
          duration: anime.random(1000,7000),
          delay: anime.random(280,420)
        })

    })


    new SendContact()

})
