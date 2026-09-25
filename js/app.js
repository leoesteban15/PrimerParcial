document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.getElementById("login-form");
    if(loginForm){
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();

            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            if (username && password) {
                window.location.href = "tienda.html";
            }
        });
    }
});

async function getData() {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products"
    );

    if (!response.ok) {
      throw new Error(`Estado de la respuesta: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);

    const container = document.querySelector("#containter-clothes");

    result.forEach(clothe => {
      const clotheCard = document.createElement("div");
      clotheCard.classList.add("clotheCard");

      clotheCard.innerHTML = `
        <h3>${clothe.title}</h3>
        <img src="${clothe.image}" alt="${clothe.title}">
      `;

      container.appendChild(clotheCard);
    });

  } catch (error) {
    console.error(error.message);
  }
}

getData();