const body = document.querySelector('body');
toggle = document.querySelector('.nav__burger'),
menu = document.querySelector('.nav__list')

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  menu.classList.toggle('active');
  body.classList.toggle('locked');
});

document.querySelectorAll('.nav__item').forEach(item => {
  item.addEventListener("click", () => {
    toggle.classList.toggle("active");
    menu.classList.toggle('active');
    body.classList.toggle('locked');
  });
})
  
  if (window.matchMedia('(max-width: 1024px)').matches) {
    var flkty = new Flickity( '.service-carousel', {
      cellAlign: 'center',
      contain: true,
      groupCells: 1,
    });

    var flkty = new Flickity( '.fb-carousel', {
      cellAlign: 'center',
      contain: true,
      groupCells: 1,
    }); 


    var flkty = new Flickity( '.tut-carousel', {
      cellAlign: 'center',
      contain: true,
      groupCells: 1,
    }); 

    var flkty = new Flickity( '.main-carousel', {
      cellAlign: 'center',
      contain: true,
      groupCells: 1,
    });

    

} else {
  var flkty = new Flickity( '.service-carousel', {
    cellAlign: 'left',
    contain: true,
    groupCells: 3,
  });

  var flkty = new Flickity( '.fb-carousel', {
    cellAlign: 'left',
    contain: true,
    groupCells: 3,
  }); 

  var flkty = new Flickity( '.tut-carousel', {
    cellAlign: 'left',
    contain: true,
    groupCells: 3,
  }); 
  
  var flkty = new Flickity( '.main-carousel', {
    cellAlign: 'left',
    contain: true,
    groupCells: 3,
  });
  
}