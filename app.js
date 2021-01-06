const slideList = [
  {
    img: "images/img1.jpg",
    text: "Mead",
  },
  {
    img: "images/img2.jpg",
    text: "Mountains",
  },
  {
    img: "images/img3.jpg",
    text: "Rain",
  },
  {
    img: "images/img4.jpg",
    text: "Forest",
  },
  {
    img: "images/img5.jpg",
    text: "Glacier",
  },
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
};

const changeSlideToPrevious = () => {
  active--;
  if (active == -1) active = slideList.length - 1;
  img.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  changeDot();
};

const changeDot = () => {
  const activeDot = dots.findIndex((dot) => dot.classList.contains("active"));
  dots[activeDot].classList.remove("active");
  dots[active].classList.add("active");
};

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
};

function changeDotToClicked(e) {
  const num = changeIdToNum(this.id);
  active = num;
  const activeDot = dots.findIndex((dot) => dot.classList.contains("active"));
  dots[activeDot].classList.remove("active");
  img.src = slideList[num].img;
  h1.textContent = slideList[num].text;
  this.classList.add("active");
  clearInterval(changeInterval);
  changeInterval = setInterval(changeSlide, time);
}

changeIdToNum = (id) => {
  let num = 0;
  switch (id) {
    case "one":
      num = 1;
      break;
    case "two":
      num = 2;
      break;
    case "three":
      num = 3;
      break;
    case "four":
      num = 4;
      break;
    case "five":
      num = 5;
      break;
  }
  return num - 1;
};

let changeInterval = setInterval(changeSlide, time);
for (dot of dots) {
  dot.addEventListener("click", changeDotToClicked);
}
window.addEventListener("keydown", keyChangeSlide);
