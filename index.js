function Navbar() {
  return (
    <nav>
      <div>Navbar</div>
    </nav>
  )
}

function MainContent() {
  return (
    <h1>I'm learning React!</h1>
  )
}


ReactDOM.render(
  <div>
    {/* concept of composability */}
    <Navbar />
    <MainContent />
  </div>, 
    document.getElementById("root"))