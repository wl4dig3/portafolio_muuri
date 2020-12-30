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
        grid.filter((item) => item.getElement().dataset.etiquetas.includes(busqueda));
    });
    // listener para las imagenes
    const overlay = document.getElementById('overlay');
    document.querySelectorAll('.grid .item img').forEach((ele) => {
        // console.log(ruta);
        ele.addEventListener('click', () => {
            const ruta = ele.getAttribute('src');
            const descripcion = ele.parentNode.parentNode.dataset.descripcion;
            overlay.classList.add('activo');
            document.querySelector('#overlay img').src = ruta;
            document.querySelector('#overlay .descripcion').innerHTML = descripcion;
        });
    });
    // evento listener para el boton de cerrar
    document.querySelector('#btn-cerrar-popup').addEventListener('click', ()=>{
        overlay.classList.remove('activo');
    });
});