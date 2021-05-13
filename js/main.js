document.addEventListener('DOMContentLoaded', function () {
    eventListeners();
});
window.addEventListener("resize", parametrosIniciales);
function eventListeners(){
    const mobileMenu = document.querySelector('.menu-movil');
    mobileMenu.addEventListener('click', navegacionResponsive);

}
function navegacionResponsive() {
    const mostrarNavegacion = document.querySelector('.navegacion-principal');
    
    mostrarNavegacion.classList.toggle('mostrar');
}
function parametrosIniciales() {
    const mostrarNavegacion = document.querySelector('.navegacion-principal');
    mostrarNavegacion.classList.remove('mostrar');
}