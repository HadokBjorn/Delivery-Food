const main = document.querySelector('.main');
const cardOrder = document.getElementById('card-order');
const button = document.getElementById('button');
const textButton = document.getElementById('text-button');
let foodName = ``;
let drinkName = ``;
let dessertName = ``;
let priceFood = 0;
let priceDrink = 0;
let priceDessert = 0;
let total;


function verifySection(){
    const actived = document.querySelectorAll('.active').length;
    if (actived === 3){
        button.disabled = false;
        textButton.innerHTML = 'Fechar Pedido';
        priceProduct();
        OrderDetails()
    }
}

function selectFood(selected){
    const anterior = document.querySelector('.food > .active');
    if (anterior !== null){
        anterior.classList.remove('active');
    }
    selected.classList.add('active');

    verifySection();
}


function selectDrink(selected){
    const anterior = document.querySelector('.drinks > .active');
    if (anterior !== null){
        anterior.classList.remove('active');
    }
    selected.classList.add('active');

    verifySection()
}


function selectDessert(selected){
    const anterior = document.querySelector('.dessert > .active');
    if (anterior !== null){
        anterior.classList.remove('active');
    }
    selected.classList.add('active');

    verifySection()
}

function clickButton(){
    cardOrder.classList.remove('hidden');
    main.classList.add('opaco');
}
function priceProduct(){
    const cardsAtivos = document.querySelectorAll('.active .price-food');
        if (cardsAtivos.length === 3){
        priceFood = cardsAtivos[0].textContent.replace('R$ ', '').replace(',', '.');
        priceDrink = cardsAtivos[1].textContent.replace('R$ ', '').replace(',', '.');
        priceDessert = cardsAtivos[2].textContent.replace('R$ ', '').replace(',', '.');
        console.log(priceFood,priceDrink,priceDessert);
        total = Number(priceFood) + Number(priceDrink) + Number(priceDessert);
        total = total.toFixed(2);
        }
}

function OrderDetails(){
    const cards = document.querySelectorAll('.active .name-food');

    foodName = cards[0].textContent;
    drinkName = cards[1].textContent;
    dessertName = cards[2].textContent;

    cardOrder.innerHTML = `
    <p id="titulo">Confirme seu pedido</p>
                <div>
                    <p>${foodName}</p>
                    <p>${priceFood.replace('.',',')}</p>
                </div>
                <div>
                    <p>${drinkName}</p>
                    <p>${priceDrink.replace('.',',')}</p>
                </div>
                <div>
                    <p>${dessertName}</p>
                    <p>${priceDessert.replace('.',',')}</p>
                </div>
                <div>
                    <p>total</p>
                    <p>R$ ${total.replace('.',',')}</p>
                </div>
                <button id="order">Tudo certo, pode pedir!</button>
                <button id="cancel" onclick="reloadPage()" >Cancelar</button>
    `
}

function reloadPage(){
    window.location.reload(true);
}