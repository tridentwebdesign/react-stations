// @ts-check
import { useEffect, useState } from 'react'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState(
    'https://images.dog.ceo/breeds/dingo/n02115641_13605.jpg',
  )

  const getDogImage = () => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        setBreeds(data.message)
      })
  }

  return (
    <div className="description">
      <button onClick={getDogImage}>画像更新</button>
      <p>犬の画像を表示するサイトです</p>
    </div>
  )
}

export default DogListContainer
