import './scss/styles.scss';

let productItems = document.querySelectorAll('.product-item');
let productItemCards = document.querySelectorAll('.product-item__card');
let productDescription = document.querySelectorAll('.product-item__description');
let productQuestions = document.querySelectorAll('.product-item__question');
let productBuy = document.querySelectorAll('.product-item__buy');

const DISABLED_VALUES = {
    0: 'Печалька, с фуа-гра закончился.',
    1: 'Печалька, с рыбой закончился.',
    2: 'Печалька, с курой закончился.',
}
const SELECTED_VALUES= {
    0: 'Печень утки разварная с артишоками.',
    1: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    2: 'Филе из цыплят с трюфелями в бульоне.',
}
const DISLAKED_FOOD = 'Котэ не одобряет?';
const PRODUCT_BUY = '<p class="product-item__question">Чего сидишь? Порадуй котэ, <a href="#" class="product-item__buy">купи.</a></p>';
const PRODUCT_DESCRIPTION = productDescription[0].textContent;

for (let i = 0; i < productItemCards.length; i++){
    if (productItems[i].classList.contains('disabled')) {
            productQuestions[i].textContent = DISABLED_VALUES[i];
        }

    if (productItems[i].classList.contains('selected')) {
            productQuestions[i].textContent = SELECTED_VALUES[i];
        };

    productItemCards[i].addEventListener('mouseover', (evt)=>{
        evt.preventDefault();
        if (productItems[i].classList.contains('selected')) {
            productItemCards[i].addEventListener('mouseout', (evt)=>{
                evt.preventDefault();
                productDescription[i].textContent = DISLAKED_FOOD;
            })
        };
    });

    productItemCards[i].addEventListener('click', (evt) => {
        if (productItems[i].classList.contains('disabled')) {
            evt.preventDefault();
        }
        else if (productItems[i].classList.contains('selected')) {
            evt.preventDefault();
            productItems[i].classList.remove('selected');
            productDescription[i].textContent = PRODUCT_DESCRIPTION;
            productQuestions[i].innerHTML = PRODUCT_BUY;
        } else {
            productItems[i].classList.add('selected');
            productQuestions[i].textContent = SELECTED_VALUES[i];       
        }
    });
    productBuy[i].addEventListener('click', (evt)=> {
        evt.preventDefault();
        productQuestions[i].textContent = SELECTED_VALUES[i];     
        productItems[i].classList.add('selected');
    });
}