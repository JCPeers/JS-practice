let content = document.getElementById("container");
console.log(content);
let button = document.getElementById("show-more");
console.log(button);

button.onclick = function () {
  if (content.className === "open") {
    content.className = "";
    button.innerHTML = "Show More";
  } else {
    content.className = "open";
    button.innerHTML = "Show Less";
  }
};
