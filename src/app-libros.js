let books = [
    {
        title: 'El principito',
        author: 'Antoine de Saint-Exupéry'
    },
    {
        title: 'El Quijote',
        author: 'Miguel de Cervantes Saavedra'
    },
    {
        title: 'Platero y yo',
        author: 'Juan Ramón Jiménez'
    }
]

const onSubmitNewBook = (e) => {
    e.preventDefault()

    console.log(e.target);

    const newTitle = e.target.elements.titulo.value
    const newAuthor = e.target.elements.autor.value ? e.target.elements.autor.value : 'Anónimo'
    if (newTitle) {
        books.push({ title: newTitle, author: 'Anónimo' })
        e.target.elements.titulo.value = ''
        e.target.elements.autor.value = '' // e.target.reset()
        render()
    }
}

const borrarTodosLosLibros = (e) => {
    books = []
    render()
}

const recomendarLibros = (e) => {
    const indice = Math.floor(Math.random() * books.length)   ///para generar un libro entre 0 y el número máximo de libros en este caso de [0 a 2]
    alert(books[indice].title + ' / ' + books[indice].author)
}



const render = () => {


    const template = (
        <div>
            <h1>Consejero literario</h1>
            <h2>Recomendaciones personalizadas al detalle</h2>
            <p>{(books.length > 0)}</p>

            <ul>
                {books.map((book) => {
                    return <li key={book.title}>{book.title}</li>
                })}

                <button onClick={borrarTodosLosLibros}>Borrar todos los libros</button>
                <button onClick={recomendarLibros}>Recomendar libros</button>
            </ul>



            <form action="" onSubmit={onSubmitNewBook}>
                <label htmlFor="titulo">Nuevo título: </label>
                <input type="text" name="titulo" id="titulo" />
                <label htmlFor="autor">Nuevo autor: </label>
                <input type="text" name="autor" id="autor" />
                <button>Añadir libro</button>
            </form>
        </div>
    )

    ReactDOM.render(template, document.querySelector('#appRoot'))
}
render()


const titular = document.querySelector('body > h1');
titular.addEventListener('click', (e) => {
    const respuesta = titular.dataset.respuesta
    console.log(respuesta);
    alert(respuesta);
})

