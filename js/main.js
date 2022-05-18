const dataResponse = document.getElementById("cards-list");

fetch('https://rickandmortyapi.com/api/character', {
    method: 'GET'
})
.then(res => {
    return res.json();
})
.then(data => {
    // const characters = data.results.map((character) => `${character.name}<br>`);
    // dataResponse.innerHTML = characters;
    let characters = data.results;
    characters.forEach(character => {
        const card =    `<div class="card bg-dark m-1" style="width: 18rem;">
                            <img src=${character.image} class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title fw-bold mb-3">${character.name}</h5>
                                <p class="card-text">Specie: ${character.species}</p>
                                <p class="card-text">Gender: ${character.gender}</p>
                                <p class="card-text">Location: ${character.location.name}</p>
                                <p class="card-text">Status: ${character.status}</p>
                            </div>
                        </div>`;
        dataResponse.innerHTML += card;
    });
})
.catch(error => alert("ERROR"));







