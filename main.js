const grid = new Muuri('.grid', {
    layout: {
        rounding: false

    }
});


window.addEventListener('load', () => {
    grid.refreshItems().layout();

    document.getElementById('gridd').classList.add('imagenes-cargadas');


    const enlaces = document.querySelectorAll('#categorias a')
    enlaces.forEach((elem) => {
        // console.log(elem);
        elem.addEventListener('click', (e) => {
            e.preventDefault();
            enlaces.forEach((enlace) => enlace.classList.remove('activo'))
            e.target.classList.add('activo');

            // funcion de filtrar 
            const categoria = e.target.innerHTML;
            console.log(categoria);
            
        });
    });
});