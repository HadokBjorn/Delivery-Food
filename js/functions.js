const container = document.getElementById('container');
const cardOrder = document.getElementById('card-order');
const button = document.getElementById('button');
const textButton = document.getElementById('text-button');
let clientName = ``;
let adress = ``;
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
    clientName = prompt("Informe seu nome:");
    adress = prompt("Informe seu endereço:");

    cardOrder.classList.remove('hidden');
    container.classList.add('opaco');
    OrderDetails()

}
function priceProduct(){
    const cardsAtivos = document.querySelectorAll('.active .price-food');
        if (cardsAtivos.length === 3){
        priceFood = cardsAtivos[0].textContent.replace('R$ ', '').replace(',', '.');
        priceDrink = cardsAtivos[1].textContent.replace('R$ ', '').replace(',', '.');
        priceDessert = cardsAtivos[2].textContent.replace('R$ ', '').replace(',', '.');
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
                <div class="total">
                    <p>TOTAL</p>
                    <p>R$ ${total.replace('.',',')}</p>
                </div>
                <div class="adress">
                    <p>Nome: ${clientName}</p>
                    <p class="endereco" >Endereço: ${adress}</p>
                </div>
                <button data-test="confirm-order-btn" id="order" onclick="sendOrder()" >Tudo certo, pode pedir!</button>
                <button data-test="cancel-order-btn" id="cancel" onclick="reloadPage()" >Cancelar</button>
    `
}

function reloadPage(){
    window.location.reload(true);
}

function sendOrder(){
    let texto = `
    Olá, gostaria de fazer o pedido:\n
    - Prato: ${foodName}\n
    - Bebida: ${drinkName}\n
    - Sobremesa: ${dessertName}\n
    Total: R$ ${total.replace('.',',')}\n
    Nome: ${clientName}.\n
    Endereço: ${adress}.
    `;

    texto = window.encodeURIComponent(texto);
    window.open(`https://wa.me/551140028922?text=${texto}`);
}