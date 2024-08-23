

$(document).ready(() => {
    const myCarousel = document.querySelector('#carouselExampleCaptions');
    const carousel = new bootstrap.Carousel(myCarousel, {
        interval: 1000
    });




    $(() => {
        $('[data-bs-toggle="tooltip"]').tooltip();
    });


    $(() => {
        $('[data-bs-toggle="popover"]').popover();
    });

    let contador = 0;

    setInterval(() => {
        if(contador < 100) {
            contador = contador + 1;
        } else {
            contador = 0;
        }
        const barra = document.querySelector('#progressbarExample');
        barra.style.width = contador + '%';
        barra.innerHTML = contador + '%';
    },200);

    

});

