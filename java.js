
const titulo1 = document.querySelector('.titulo1');
titulo1.addEventListener('mouseover', () => {
    titulo1.style.backgroundColor = '#0091f1'; 
});
titulo1.addEventListener('mouseout', () => {
    titulo1.style.backgroundColor = ''; 
});

const imagenes = document.querySelectorAll('img');
imagenes.forEach(imagen => {
    imagen.addEventListener('mouseover', () => {
        imagen.style.transform = 'scale(1.1)'; 
        imagen.style.transition = 'transform 0.3s ease'; 
    });
    imagen.addEventListener('mouseout', () => {
        imagen.style.transform = ''; 
    });
});

const pie = document.querySelector('footer h5');
pie.addEventListener('click', () => {
    pie.style.color = pie.style.color === 'red' ? '#ff6347' : 'red'; 
});

const secciones = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    secciones.forEach(seccion => {
        const seccionTop = seccion.getBoundingClientRect().top;
        const ventanaAltura = window.innerHeight;
        if (seccionTop < ventanaAltura - 100) {
            seccion.classList.add('visible'); 
        } else {
            seccion.classList.remove('visible'); 
        }
    });
});

const imagenesConPopUp = document.querySelectorAll('.foto, .perrita, .tanjiro, .volefu, .lol, .programador');
imagenesConPopUp.forEach(imagen => {
    imagen.addEventListener('click', () => {
        const mensaje = imagen.alt ? imagen.alt : 'Sin información adicional';
        alert(mensaje); 
    });
});

const mailLink = document.querySelector('footer a');
mailLink.addEventListener('click', (event) => {
    event.preventDefault();
    alert('GRACIAS POR CONTACTARME');
    
});
