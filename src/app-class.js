////////Trabajar con clases


class Person{
    constructor(name, age){
        this.name=name
        this.age=age
    }
    getDescription(){
        return `Mi nombre es ${this.name}`
    }
    getFullDescription(){
        return `Mi nombre es ${this.name} y mi edad es ${this.age} años`
    }
}


const miMejorAmigo = new Person('Grégoire', 35)

console.log(miMejorAmigo.getDescription());
console.log(miMejorAmigo.getFullDescription());


class Amigo extends Person {
    constructor(name,age, location){
        super(name,age) ////como partimos del padre Person, con la funcion super lo llamamos
        this.location=location
    }
    saludar(){
        return 'Hola!!!!!'
    }
}

const unAmigo = new Amigo ('Maradona', 60, 'Argentina')
console.log(unAmigo.saludar());


class libro{
    constructor(name,author,editorial,paginas){
        this.name=name
        this.author=author
        this.editorial=editorial
        this.paginas = paginas
    }
    getBooksDescription(){
    return `Este el libro: ${this.name} del autor:${this.author} su editorial es: ${this.editorial} y tiene ${this.paginas} páginas` 
}}

const elUltimoLibro = new libro ('Las aventuras de Mr.X','Jack Leppan' ,'Viennclaus', '259')
console.log('Llamamos a la funcion directamente',elUltimoLibro.getBooksDescription());


const getDesc = elUltimoLibro.getBooksDescription.bind(elUltimoLibro)
console.log('Llamando a la función indirectamente' ,getDesc());

