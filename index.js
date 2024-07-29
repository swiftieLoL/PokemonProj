const listContainer = document.querySelector('.pokemon-container')

loadPokemon();


function loadPokemon(numPokemon = 151) {
    let i = 1;
    while (i < numPokemon) {
        fetchPokeData(i)
        i++
    }
};

function fetchPokeData(id) {
    let url = 'https://pokeapi.co/api/v2/pokemon/' + id
    fetch(url)
        .then(response => response.json())
        .then(function (pokemon) {
            renderPokeDeets(pokemon)
        }
        )
}


function renderPokeDeets(pokemon) {
    let pokemonContainer = document.createElement("div");
    pokemonContainer.classList.add('pokemon-card')

    let pokeId = document.createElement('h2');
    pokeId.innerText = "#" + pokemon.id;

    let pokeName = document.createElement('a');
    pokeName.setAttribute("href", "pokeDetails.HTML?pokeId=" + pokemon.id);
    pokeName.innerHTML = capitalizeFirstLetter(pokemon.name);

    let pokeImg = document.createElement("img");
    pokeImg.alt = "pokemon image";
    pokeImg.src = pokemon.sprites.front_default;

    let pokeRoar = document.createElement("button");
    pokeRoar.innerHTML = "Roar!";
    //pokeRoar.addEventListener("click", playAudio());
    pokeRoar.classList.add('button')


    let pokeTypes = document.createElement('ul');
    createTypes(pokemon.types, pokeTypes);

    pokemonContainer.append(pokeImg);
    pokemonContainer.append(pokeId);
    pokemonContainer.append(pokeName);
    pokemonContainer.append(pokeTypes);
    pokemonContainer.append(pokeRoar);
    listContainer.appendChild(pokemonContainer);

}

function playAudio() {
    console.log("music");
    /* commented out as not a requirement 
    audio.src = 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/35.ogg';
    audio.play();
    */
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function createTypes(types, ul) {
    types.forEach(function (type) {
        let typeLi = document.createElement('li');
        typeLi.innerText = type['type']['name'];
        ul.append(typeLi)
    }
    )
}