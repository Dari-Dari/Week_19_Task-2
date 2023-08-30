const container = document.getElementById("container");

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((post) => {
        let postElement = document.createElement("h3");
        postElement.style.color = "red";
        let textElement = document.createElement("p");
        textElement.style.marginBottom = "3%";

        postElement.textContent = post.title;
        textElement.textContent = post.body;

        container.appendChild(postElement);
        container.appendChild(textElement);
      });
    })
    .catch((error) => console.error("Ошибка:", error));
});
