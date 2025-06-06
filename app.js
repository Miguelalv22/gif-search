let apiUrl = process.env.API_KEY
const input = document.getElementById('gif-search');

const getGif = async () => {
    try {
        const res = await axios.get(apiUrl);
        makeGif(res.data.data);
    } catch (e) {
        console.log("ERROR", e);
    }
}

const makeGif = (gifs) => {
    const gifArea = document.getElementById('gif-area');

    while (gifArea.firstChild) {
        gifArea.removeChild(gifArea.firstChild);
    }

    for (let gif of gifs) {
        const img = document.createElement('img')
        const divImage = document.createElement('div')
        img.src = gif.images.original.url
        img.classList.add("gif-styles", "grid-item")
        divImage.append(img)
        gifArea.append(divImage)
    }
}

input.addEventListener('input', (e) => {
    if (input.value.length > 2) {
        apiUrl = process.env.API_SEARCH + `${input.value}&limit=18&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
        getGif();

    } else if (input.value.length == 0) {
        apiUrl = process.env.API_KEY
        getGif();
    }
})

getGif();