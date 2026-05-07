const images = [
    "001.jpg",
    "002.jpg",
    "kek-wiggle.gif",
    "003.jpg",
    "004.jpg",
    "pog-o.gif",
    "005.jpg",
    "006.jpg",
    "007.jpg",
    "pc_kid.gif",
    "008.jpg",
    "009.jpg",
    "010.jpg",
    "011.webp"
];

const dialogRef = document.getElementById("img-pop-up");
const dialogImg = document.getElementById("dialog-img");
const dialogTitle = document.getElementById("img-title");


function render() {

    const gallery = document.getElementById("gallery");

    for (const [index, image] of images.entries()){
        gallery.innerHTML += /*html*/`
            <img onclick="openDialog(${index})" src="./assets/img/${image}" alt="">
        `;
    }
}

function openDialog(index, image){
    const clickedImg = images[index];
    dialogImg.src =`./assets/img/${clickedImg}`;
    dialogTitle.innerHTML = clickedImg;
    dialogRef.showModal();

}

function closeDialog(){
    dialogRef.close();
}