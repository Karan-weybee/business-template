document.getElementById('button1').addEventListener('click',function () {
    document.querySelector('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
   })