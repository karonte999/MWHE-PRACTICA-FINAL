//GALERÍA


document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.gallery-item');
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    items.forEach(item => {
        // Genera coordenadas aleatorias para posicionar los elementos
        const randomX = Math.random() * (containerWidth - 300); // Evita que salga del viewport
        const randomY = Math.random() * (containerHeight - 200);

        item.style.left = `${randomX}px`;
        item.style.top = `${randomY}px`;
    });
});





// ACCORDION FAQ






