function setActiveNav(btn){
  document.querySelectorAll('.nav-item').forEach(function(el){
    el.classList.remove('home');
    el.classList.remove('open');
  });
  btn.classList.add('home');
}

function toggleDropdown(btn){
  var wasOpen = btn.classList.contains('open');
  document.querySelectorAll('.nav-item').forEach(function(el){
    el.classList.remove('open');
  });
  if(!wasOpen){
    btn.classList.add('open');
  }
}

// Close any open dropdown state when clicking outside the nav
document.addEventListener('click', function(e){
  if(!e.target.closest('nav')){
    document.querySelectorAll('.nav-item.open').forEach(function(el){
      el.classList.remove('open');
    });
  }
});

// Hero carousel
function initHeroCarousel(){
  var hero = document.querySelector('.hero');
  if(!hero){return;}

  var heroPhoto = hero.querySelector('.hero-photo');
  var heroTitle = hero.querySelector('.hero-caption h2');
  var heroText = hero.querySelector('.hero-caption p');
  var arrows = hero.querySelectorAll('.hero-arrow');
  var dots = hero.querySelectorAll('.dot');

  if(!heroPhoto){return;}
  
/* chnage the image and txt from here */
  var slides = [
    {
      image: "images/banner1.jpg",
      title: "INAUGURATION OF SAGARIKA EMPORIUM",
      text: "ON 23.08.2025 AT CHENNAI, TTDC TOURISM COMPLEX, WALLAJAH ROAD"
    },
    {
      image: "images/banner2.jpg",
      title: "OUR LEADERSHIP AT ANIIDCO",
      text: "A strong team driving growth and development across the islands."
    },
    {
      image: "images/banner3.jpg",
      title: "RESORTS AND TOURISM INITIATIVES",
      text: "Discover the latest developments in hospitality and tourism."
    },
    {
      image: "images/banner4.jpg",
      title: "WELCOME TO ANIIDCO",
      text: "Promoting sustainable development and tourism for the Andaman and Nicobar Islands."
    },
    {
      image: "images/banner5.jpg",
      title: "SUSTAINABLE ISLAND DEVELOPMENT",
      text: "Building a better future for the Andaman and Nicobar Islands."
    }
  ];

  var currentSlide = 0;

  function renderSlide(index){
    if(index < 0 || index >= slides.length){return;}

    var slide = slides[index];

    // Change background image
    heroPhoto.style.backgroundImage = "url('" + slide.image + "')";

    // Update text
    if(heroTitle){heroTitle.textContent = slide.title;}
    if(heroText){heroText.textContent = slide.text;}

    // Update dots
    dots.forEach(function(dot, dotIndex){
      dot.classList.toggle('active', dotIndex === index);
    });
  }

  // Arrow click
  arrows.forEach(function(arrow){
    arrow.addEventListener('click', function(){
      var direction = arrow.classList.contains('left') ? -1 : 1;
      currentSlide = (currentSlide + direction + slides.length) % slides.length;
      renderSlide(currentSlide);
    });
  });

  // Dot click
  dots.forEach(function(dot, index){
    dot.addEventListener('click', function(){
      currentSlide = index;
      renderSlide(currentSlide);
    });
  });

  // First image load
  renderSlide(currentSlide);
}

// Footer accordion for smaller screens
document.addEventListener('DOMContentLoaded', function(){
  initHeroCarousel();

  var footerCols = document.querySelectorAll('.site-footer .footer-col');
  if(!footerCols.length){return;}

  function isMobileFooter(){
    return window.matchMedia('(max-width: 760px)').matches;
  }

  function syncFooterState(){
    footerCols.forEach(function(col){
      if(isMobileFooter()){
        col.classList.add('is-collapsible');
        if(!col.classList.contains('open')){
          col.classList.remove('open');
        }
      } else {
        col.classList.remove('is-collapsible');
        col.classList.add('open');
      }
    });
  }

  syncFooterState();
  window.addEventListener('resize', syncFooterState);

  footerCols.forEach(function(col){
    var head = col.querySelector('.footer-head');
    if(!head){return;}

    head.addEventListener('click', function(){
      if(!isMobileFooter()){return;}
      col.classList.toggle('open');
    });

    head.addEventListener('keydown', function(e){
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        if(isMobileFooter()){
          col.classList.toggle('open');
        }
      }
    });
  });
});