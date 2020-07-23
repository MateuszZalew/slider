const slideList = [{
        img: "images/img1.jpg",
        text: "First text"
    },
    {
        img: "images/img2.jpg",
        text: "Second text"
    },
    {
        img: "images/img3.jpg",
        text: "Third text"
    }
];

const img = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
const dots = [...document.querySelectorAll("span")];
let time = 2000;
let active = 0;

const changeSlide = () => {
    active++;
    if (active == slideList.length) active = 0;
    img.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
}

const changeSlideToPrevious = () => {
    active--;
    if (active == -1) active = slideList.length - 1;
    img.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
}

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains("active"));
    dots[activeDot].classList.remove("active");
    dots[active].classList.add("active");
}

const keyChangeSlide = (e) => {
    if (e.keyCode == 37) {
        clearInterval(changeInterval);
        changeSlideToPrevious();
        changeInterval = setInterval(changeSlide, time);
    } else if (e.keyCode == 39) {
        clearInterval(changeInterval);
        changeSlide();
        changeInterval = setInterval(changeSlide, time);
    }
}

let changeInterval = setInterval(changeSlide, time);
window.addEventListener('keydown', keyChangeSlide);