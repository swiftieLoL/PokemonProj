const container =  document.querySelector( '.card-sheet')

loadPokemon ()

function loadPokemon( numPokemon = 151 ){
    let i = 1;
    while ( i < numPokemon) {
        fetchPokeData(i)
        i++
    }
};

function fetchPokeData(id){let url =  'https://pokeapi.co/api/v2/pokemon/' + id
    fetch(url)  
    .then(response => response.json())  
    .then(function(pokemon){
        console.log(pokemon)
    }
)
}
