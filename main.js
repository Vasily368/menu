//menu__inner меню категории товаров 

let menuCategoreTitle = document.querySelectorAll('.menu-categore__list-title');
let arrowBtn = document.querySelectorAll('.arrow-btn');
let categoreBox = document.querySelectorAll('.categore-box');
let menuTopTitle = document.querySelectorAll('.menu-top__title')

menuCategoreTitle.forEach(function(item){
    item.onclick = function(){
        this.nextElementSibling.classList.add('categore-box__open')
        let text = this.textContent

        menuTopTitle.forEach(function(item){
            item.textContent = text

        } 
    )}
});

let innerList = document.querySelectorAll('.inner-list');


//клик по стрелочке 

arrowBtn.forEach(function(item){
    item.onclick = function(){
        categoreBox.forEach(function(item){
            if(item.classList.contains('categore-box__open')){
                item.classList.remove('categore-box__open')
            }

        })
        
    }
})


    
    

//inner-list открытие пункта меню 

let categoreBoxTitle = document.querySelectorAll('.categore-box__list-title')

categoreBoxTitle.forEach(function(item){
    item.onclick = function(){
        this.nextElementSibling.classList.toggle('inner-list__open')
            if(this.nextElementSibling.classList.contains('inner-list__open')){
                item.classList.add('categore-box__title-closed')
            }else{
                item.classList.remove('categore-box__title-closed')
            }


    }
    
})

//сворачивание меню


let crossBtn = document.querySelectorAll('.cross-btn')
let menu = document.querySelector('.menu')
let burgerBtn = document.querySelector('.bottom-burger')
let menuBottom = document.querySelector('.menu__bottom')

crossBtn.forEach(function(item){
item.onclick = function(){
   menu.classList.add('hidden')
   if(menu.classList.contains('hidden')){
    menuBottom.classList.add('menu__bottom-close')
    burgerBtn.classList.add('vesibl')
   }
}
})
burgerBtn.onclick = function(){
    menu.classList.remove('hidden')
    if( menu.classList.contains('hidden') != true){
        menuBottom.classList.remove('menu__bottom-close')
        burgerBtn.classList.remove('vesibl')
    }
    
}
