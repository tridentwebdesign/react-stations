import { useState } from 'react'
import { DogImage } from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/dingo/n02115641_13605.jpg',
  )

  const getDogImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setDogUrl(data.message)
      })
  }

  return (
    <div className="description">
      <button onClick={getDogImage}>画像更新</button>
      <p>犬の画像を表示するサイトです</p>
      <DogImage imageUrl={dogUrl} />
    </div>
  )
}
