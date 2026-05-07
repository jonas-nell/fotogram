const images = [
    "001.jpg",
    "002.jpg",
    "003.jpg",
    "004.jpg",
    "005.jpg",
    "006.jpg",
    "007.jpg",
    "008.jpg",
    "009.jpg",
    "010.jpg",
    "011.webp",
];


function render() {

    const gallery = document.getElementById("gallery");

    for (const [index, image] of images.entries()){
        gallery.innerHTML += /*html*/`
            <img src="./assets/img/${image}" alt="">
        `;
    }
}