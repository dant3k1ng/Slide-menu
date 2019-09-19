var menu_btn = document.getElementById('menu-btn');
menu_btn.addEventListener('click', menuBtn);
menu_btn.addEventListener('click', menuOpen);
var menu = document.getElementById('menu');
var content = document.querySelector('.content');
var open = false;

function menuBtn(){
    if(open == false){
        document.getElementById('menu-btn').innerHTML = '<i class="fas fa-times fa-3x"></i>';
        open = true;
    }
    else{
        document.getElementById('menu-btn').innerHTML = '<i class="fas fa-bars fa-3x"></i>';
        open = false;
    }
}

function menuOpen(){
    if(open == false){
        menu.classList.remove('menu-open');
        menu.classList.add('menu-close');
    }
    else{
        menu.classList.remove('menu-disply');
        menu.classList.remove('menu-close');
        menu.classList.add('menu-open');
    }
}