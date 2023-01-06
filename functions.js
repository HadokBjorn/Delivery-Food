
let priceFood = 0;
let priceDrink = 0;
let priceDessert = 0;

function selectFood(selected){
    const anterior = document.querySelector('.food > .active');
    if (anterior !== null){
        anterior.classList.remove('active');
    }
    selected.classList.add('active');

    priceFood = document.querySelector('.food .active .price-food').textContent.replace('R$ ', '');
    priceFood = Number(priceFood.replace(',', '.'));
}


function selectDrink(selected){
    const anterior = document.querySelector('.drinks > .active');
    if (anterior !== null){
        anterior.classList.remove('active');
    }
    selected.classList.add('active');

    priceDrink = document.querySelector('.drinks .active .price-food').textContent.replace('R$ ', '');
    priceDrink = Number(priceDrink.replace(',', '.'));
}


function selectDessert(selected){
    const anterior = document.querySelector('.dessert > .active');
    if (anterior !== null){
        anterior.classList.remove('active');
    }
    selected.classList.add('active');

    priceDessert = document.querySelector('.active .price-food').textContent.replace('R$ ', '');
    priceDessert = Number(priceDessert.replace(',', '.'));
}