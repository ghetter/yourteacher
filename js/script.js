const body = document.querySelector('body'),
toggle = document.querySelector('.nav__burger'),
menu = document.querySelector('.nav__list'),
map_icon = document.querySelector('.page-map__name'),
map_list = document.querySelector('.page-map__list');

map_icon.addEventListener("click", () => {
  map_icon.classList.toggle('active');
  map_list.classList.toggle('active');
});

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  menu.classList.toggle('active');
  body.classList.toggle('locked');
});

document.addEventListener("click", function (event) {
  const navItems = document.querySelectorAll(".nav__item-has-child");
  const subnavLists = document.querySelectorAll(".subnav__list");


for (let i = 0; i < navItems.length; i++) {
    if (navItems[i].contains(event.target)) {
      const subnavList = navItems[i].querySelector(".subnav__list");
      subnavList.classList.toggle("active");
    } else {
      subnavLists[i].classList.remove("active");
    }
  }
});


if (window.matchMedia('(max-width: 1279px)').matches) {

  document.querySelectorAll('.subnav__item').forEach(item => {
    item.addEventListener("click", () => {
      toggle.classList.toggle("active");
      menu.classList.toggle('active');
      body.classList.toggle('locked');
    });
  })
}
  
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