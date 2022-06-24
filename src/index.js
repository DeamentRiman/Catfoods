import './scss/styles.scss';
import {DISABLED_VALUES, SELECTED_VALUES, DISLAKED_FOOD, PRODUCT_BUY, PRODUCT_DESCRIPTION} from './js/variables.js';

let productItems = document.querySelectorAll('.product-item');
let productItemCards = document.querySelectorAll('.product-item__card');
let productDescription = document.querySelectorAll('.product-item__description');
let productQuestions = document.querySelectorAll('.product-item__question');
let productBuy = document.getElementsByClassName('product-item__buy');
productBuy = Array.from(productBuy);

function productBuyFunction(productBuy) {
    for (let i = 0; i < productBuy.length; i++) {
        productBuy[i].addEventListener('click', (evt)=> {
            productQuestions[i].textContent = SELECTED_VALUES[i];     
            productItems[i].classList.add('selected');
    });
}};

for (let i = 0; i < productItemCards.length; i++){
    if (productItems[i].classList.contains('disabled')) {
            productQuestions[i].textContent = DISABLED_VALUES[i];
        }

    if (productItems[i].classList.contains('selected')) {
            productQuestions[i].textContent = SELECTED_VALUES[i];
        };

    productItemCards[i].addEventListener('mouseover', (evt)=>{
        evt.preventDefault();
        if (productItems[i].classList.contains('selected') === true) {
            productItemCards[i].addEventListener('mouseout', (evt)=>{
                if (productItems[i].classList.contains('selected') === true) {
                evt.preventDefault();
                productDescription[i].textContent = DISLAKED_FOOD;
        } else {
            productItemCards[i].addEventListener('mouseout', ()=>{
            productDescription[i].textContent = PRODUCT_DESCRIPTION;
            });
            } 
        })}     
    });

    productItemCards[i].addEventListener('click', (evt) => {
        if (productItems[i].classList.contains('disabled')) {
            evt.preventDefault();
        }
        else if (productItems[i].classList.contains('selected')) {
            evt.preventDefault();
            productDescription[i].textContent = PRODUCT_DESCRIPTION;
            productQuestions[i].innerHTML = PRODUCT_BUY;
            productBuy = document.getElementsByClassName('product-item__buy');
            productBuy = Array.from(productBuy);
            productBuyFunction(productBuy);
            productItems[i].classList.remove('selected');

        } else {
            productItems[i].classList.add('selected');
            productQuestions[i].textContent = SELECTED_VALUES[i];       
        }
    });
    productBuyFunction(productBuy);
}

