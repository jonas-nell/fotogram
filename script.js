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
const counterRef = document.getElementById("img-counter");

let currentIndex = 0;

function render() {

    const gallery = document.getElementById("gallery");

    for (const [index, image] of images.entries()){
        gallery.innerHTML += /*html*/`
            <img onclick="openDialog(${index})" onkeydown="if(event.key === 'Enter') openDialog(${index})" src="./assets/img/${image}" tabindex=0 alt="">
        `; 
    }
}

function openDialog(index, image){
    const clickedImg = images[index];
    dialogImg.src =`./assets/img/${clickedImg}`;
    dialogTitle.textContent = clickedImg;
    currentIndex = index
    updateDialogContent();
    document.body.style.overflowY = "hidden";
    dialogRef.showModal();

}

function closeDialog(){
    document.body.style.overflowY = "auto";
    dialogRef.close();
}

function updateDialogContent(){
    dialogImg.src = "";
    dialogTitle.textContent = "";
    counterRef.textContent = "";
    const imageName = images[currentIndex];
    dialogImg.src = `./assets/img/${imageName}`;
    dialogTitle.textContent = imageName;
    counterRef.textContent = `${currentIndex +1} / ${images.length}`;
}

function changeImage(direction){
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length -1;
    } else if (currentIndex >= images.length){
        currentIndex = 0;
    }
    
    updateDialogContent();
}