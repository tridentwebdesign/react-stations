// DO NOT DELETE

import './App.css'
import { Header } from './Header'
import { Description } from './Description'
import { useState } from 'react'

/**
 * @type {() => JSX.Element}
 */

export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/dingo/n02115641_13605.jpg',
  )

  function getDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setDogUrl(data.message)
      })
  }

  return (
    <div>
      <Header />
      <main>
        <Description dogUrl={dogUrl} getDogImage={getDogImage} />
      </main>
    </div>
  )
}
