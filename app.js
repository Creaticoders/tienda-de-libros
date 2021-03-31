


class Book {
	constructor(imagen, titulo, precio){
		this.imagen = imagen;
		this.titulo = titulo;	
		this.precio = precio; 
		// se colocan solo los atributos importantes
	}

  mostrar(container) {
  	//Primera parte haciendo que los libros me aparescan

  	 // 1. llamamos al contendor donde van a ir nuestros libros
  	 const contenedor = document.getElementById(container)

  	 // 2. Creación de elementos

  	 // metodo creatElement
  	 let libro = document.createElement('div')
  	 let imgContenedor = document.createElement('div')
  	 let imagen = document.createElement('img')
  	 let titulo = document.createElement('p')
  	 let precio = document.createElement('p')
  	 let kart = document.createElement('span')
  	 let boton =  document.createElement('button')
  	
  	 //declarando valores de elementos
  	 titulo.textContent = this.titulo
  	 precio.textContent = `${this.precio}$`
  	 boton.textContent = 'Add to cart'
  	 imagen.src = this.imagen

  	 //agregando clases
  	 libro.classList.add('libro')
  	 imgContenedor.classList.add('imgContenedor')
  	 titulo.classList.add('titulo')
  	 precio.classList.add('precio')
     kart.classList.add('icon-cart')
  	 kart.classList.add('nuevo')

  	 
  	 // agregando al contenedor los elementos
  	 // metodo appendChild
  	 contenedor.appendChild(libro)
  	 libro.appendChild(imgContenedor)
  	 imgContenedor.appendChild(imagen)
  	 imgContenedor.appendChild(precio)
  	 libro.appendChild(titulo)
  	 libro.appendChild(boton)
  	 boton.appendChild(kart)

  	 //Parte dos: Click boton
  	 // creación de atributo que nos va a permitir colocar el precio
  	 // metodo setAtribute
  	

  	this.pressBoton(boton)
  }

  pressBoton(btn){
  	//Parte dos: Click boton
  	 // creación de atributo que nos va a permitir colocar el precio
  	 // metodo setAtribute
  	 btn.setAttribute("data-price", this.precio)
  	 

  	 // Cuando se oprime el boton se agrega un producto al carrito
  	 // agregando el escuchador de eventos
  	 btn.addEventListener('click', function(event){
    	// accediendo al atributo data price
    	// creamos una variable donde vamos a acceder al contenido de data price para despues usarlo
    	// console.log(event)
    	let price = this.dataset.price
    	// el contenido esta en string así que en una nueva variable lo convertimos en numero
    	// metodo parseInt
    	let priceNum = parseInt(price)
    	//  agregar productos
    	cart.addProductos(1, priceNum)
    
  	 })
  }






}
	


class Comic extends Book {
	constructor(imagen, titulo, precio){
		super(imagen, titulo, precio);
	}


}


class ShoopingCart {
	constructor(){
		this.products = [];
		
	}


	// Este metodo nos permite agregar productos al carrito
	
	addProductos(cantidad, precio){
		this.products.push( ...Array(cantidad).fill(precio))
		
    // traemos al carrito y al pseudoelemento
		// metodo getComputedStyle
		let carritoCompras = window.getComputedStyle(document.getElementById('carrito'), ':after')
		
    // creamos una variable que va a tener el valor de productos
		let productos = this.products
		
    // el contenido del pseudoelemento va a ser igual al data-content.
		carrito.dataset.content =  productos.length
		
    // para que cuando se agregue algo al carrito es que aparesca el pseudoelemento
		// metodo para agregar Clase
		carrito.classList.add('carrito')
		// funcion que el valor total
		cart.printTicket()
	}
	
	// calcula el precio total sumando cada uno de los elementos del array productos
	calcTotal(){
		return this.products
						.map( price => price )
						.reduce( (ac, price) => ac + price, 0)
	}
	// muestra el valor total 
	printTicket(){
		// hacesmos ajustes para que se vea como queremos
		// traemos el elemento donde se va a escribir el valor
		let valor = document.getElementById('valor')	
		valor.textContent = `${cart.calcTotal()}$`
		
		}
}


// creamos el objeto carrito
const cart = new ShoopingCart()


// guardamos los libros en un array
let listaDeLibros = [
   book1 = new Book('chicaDelTren.jpg', 'La Chica Del Tren', 15),
	 book2 = new Book('LosJuegosDelHambre.jpg','Los Juegos Del Hambre', 18),
	 book3 = new Book('CazadoresDeSombras.jpg','Cazadores De Sombras', 20),
	 book4 = new Book('ElJuegoDeEnder.jpg','El Juego De Ender', 13),
	 book5 = new Book('principito.jpg','El Principito', 11)

]
// comics
let listaDeComics = [
	comic1 = new Comic('TheKillingJoke.jpg', 'Batman: The Killing Joke', 5),
	comic2 = new Comic('SpiderMan.jpg', 'The Amazing Spider-Man', 10),
	comic3 = new Comic('Batman.jpg', 'Batman', 7),
	comic4 = new Comic('LigaJusticia.jpg', 'La Liga De La Justicia', 9),
	comic5 = new Comic('IronMan.jpg', 'Iron-Man', 5)
]


// bucle que imprime cada uno de los elementos del array
// forEach

listaDeLibros.forEach(function(element){
	element.mostrar('containerLibros')

})

listaDeComics.forEach(function(element){
	element.mostrar('containerComics')
})









