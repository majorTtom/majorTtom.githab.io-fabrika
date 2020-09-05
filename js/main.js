$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop:true,
  	dots:true,
    nav:false,
    animateOut: 'fadeOut',
    autoplay:true,
    responsive:{
        0:{
            items:1 
        },
        600:{
            items:1
         },
        1000:{
            items:1
        }
    }
  });
});


$(document).ready(function(){
  $(".gallerySlider__wrap").owlCarousel({
    loop:true,
    dots:true,
    animateOut: 'fadeOut',
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });
});

// $(function(){
//     $('form').submit(function(event) {
//         event.preventDefault();
//         let that = $(this);
//         $.ajax({
//             type: "POST",
//             url: "mail.php",
//             data: that.serialize()
//         }).done(function() {
//             that.find("input").val("");
//             alert("Сообщение успешно отправлено");
//             that.trigger("reset");
//         });
//         return false;
//     });
// })
function formAjax(){
    setTimeout(function(){
        $(document).ready(function() {
        	//E-mail Ajax Send
        	$("form").submit(function(event) {
        	    event.preventDefault();//Change
        		var th = $(this);
        		$.ajax({
        			type: "POST",
        			url: "mail.php", //Change
        			data: th.serialize()
        		}).done(function() {
        			alert("Вы забронировали столик. Спасибо");
        			setTimeout(function() {
        				// Done Functions
        				th.trigger("reset");
        			}, 1000);
        		});
        		return false;
        	});
        });
    }, 8000);

};

// $(document).on('ready', function() {
  

//     //E-mail Ajax Send
//     $('form').on('submit', function(e) { //Change
//         event.preventDefault();
//         var th = $(this);
//         $.ajax({
//             method: "POST",
//             url: "mail.php", //Change
//             data: th.serialize()
//         }).done(function() {
//             alert("Thank you!");
//             setTimeout(function() {
//                 // Done Functions
//                 th.trigger("reset");
//             }, 1000);
//         });
//         return false;
//     });

// });
            
            
      

        
        


        
$('.header__nav li').on('click', function(e){
  e.preventDefault;
  $('.header__line-active').removeClass('header__line-active');
  $(this).addClass('header__line-active') 
})



$('.header__burger').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('header__burger-active');
  $('.header__nav').toggleClass('header__nav-active')
});

$(document).ready(function() {
    var w = $(window).width(); // Получаем ширину окна
    if (w <= 1100) { // Если ширина окна меньше, либо равна 600
      $('.header__nav li').on('click', function(e){
          e.preventDefault;
          $('.header__burger').toggleClass('header__burger-active');
          $('.header__nav').toggleClass('header__nav-active')
          
      })
    }
});


window.onscroll = function showHeader() {
    var header = document.querySelector('.header__top');
    var navUp = document.querySelector('.nav__up');
    if(window.pageYOffset > 200){
        header.classList.add('header_fixed');
        navUp.classList.add('nav__up-fixed');
    } else{
        navUp.classList.remove('nav__up-fixed');
        header.classList.remove('header_fixed');
    }
}



$(function(){
  $("a[href^='#']").on('click', function(e){
    var _href = $(this).attr("href");
    $('html,body').stop().animate({ scrollTop: $(_href).offset().top }, 1500);
    e.preventDefault;
  });

});





const about = document.getElementById('aboutBtn');
const team = document.getElementById('teamBtn');
const com = document.getElementById('comBtn');
const adress = document.getElementById('adressBtn');

const nav = document.getElementById('nav__titles');
const wrappedP = document.getElementById('nav__titles');
const wrappedCh = document.getElementById('nav__titles-wrap');




let words = ["О_нас", "Команда", "Отзывы", "Адрес"];


  about.addEventListener('mouseenter', strokeAbout);
  team.addEventListener('mouseenter', strokeTeam);
  com.addEventListener('mouseenter', strokeCom);
  adress.addEventListener('mouseenter', strokeAdress);
  // about.addEventListener('mouseleave', stroke2);



function strokeAbout(){
  wrappedP.appendChild(wrappedCh);
  for (var i = 0; i < 8; i++) {
    var elem = document.createElement('h4'), 
    content = document.createTextNode(words[0]);
    



    elem.appendChild(content);

    elem.style.display = 'inline-block';
    elem.style.animation = "textanim 1.5s infinite linear";
    elem.style.fontSize = '22px';
    elem.style.paddingLeft = '8%';
    elem.style.color = '#fff';
    elem.style.textTransform = 'uppercase';

    wrappedCh.appendChild(elem);
  }
}

function strokeTeam(){
  wrappedP.appendChild(wrappedCh);
  for (var i = 0; i < 8; i++) {
    var elem = document.createElement('h4'), 
    content = document.createTextNode(words[1]);
    



    elem.appendChild(content);

    elem.style.display = 'inline-block';
    elem.style.animation = "textanim 1.5s infinite linear";
    elem.style.fontSize = '22px';
    elem.style.paddingLeft = '8%';
    elem.style.color = '#fff';
    elem.style.textTransform = 'uppercase';

    wrappedCh.appendChild(elem);
  }
}

function strokeCom(){
  wrappedP.appendChild(wrappedCh);
  for (var i = 0; i < 8; i++) {
    var elem = document.createElement('h4'), 
    content = document.createTextNode(words[2]);
    



    elem.appendChild(content);

    elem.style.display = 'inline-block';
    elem.style.animation = "textanim 1.5s infinite linear";
    elem.style.fontSize = '22px';
    elem.style.paddingLeft = '8%';
    elem.style.color = '#fff';
    elem.style.textTransform = 'uppercase';

    wrappedCh.appendChild(elem);
  }
}

function strokeAdress(){
  wrappedP.appendChild(wrappedCh);
  for (var i = 0; i < 8; i++) {
    var elem = document.createElement('h4'), 
    content = document.createTextNode(words[3]);
    



    elem.appendChild(content);

    elem.style.display = 'inline-block';
    elem.style.animation = "textanim 1.5s infinite linear";
    elem.style.fontSize = '22px';
    elem.style.paddingLeft = '8%';
    elem.style.color = '#fff';
    elem.style.textTransform = 'uppercase';

    wrappedCh.appendChild(elem);
  }
}

function strokeLeave(){
  wrappedCh.innerHTML = ' ';
}





function flex(){
  wrappedP.style.display = 'flex';
}

function none(){
  wrappedP.style.display = 'none';
}


var headerr = document.querySelector('.header__top');
var buttons = document.querySelectorAll('.a'),
    index, button;
    console.log(headerr);
    function head1(){
    headerr.style.display = 'none';
}

    function head2(){
    headerr.style.display = 'flex';
}

for (index = 0; index < buttons.length; index++) {
  button = buttons[index];
  button.addEventListener('mouseenter', flex);
  button.addEventListener('mouseleave', none);
  button.addEventListener('mouseleave', strokeLeave);
  button.addEventListener('mouseenter', head1);
  button.addEventListener('mouseleave', head2);
}



 



