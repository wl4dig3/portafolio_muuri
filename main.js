const grid = new Muuri('.grid', {
    layout: {
        rounding: false

    }
});


window.addEventListener('load', () => {
    grid.refreshItems().layout();

    document.getElementById('gridd').classList.add('imagenes-cargadas');

    // Aqui los listener de los enlaces 
    const enlaces = document.querySelectorAll('#categorias a')
    enlaces.forEach((elem) => {
        // console.log(elem);
        elem.addEventListener('click', (e) => {
            e.preventDefault();
            enlaces.forEach((enlace) => enlace.classList.remove('activo'))
            e.target.classList.add('activo');

            // funcion de filtrar 
            const categoria = e.target.innerHTML.toLowerCase();
            console.log(categoria);
            categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`)

        });
        // listener de la barra de busqueda
    });
    document.querySelector('#barra-busqueda').addEventListener('input', (e) => {
        const busqueda = e.target.value;
        // console.log(busqueda);
grid.filter((item) => item.getElement().dataset.etiquetas.includes(busqueda) ); 
    });
});