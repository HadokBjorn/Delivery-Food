

function selectFood(selected){
    const anterior = document.querySelector('.food > .active');
    if (anterior !== null){
        anterior.classList.remove('active');
    }
    selected.classList.add('active');
}


function selectDrink(selected){
    const anterior = document.querySelector('.drinks > .active');
    if (anterior !== null){
        anterior.classList.remove('active');
    }
    selected.classList.add('active');
}


function selectDessert(selected){
    const anterior = document.querySelector('.dessert > .active');
    if (anterior !== null){
        anterior.classList.remove('active');
    }
    selected.classList.add('active');
}