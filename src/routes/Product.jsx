import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import data from '../../data'
import Card from '../components/Card'

export default function Product() {
  const [items, setItems] = useState(0)
  // Get current location object
  const location = useLocation()
  // Get the last el which is the id in the path '/products/:id'
  const id = location.pathname.slice(-1)
  const product = data.find(product => product.id == id)

  function addToCart(){
    setItems(prevState => prevState + 1)
  }

    return (
      <section>
        <Card {...product}/>
        <button onClick={addToCart}>Add to Cart</button>
        <span>{items > 0 ? `${items} added`: ''}</span>
      </section>
    )
}