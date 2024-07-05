let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", addTask);
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  let inputValue = input.value;
  if (inputValue === "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");
    li.innerText = inputValue;
    ul.appendChild(li);
    input.value = "";

    let circleImg = document.createElement("img");
    let crossImg = document.createElement("img");

    circleImg.src = `images/circle.png`;
    circleImg.classList.add("empty-circle");
    circleImg.style.cursor = "pointer";
    li.prepend(circleImg);

    crossImg.src = `images/cross.png`;
    crossImg.classList.add("cross");
    crossImg.style.cursor = "pointer";
    li.append(crossImg);

  
    circleImg.addEventListener("click", function () {
      if (!li.classList.contains("line-through")) {
        li.classList.add("line-through");
        li.style.textDecoration = `line-through`
        circleImg.src = `images/check.png.png`;
        circleImg.classList.remove("empty-circle");
        circleImg.classList.add("circle");
      } else {
        li.classList.remove("line-through");
        li.style.textDecoration = `none`;

        circleImg.src = `images/circle.png`;
        circleImg.classList.remove("circle");
        circleImg.classList.add("empty-circle");
      }
    });


    crossImg.addEventListener("click", function () {
      li.remove();
    });
  }
}
