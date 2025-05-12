let apiUrl = 'api'
const input = document.getElementById('gif-search');
let counter = 0;

const getGif = async () => {
    const res = await axios.get(apiUrl);
    makeGif(res.data.data);
}

const makeGif = (gifs) => {
    const divColumn1 = document.getElementById('column-one');
    const divColumn2 = document.getElementById('column-two');
    const divColumn3 = document.getElementById('column-three');

    counter = 0;
    while (divColumn1.firstChild) {
        divColumn1.removeChild(divColumn1.firstChild);
        divColumn2.removeChild(divColumn2.firstChild);
        divColumn3.removeChild(divColumn3.firstChild);
    }
    for (let gif of gifs) {
        counter += 1;
        const img = document.createElement('img')
        const divImage = document.createElement('div')
        img.src = gif.images.original.url
        img.classList.add("gif-styles")

        if (counter <= 6) {
            divImage.append(img)
            divColumn1.append(divImage)
        } else if (counter <= 12) {
            divImage.append(img)
            divColumn2.append(divImage)
        } else if (counter <= 18) {
            divImage.append(img)
            divImage.classList.add("col-md-6", "col-lg-12")
            divColumn3.append(divImage)
        }
    }
}

input.addEventListener('input', (e) => {
    if (input.value.length > 2) {
        apiUrl = 'api_search'
        getGif();

    } else if (input.value.length == 0) {
        apiUrl = 'api'
        getGif();
    }
})

getGif();