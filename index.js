// function Navbar() {
//   return (
//     <nav>
//       <div>Navbar</div>
//     </nav>
//   )
// }

// function MainContent() {
//   return (
//     <h1>I'm learning React!</h1>
//   )
// }


// ReactDOM.render(
//   <div>
//     {/* concept of composability */}
//     <Navbar />
//     <MainContent />
//   </div>, 
//     document.getElementById("root"))

const h1 =document.createElement("h1")
h1.textContent = "Hello World"
h1.className = "header"
console.log(h1)

const element = <h1 className="header">This is JSX</h1>
console.log(element)

ReactDOM.render(element, document.getElementsByID("root"))