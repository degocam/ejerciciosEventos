const botonCargar = document.getElementById('btnCargar');

// //Primera forma
// botonCargar.addEventListener('click', saludar);

// function saludar(event){
//     event.preventDefault();
//     console.log('Hola Coders!');
// }

//Segunda forma
botonCargar.onclick = () => console.log('Hola desde segunda forma');