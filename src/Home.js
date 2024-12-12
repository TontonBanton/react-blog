import { useState } from "react"

const Home = () => {
  const [name, setName] = useState('firstname')
  const [age, setAge] = useState(13)

  const handleClick = () => {
    setName('lastname')
    setAge(23)
  }


  return (
    <div className="Home">
      <h2>Home Component</h2>
      <p>{name} is {age} years old </p>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Home