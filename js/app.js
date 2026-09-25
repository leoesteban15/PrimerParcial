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

// document.addEventListener("DOMContentLoaded", function() {
//     var loginForm = document.getElementById("loginForm");
//     if(loginForm){
//         console.log("2");
//         loginForm.addEventListener("submit", function(event) {
//             event.preventDefault();

//             var username = document.getElementById("username").value;
//             var password = document.getElementById("password").value;
//             console.log(2);

//             if(username && password){
//                 window.location.href = "./tienda.html";
//                 console.log(2);
//             }
//         });
//     }
// });