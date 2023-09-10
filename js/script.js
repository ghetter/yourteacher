var flkty = new Flickity( '.main-carousel', {
    cellAlign: 'left',
    contain: true,
    groupCells: 3,
    freeScroll: true,
  });

  var flkty = new Flickity( '.fb-carousel', {
    cellAlign: 'left',
    contain: true,
    groupCells: 3,
    freeScroll: true,
  });

  var flkty = new Flickity( '.tut-carousel', {
    cellAlign: 'left',
    contain: true,
    groupCells: 3,
    freeScroll: true,
  });  
  
  var flkty = new Flickity( '.service-carousel', {
    cellAlign: 'left',
    contain: true,
    groupCells: 3,
  });

  if (matchMedia('(max-width: 900px)').matches) {
    var flkty = new Flickity( '.service-carousel', {
      cellAlign: 'left',
      contain: true,
      groupCells: 1,
    });
}