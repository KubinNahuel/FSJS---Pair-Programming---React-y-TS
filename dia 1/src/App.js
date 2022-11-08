
import './App.css';
import NavBar from './Pair programming/1componente';
import Footer from './Pair programming/2componente';
import IconBar from './Pair programming/3componente';
import Descargar from './Pair programming/4componente';




function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar/>
      </header>
      <Footer/>
       <IconBar/>
       <Descargar/>
    </div>
  );
}

export default App;
// root.render(myFirtsElement);

// var input1=parseInt(prompt("Elije 1 numero"));
// var input2=parseInt(prompt("Elija 2 numero"));
// const cuenta= <h1>El resultado de su suma es {input1 + input2}</h1>
// root.render(cuenta);
// const users = [
//   {name: "John Doe", id: 1},
//   {name: "jane doe", id: 2},
//   {name: "JAJAJAJ", id: 3}
// ];

// function myArray(){
//   return (
//       <div className='usuarios'>
//       <h3>Nombre de usuario</h3>
//       <ul>
//           {
//               users.map(element => {
//                   return(
//                       <li>
//                           {element.name}
//                       </li>
//                   )
//               })
//           }
//       </ul>
//       </div>
//   )
// }




// root.render(myArray());