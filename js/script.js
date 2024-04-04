const input = document.querySelector(".input__field");
const icono = document.querySelector(".input__icon");

icono.addEventListener( "click", (e) => {
    e.preventDefault( );
    const isPassword = input.getAttribute( "type" ) === "password";

    icono.setAttribute(
        "src",
        isPassword ? "./assets/eye-off.svg" : "./assets/eye.svg"
    );

    input.setAttribute(
        "type", 
        isPassword ? "text" : "password"
    )
});