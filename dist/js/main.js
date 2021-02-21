(function(){
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
        console.log('arriba');
      } else {
        document.getElementById("nav").style.top = "-128px";
        
      }
      prevScrollpos = currentScrollPos;
    }


    function test(){
      console.log('Hola');
    }
})();

// menu hamburger
    function menuHamburger(x){
      x.classList.toggle("change");
      document.querySelector('nav').classList.toggle('opacity-0');
    }