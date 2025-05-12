let word;
const cache = {}; // ✅ Persistent across function calls

const handleInputButton = () => {
    const input = document.getElementById("apiUrl").value;

    if (cache[input]) {
        console.log(cache[input], 'from cache');
        return;
    }

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            cache[input] = data; // ✅ Store in cache
            console.log(data, 'from fetch');
        });
};

const inputButton = document.getElementById("fetchData");
inputButton.addEventListener("click", handleInputButton);
