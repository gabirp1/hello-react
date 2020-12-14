class BooksApp extends React.Component {
    render() {

        const title = 'Consejero literario digital'
        const subtitle = 'Te asesoro sobre entidades alfanuméricas'
        const libros = [
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

        return (
            <div>
                <Header titulo={title} subtitle={subtitle} />
                <RecommendBook />
                <Books books={libros} />
                <AddBook />
            </div>
        )
    }
}
/* CLASES ------------------------------------------------------- */
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.titulo}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

/* Header.defaultProps = {
    titulo:0
} */

class RecommendBook extends React.Component {
    render() {
        return (
            <div>
                <button>Recomendar libro</button>
            </div>
        )
    }
}

class Books extends React.Component {
    render() {

        return (<div>
           <p>{this.props.books.length > 0 ? `Hay ${this.props.books.length} libros` : `No hay libros disponibles en enste momentos`}</p>
           {/* Mandando los libros a <Book /> */}
           <ul>{ this.props.books.map( (libro) => { return <Book key={libro.title}  titulo ={libro.title} /> } ) } </ul>

               
            
            </div>
        )
    }
}

class Book extends React.Component {
    render() {
        return (
            <div>
                {/* Recibiendo resultados des de <Books /> */}
                {this.props.titulo}
            </div>
        )
    }
}

class AddBook extends React.Component {
    render() {
        return (
            <form>
                <label htmlFor="title">Título</label>
                <input type="text" name="title" id="title" />
                <label htmlFor="author">Autor</label>
                <input type="text" name="author" id="author" />
                <button>Añadir libro</button>
            </form>
        )
    }
}


ReactDOM.render(<BooksApp />, document.querySelector('#appRoot'))