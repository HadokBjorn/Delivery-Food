const button = document.getElementById('button');
let priceFood = 0;
let priceDrink = 0;
let priceDessert = 0;

function verifySection(){
    if (priceFood > 0 && priceDrink > 0 && priceDessert > 0){
        button.classList.add('button-active');
    }
}

function selectFood(selected){
    const anterior = document.querySelector('.food > .active');
    if (anterior !== null){
        anterior.classList.remove('active');
    }
    selected.classList.add('active');

    priceFood = document.querySelector('.food .active .price-food').textContent.replace('R$ ', '');
    priceFood = Number(priceFood.replace(',', '.'));

    verifySection()
}


function selectDrink(selected){
    const anterior = document.querySelector('.drinks > .active');
    if (anterior !== null){
        anterior.classList.remove('active');
    }
    selected.classList.add('active');

    priceDrink = document.querySelector('.drinks .active .price-food').textContent.replace('R$ ', '');
    priceDrink = Number(priceDrink.replace(',', '.'));

    verifySection()
}


function selectDessert(selected){
    const anterior = document.querySelector('.dessert > .active');
    if (anterior !== null){
        anterior.classList.remove('active');
    }
    selected.classList.add('active');

    priceDessert = document.querySelector('.active .price-food').textContent.replace('R$ ', '');
    priceDessert = Number(priceDessert.replace(',', '.'));

    verifySection()
}