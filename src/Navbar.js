const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>React Blog</h1>
      <div className="links">
        <a href="/">Home</a>

        {/* Using In-line CSS */}
        <a href="/create" style= {
          {
            color: 'white',
            backgroundColor: '#f17a35',
            borderRadius: '6px'
          }
        }>New Blog</a>

      </div>
    </nav>
  )
}

export default NavBar
