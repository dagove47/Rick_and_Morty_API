const dataResponse = document.getElementById("testDavid");

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
        console.log(character.name);
        const info = `${character.name}<br>`;
        dataResponse.innerHTML += info;
    });
})
.catch(error => alert("ERROR"));









