
const badge = document.querySelector('.nav__badge'),
    open = document.querySelector('#cart'),
    close = document.querySelector('.cart__close'),
    products = document.querySelectorAll('goods__item'),
    goodsBtn = document.querySelectorAll('goods__btn'),
    confirm = document.querySelector('.confirm'),
    totalCost = document.querySelector('.cart__total > span'),
    titles = document.querySelectorAll('.goods__title'),
    cartWrapper = document.querySelector('.cart__wrapper'),
    cart = document.querySelector('.cart');

function openCart(){
    cart.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeCart(){
    cart.style.display = 'none';
    document.body.style.overflow = '';
}

open.addEventListener('click', openCart);
close.addEventListener('click', closeCart);

goodsBtn.forEach(function(btn, i) {
    btn.addEventListener('click', () => {
    let item = products[i].cloneNode(true),
    trigger = item.querySelector('button'), 
    removeBtn = document.createElement('div'), 
    empty = cartWrapper.querySelector('.empty');
    
    trigger.remove();
    
    removeBtn.classList.add('goods	item-remove');
    removeBtn.innerHTML = '&times'; 
    item.appendChild(removeBtn);
    cartWrapper.appendChild(item); 
    
    if (empty) {
    empty.remove();
    }
    });
});
    
    



// goodsBtn.forEach(function(btn, i) {
//     btn.addEventListener('click', () => {
//         let item = products[i].cloneNode(true),
//         trigger = item.querySelector('button'),
//         removeBtn = document.createElement('div'),
//         empty = cartWrapper.querySelector('.empty');

//         trigger.remove();

//         removeBtn.classList.add('good__item-remove');
//         removeBtn.innerHTML = '&times';
//         item.appendChild(removeBtn);

//         cartWrapper.appendChild(item);
//         if (empty) {
//             empty.remove();
//         }
//     });
// })