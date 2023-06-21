const SecondText = document.querySelector(".second-text");
const TextFunction = () => {
  setTimeout(() => {
    SecondText.innerHTML = "Tukang Ngoding";
  }, 0);
  setTimeout(() => {
    SecondText.innerHTML = "Nyari Duit";
  }, 4000);
  setTimeout(() => {
    SecondText.innerHTML = "Cuma Sekedar Hobi";
  }, 8000);
};
TextFunction();
serInterval(TextFunction, 12000);
