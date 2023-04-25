const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset${offset}&limit=${limit}`

function convertPokemonToLi(pokemon)
{
    return `
    <li class="pokemon">
    <span class="number">#001</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
        <ol class="types">
            <li class="type">grass</li>
            <li class="type">poison</li>
        </ol>
        
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
        </div>
    alt="${pokemon.name}">
</li>
`
}

const pokemonList =(document.getElementById("Teste")) 
//console.log(document.getElementById("Teste"))
//console.log(pokemonList)
//pokemonList.innerHTML = "<li>Teste<li/>"

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {
        for(let i=0; i < pokemons.length; i++)
        {
       
            const pokemon = pokemons[i]
            console.log(pokemon)
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
            console.log(pokemon)
        }
    })
    .catch((error) => error)
    

