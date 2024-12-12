const Home = () => {
  const handleClick = (e) => {
    console.log('simple button handler', e)
  }
  const handleClick2 = (name, e) => {
    console.log('handler with arguments ', name, e)
  }

  return (
    <div className="Home">
      <h2>Home Component</h2>
      <button onClick={handleClick}>Click</button>
      <button onClick={ (e) => handleClick2('myname', e) }>Click 2</button>
    </div>
  )
}

export default Home