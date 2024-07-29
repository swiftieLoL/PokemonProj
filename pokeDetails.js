// Gets ID from Href parameter //
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('pokeid')
const flexLeft = document.querySelector('.flex-content')
const flexRight = document.querySelector('.flex-item-right')
const pokeMoreInfo = document.querySelector('.flex-container')


fetchErrorHandler(id);

function fetchPokeData(id) {
    let url = 'https://pokeapi.co/api/v2/pokemon/' + id
    fetch(url)
        .then(response => response.json())
        .then(function (pokemon) {
            console.log(pokemon);
            renderPokeDeets(pokemon);
        }
        )
};

function fetchErrorHandler(id) {
    if (id == null)
        console.log("no id found");
    else
        fetchPokeData(id);
};

function renderPokeDeets(pokemon) {

    let pokeImg = document.createElement("img");
    pokeImg.alt = "pokemon image";
    pokeImg.src = pokemon.sprites.front_default;
    pokeImg.classList.add("poke-img");


    let pokeName = document.createElement('h1');
    pokeName.innerHTML = "#" + pokemon.id + "   " + capitalizeFirstLetter(pokemon.name);
    pokeName.classList.add("text-big");

    let pokeMainDeets = document.createElement('p');

    let pokeHeight = document.createElement('div');
    pokeHeight.innerHTML = "Height: " + pokemon.height;
    pokeHeight.classList.add("text-sub");

    let pokeWeight = document.createElement('div');
    pokeWeight.innerHTML = "Weight: " + pokemon.weight;
    pokeWeight.classList.add("text-sub");

    let moreContentContainer = document.createElement('div');
    moreContentContainer.classList.add("more-content");

    let pokeStats = document.createElement('ul');

    flexRight.append(pokeImg);
    flexLeft.append(pokeName);
    flexLeft.append(pokeMainDeets);
    pokeMainDeets.append(pokeWeight);
    pokeMainDeets.append(pokeHeight);
    pokeMoreInfo.append(moreContentContainer);
    appendMoreContent("STATS", moreContentContainer, "text-sub");

    appendStatsList(pokemon.stats, pokeStats);
    moreContentContainer.append(pokeStats);




};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function appendMoreContent(value, element, classString) {
    let moreContent = document.createElement('div');
    moreContent.innerHTML = value;
    if (classString == "") {

    }
    else {
        moreContent.classList.add(classString);
    }
    element.append(moreContent);

}

function appendStatsList(stats, ul) {
    stats.forEach(function (stat) {
        let statLi = document.createElement('li');
        statLi.innerText = stat['stat']['name'] + ": " + stat.base_stat;
        console.log(statLi)
        ul.append(statLi)
    }
    )
}