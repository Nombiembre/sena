var UsarClave = document.getElementById('Usar_Clave');
const myContenedor = document.getElementById('claveToggle');

UsarClave.addEventListener('click', () => {
  myContenedor.classList.toggle('visible');
});

