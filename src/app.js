let apiUrl = 'api_general'
const contentSection = document.getElementById('content');
const input = document.getElementById('gif-search');

const getGif = async () => {
    const res = await axios.get(apiUrl);
    makeGif(res.data.data)
}

const makeGif = (gifs) => {
    while (contentSection.firstChild) {
        contentSection.removeChild(contentSection.firstChild);
    }
    for (let gif of gifs) {
        const img = document.createElement('img')
        img
        const div = document.createElement('div')
        img.src = gif.images.original.url
        div.append(img)
        contentSection.append(div)
    }
}

input.addEventListener('input', (e) => {
    if (input.value.length > 2) {
        apiUrl = 'api_search'
        getGif();

    } else if (input.value.length == 0) {
        apiUrl = 'api_general'
        getGif();
    }
})

getGif();