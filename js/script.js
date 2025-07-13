const contents = document.querySelectorAll(".contents");
const filterContent = document.querySelector(".filter_content");
const filterBtn = document.querySelectorAll(".filter_btn");
const filterBtnContainer = document.querySelector(".filter-btn-container");

console.log(contents); //nodelist contents
console.log(filterContent);
console.log(filterBtn); //nodelist btn
console.log(filterBtnContainer);

filterBtnContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".filter_btn");
  if (!clicked) return;
  //btn active remove class
  filterBtn.forEach((btn) => btn.classList.remove("active_btn"));
  clicked.classList.add("active_btn");

  const clickedData = clicked.dataset.filter;

  //image show hide
  contents.forEach((content) => content.classList.remove("content_active"));

  //if all is clicked
  if (clickedData === "all") {
    contents.forEach((content) => content.classList.add("content_active"));
  } else {
    //if clicked btn dataset is equal to image dataset
    contents.forEach((content) => {
      if (content.dataset.category === clickedData) {
        content.classList.add("content_active");
      }
    });
  }
});
