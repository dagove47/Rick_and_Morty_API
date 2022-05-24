const charaterCardContainer = document.querySelector("[data-character-cards-container]");
const charaterCardTemplate = document.querySelector("[data-character-template]");
const searchInput = document.querySelector("[data-search]");

let characters = [];

searchInput.addEventListener("input", e => {

    const value = e.target.value.toLowerCase();

    characters.forEach(character => {
        const isVisible = character.name.toLowerCase().includes(value) || character.species.toLowerCase().includes(value) || character.gender.toLowerCase().includes(value) || character.location.toLowerCase().includes(value) || character.status.toLowerCase().includes(value);
        character.element.classList.toggle("hide", !isVisible);
    })

})


fetch('https://rickandmortyapi.com/api/character', {
    method: 'GET'
})
    .then(res => {
        return res.json();
    })
    .then(data => {
        const results = data.results;

        characters = results.map(character => {

            const card = charaterCardTemplate.content.cloneNode(true).children[0];

            const image = card.querySelector("[data-image]");
            const name = card.querySelector("[data-name]");
            const species = card.querySelector("[data-species]");
            const gender = card.querySelector("[data-gender]");
            const location = card.querySelector("[data-location]");
            const status = card.querySelector("[data-status]");

            image.src = character.image;
            name.textContent = character.name;
            species.textContent = character.species;
            gender.textContent = character.gender;
            location.textContent = character.location.name;
            status.textContent = character.status;

            charaterCardContainer.append(card);

            return { image: character.image, name: character.name, species: character.species, gender: character.gender, location: character.location.name, status: character.status, element: card };
        })

    })
    .catch(error => alert("ERROR"));
