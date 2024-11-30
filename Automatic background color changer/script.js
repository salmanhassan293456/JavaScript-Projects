const button = document.getElementById('change-color-btn');

function getRandomColor(){
    const r = Math.floor (Math.random() * 256);
    const g = Math.floor (Math.random() * 256);
    const b = Math.floor (Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;

}

button.addEventListener('click', () => {

    const randomColor = getRandomColor();

    document.body.style.backgroundColor = randomColor;
});

  function autoClickButton(){

    setInterval(() => {

        button.click();
    }, 2000);

  }
  autoClickButton();