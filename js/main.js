const foods = document.querySelector('.food');
const drinks = document.querySelector('.drinks');
const desserts = document.querySelector('.dessert');

let foodContainer = [
    {
        img: './img/frango_yin_yang.png',
        name:'Frango Yin Yang',
        description:'Um pouco de batata, um pouco de salada',
        price: '14,90',
    },
    {
        img: './img/frango_yin_yang.png',
        name:'Frango Yin Yang',
        description:'Um pouco de batata, um pouco de salada',
        price: '24,90',
    },
    {
        img: './img/frango_yin_yang.png',
        name:'Frango Yin Yang',
        description:'Um pouco de batata, um pouco de salada',
        price: '14,90',
    },
    {
        img: './img/frango_yin_yang.png',
        name:'Frango Yin Yang',
        description:'Um pouco de batata, um pouco de salada',
        price: '44,90',
    },
    {
        img: './img/frango_yin_yang.png',
        name:'Frango Yin Yang',
        description:'Um pouco de batata, um pouco de salada',
        price: '34,90',
    },
    {
        img: './img/frango_yin_yang.png',
        name:'Frango Yin Yang',
        description:'Um pouco de batata, um pouco de salada',
        price: '16,90',
    },
    {
        img: './img/frango_yin_yang.png',
        name:'Frango Yin Yang',
        description:'Um pouco de batata, um pouco de salada',
        price: '22,90',
    },
    {
        img: './img/frango_yin_yang.png',
        name:'Frango Yin Yang',
        description:'Um pouco de batata, um pouco de salada',
        price: '24,90',
    },
];

let drinkContainer = [
    {
        img: './img/coca-cola.png',
        name:'Coquinha gelada',
        description:'Lata 350ml',
        price: '4,90',
    },
    {
        img: './img/coca-cola.png',
        name:'Coquinha gelada',
        description:'Lata 350ml',
        price: '4,90',
    },
    {
        img: './img/coca-cola.png',
        name:'Coquinha gelada',
        description:'Lata 350ml',
        price: '4,90',
    },
    {
        img: './img/coca-cola.png',
        name:'Coquinha gelada',
        description:'Lata 350ml',
        price: '4,90',
    },
    {
        img: './img/coca-cola.png',
        name:'Coquinha gelada',
        description:'Lata 350ml',
        price: '4,90',
    },
    {
        img: './img/coca-cola.png',
        name:'Coquinha gelada',
        description:'Lata 350ml',
        price: '4,90',
    },
    {
        img: './img/coca-cola.png',
        name:'Coquinha gelada',
        description:'Lata 350ml',
        price: '4,90',
    },
    {
        img: './img/coca-cola.png',
        name:'Coquinha gelada',
        description:'Lata 350ml',
        price: '4,90',
    },
];

let dessertContainer = [
    {
        img: './img/pudim.png',
        name:'Pudim',
        description:'Apenas pudim',
        price: '7,90',
    },
    {
        img: './img/pudim.png',
        name:'Pudim',
        description:'Apenas pudim',
        price: '4,90',
    },
    {
        img: './img/pudim.png',
        name:'Pudim',
        description:'Apenas pudim',
        price: '3,90',
    },
    {
        img: './img/pudim.png',
        name:'Pudim',
        description:'Apenas pudim',
        price: '2,90',
    },
    {
        img: './img/pudim.png',
        name:'Pudim',
        description:'Apenas pudim',
        price: '9,90',
    },
    {
        img: './img/pudim.png',
        name:'Pudim',
        description:'Apenas pudim',
        price: '13,90',
    },
    {
        img: './img/pudim.png',
        name:'Pudim',
        description:'Apenas pudim',
        price: '17,90',
    },
    {
        img: './img/pudim.png',
        name:'Pudim',
        description:'Apenas pudim',
        price: '5,90',
    },
];

function addCardFood(){
let foodCards=``;
    for (let i = 0; i < foodContainer.length; i++) {
        let foodCard = `
        <div class="card-food" alt="Prato Principal" onclick="selectFood(this)">
            <img src="${foodContainer[i].img}"/>
            <h1 class="name-food">${foodContainer[i].name}</h1>
            <p>${foodContainer[i].description}</p>
            <div class="value-icon">
                <p class="price-food">R$ ${foodContainer[i].price}</p>
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>
        </div>
        `
        foodCards += foodCard;
    }
    foods.innerHTML += foodCards;
}
addCardFood();


function addCardDrink(){
    let drinkCards=``;
        for (let i = 0; i < drinkContainer.length; i++) {
            let drinkCard = `
            <div class="card-food" alt="Prato Principal" onclick="selectDrink(this)">
                <img src="${drinkContainer[i].img}"/>
                <h1 class="name-food">${drinkContainer[i].name}</h1>
                <p>${drinkContainer[i].description}</p>
                <div class="value-icon">
                    <p class="price-food">R$ ${drinkContainer[i].price}</p>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
            </div>
            `
            drinkCards += drinkCard;
        }
        drinks.innerHTML += drinkCards;
}
addCardDrink();


function addCardDessert(){
    let dessertCards=``;
        for (let i = 0; i < dessertContainer.length; i++) {
            let dessertCard = `
            <div class="card-food" alt="Prato Principal" onclick="selectDessert(this)">
                <img src="${dessertContainer[i].img}"/>
                <h1 class="name-food">${dessertContainer[i].name}</h1>
                <p>${dessertContainer[i].description}</p>
                <div class="value-icon">
                    <p class="price-food">R$ ${dessertContainer[i].price}</p>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
            </div>
            `
            dessertCards += dessertCard;
        }
        desserts.innerHTML += dessertCards;
}
addCardDessert();