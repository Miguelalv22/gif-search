const contentSection = document.getElementById('content');
const apiUrl = 'api';

const getGif = async () => {
    const res = await axios.get(apiUrl);
    console.log(res.data.data[3].images.original.url)
    console.log(typeof res.data)
    makeGif(res.data.data)
}

const makeGif = (gifs) => {
    for (let gif of gifs) {
        const img = document.createElement('img')
        const div = document.createElement('div')
        img.src = gif.images.original.url
        div.append(img)
        contentSection.append(div)
    }
}

getGif()



// const domTitle = document.createElement('h2')

// domTitle.innerText = 'Titulo de DOM'
// contentSection.append(domTitle)

