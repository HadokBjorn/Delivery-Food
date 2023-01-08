const foods = document.querySelector('.food');
const drinks = document.querySelector('.drinks');
const desserts = document.querySelector('.dessert');

let foodContainer = [
    {
        img: './img/foods/hamburguer-sanduiche.jpg',
        name:'Hamburguer',
        description:'sanduiche artesanal e batata frita.',
        price: '19,90',
    },
    {
        img: './img/foods/pizza-calabresa.jpg',
        name:'Pizza de Calabresa',
        description:'Molho, queijo extra e calabresa.',
        price: '27,90',
    },
    {
        img: './img/foods/carbonara-food.jpg',
        name:'Carbonara',
        description:'Um pouco de bacon, um pouco de alho.',
        price: '16,90',
    },
    {
        img: './img/foods/nhoque-batata.png',
        name:'Nhoque de batata',
        description:'Nhoque ao molho vermelho.',
        price: '32,90',
    },
    {
        img: './img/foods/tacaca-food.jpg',
        name:'Tacacá',
        description:'Camarão, tucupi e jambú.',
        price: '24,00',
    },
    {
        img: './img/foods/moqueca-food.jpg',
        name:'Moqueca de peixe',
        description:'Peixe, caldo, legumes e temperos.',
        price: '44,50',
    },
    {
        img: './img/foods/sushi.jpg',
        name:'Barca de Sushi',
        description:'Barca com peças de sushi variados.',
        price: '50,00',
    },
    {
        img: './img/foods/churrasco.jpg',
        name:'Churrasco',
        description:'Sabor defumado e carne macia',
        price: '36,70',
    },
];

let drinkContainer = [
    {
        img: './img/drinks/coca-drink.jpg',
        name:'Coca-Cola',
        description:'Lata 350ml',
        price: '4,90',
    },
    {
        img: './img/drinks/pepsi-drink.jpg',
        name:'Pepsi',
        description:'Lata 350ml',
        price: '6,10',
    },
    {
        img: './img/drinks/refri-guarana.png',
        name:'Guaraná',
        description:'Lata 350ml',
        price: '4,90',
    },
    {
        img: './img/drinks/monster-drink.jpg',
        name:'Energético Monster',
        description:'Lata 450ml',
        price: '7,45',
    },
    {
        img: './img/drinks/grape-juice.jpg',
        name:'Suco de Uva',
        description:'450ml',
        price: '8,00',
    },
    {
        img: './img/drinks/green-juice.jpg',
        name:'Suco Verde',
        description:'350ml',
        price: '6,50',
    },
    {
        img: './img/drinks/manga-juice.jpg',
        name:'Suco de Manga',
        description:'350ml',
        price: '9,90',
    },
    {
        img: './img/drinks/orange-juice.jpg',
        name:'Suco de Laranja',
        description:'Lata 350ml',
        price: '5,25',
    },
];

let dessertContainer = [
    {
        img: './img/desserts/petigatou.png',
        name:'petit gateau',
        description:'Cholate 50% amargo.',
        price: '18,84',
    },
    {
        img: './img/desserts/rosquinha.jpg',
        name:'Donuts',
        description:'Os mais gostosos da cidade.',
        price: '16,70',
    },
    {
        img: './img/desserts/torta-caramelo.jpg',
        name:'Torta caramelo',
        description:'Coberta de caramelo suave.',
        price: '13,37',
    },
    {
        img: './img/desserts/torta-limao.jpg',
        name:'Torta de Limão',
        description:'Cremosa e azedinha.',
        price: '29,15',
    },
    {
        img: './img/desserts/milk-biscoito.jpg',
        name:'Milk shake',
        description:'Milk shake de biscoito.',
        price: '12,90',
    },
    {
        img: './img/desserts/sorvete-morango.jpg',
        name:'Sorvete',
        description:'Sorvete de morango.',
        price: '8,00',
    },
    {
        img: './img/desserts/churros.jpg',
        name:'Churros',
        description:'Gostosos e crocantes',
        price: '20,00',
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
        <div data-test="dish" class="card-food" alt="Prato Principal" onclick="selectFood(this)">
            <img src="${foodContainer[i].img}"/>
            <h1 data-test="item-name" class="name-food">${foodContainer[i].name}</h1>
            <p>${foodContainer[i].description}</p>
            <div class="value-icon">
                <p data-test="item-price" class="price-food">R$ ${foodContainer[i].price}</p>
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
            <div data-test="drink" class="card-food" alt="Prato Principal" onclick="selectDrink(this)">
                <img src="${drinkContainer[i].img}"/>
                <h1 data-test="item-name" class="name-food">${drinkContainer[i].name}</h1>
                <p>${drinkContainer[i].description}</p>
                <div class="value-icon">
                    <p data-test="item-price" class="price-food">R$ ${drinkContainer[i].price}</p>
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
            <div data-test="dessert" class="card-food" alt="Prato Principal" onclick="selectDessert(this)">
                <img src="${dessertContainer[i].img}"/>
                <h1 data-test="item-name" class="name-food">${dessertContainer[i].name}</h1>
                <p>${dessertContainer[i].description}</p>
                <div class="value-icon">
                    <p data-test="item-price" class="price-food">R$ ${dessertContainer[i].price}</p>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
            </div>
            `
            dessertCards += dessertCard;
        }
        desserts.innerHTML += dessertCards;
}
addCardDessert();



